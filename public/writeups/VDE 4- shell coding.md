stacks and stack frames - review
- LIFO data structure, items can be popped and pushed
- stack frames can be created inside these structures, stack frames are created contiguously as functions are called.  hence there is a repeating pattern over time. 
- pushing grows towards lower addresses i.e. - 4 bytes while popping shrinks to higher addresses +bytes
- the pattern to look out for is as follows

```asm
PUSH EBP
MOV EBP, ESP
SUB ESP, X

; local variables can be added
movl $0x1, 0xc(%ebp) ; decrements by 4 bytes/ local variable
movl $0x2, 0x10(%ebp)
```

`MOV` 

![Image](/images/shellcoding1.png)


```c

void func(){
 printf("this is the called function");
}
int main(){
	int a = 1; 
	int b = 2;
	func(); // it excutes the ret instruction when done

	int c  = 3; //  next instruction called
}
```

- when `main()` the caller calls `func()` the called.
	- it pushes the return address of the next instruction in main onto the stack i.e. `int c=3;` 
	- the `call func` instruction updates the EIP to point to `func()`
- called function execution
	- it runs normally
	- the stack frame and all that is created to house local variables, parameter and what not
- the `Ret` instruction
	- when the called function `func()` is finished executing, the `ret` instruction removes the return address from `func()` stack frame
	- and loads it into the EIP, making the CPU jump back to that address in main() i.e. it resumes what it was doing before which is inside of `main()`

![[Pasted image 20250215150234.png]]

![[Pasted image 20250215150308.png]]

![[Pasted image 20250215150945.png]]

![[Pasted image 20250215151359.png]]

# Buffer overflow (stack overflow)
```c
void func() {
	printf("This is funkious mcDonkious\n");
} 
int main(char * input) {
	func(); 
	char buffer[8] = "AAAAAAAA";
	strcpy(input, buffer); 
    return 0;
}

```


![[Pasted image 20250215152235.png]]


![[Pasted image 20250215152303.png]]


## how to over flow a stack
- an array variable can be overflowed directly e.g. `AAAAAAAAAAA` for a buffer with only 8 spaces.
- insecure C functions and their secure counterparts:
	- `gets` use `fgets` as it checks the size of the buffer, `fgets(buffer, sizeof(buffer), stdin)`
	- `strcpy` use `strncpy` it validates the destination and  source of the input `strncpy(dest, src, sizeof(dest) -1)`
	- `strcat` use `strncat` it checks the source and destination of the input as well as the end of the destination `strncat(dest, src, sizeof(dest) - strlen(dest) - 1)`
	- `sprintf` use `snprintf` like this `snprintf(buffer, sizeof(buffer), "%d", num)`


address space layout randomisation (ALSR)
- ASLR  is a technique used by operating systems to randomise the location of resources in memory every time a process is loaded. 
- this is used because of exploits, which require a reliable location to store and execute the shellcode
![[Pasted image 20250215182059.png]]

## Shell code
- Shellcode is a set of **machine instructions** (often x86) injected into a program **via an exploit** to execute arbitrary code. The **EIP (Instruction Pointer)** is crucial because it determines the next instruction to execute. In an exploit, attackers **overwrite the return address on the stack** so that EIP points to their shellcode, redirecting execution to it instead of returning normally.
- exploits  interrupts execution 
- and points the EIP to the shellcode address rather than the return address of the caller function
```c
// example
void func() {
	printf("this is func.\n")
}

int main(char * input) {
	char buffer[8];

	strcpy(buffer, "aaaaa"); // could be argv
	int a = 1;
	int b = 2;

	func(); // When `func()` is called, the return address (the next instruction in       `main()` **after** `func()` finishes) is **pushed onto the stack**.
	int c = 3; // next instruction? 


	// When `func()` returns, the return address is **popped into EIP**, making           execution continue from there.
	
}
```


how is it delivered
- embedded in a program already
- as part of an exploit such as a buffer overflow - size of the shellcode is important(smaller the better) since it needs to usually fit inside of the buffer being overflowed
- Part of an executable file
- via a network e.g. crafted packets


`int (*foo)() = (int(*) ())code`



