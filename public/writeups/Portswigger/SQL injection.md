## Intro to SQL

it stands for structured query Language, used for manipulating data in a database which is needed for CRUD operations performed on data, protect and optimize data


## Relational database
Tables that can be linked with each other linked to one another through constraints


## Practical example of a simple database

### Create a table

create a table using sqlite3 that can be found in most distros of Linux

```sql
CREATE TABLE Users(
	ID INT PRIMARY KEY NOT NULL,
	NAME TEXT NOT NULL,
	USERNAME TEXT NOT NULL,
	EMAIL TEXT NOT NULL,
	PASSWORD CHAR(32) NOT NULL
);
```

the format usually involves the name of the data label, the data type of said label and the constraints tied to it, these include `NOT NULL` or `CHAR(32)` which means the data label cannot be empty and can only hold up to 32 characters at a time.


### insert data into the table
Now we can insert data into the tables we created earlier using the insert keyword while adhering to the constraints we put in place
```sql
INSERT INTO Users VALUES
(1, 'Paul', 'p_man', 'paulnewman@test.com', 'secret!'),
(2, 'Randy', 'ortonnn', 'rorton@test.com', 'secret2'),
(3, 'Peter', 'griff_man', 'petergriffin@test.com', 'secret3');
```


### Query database tables
this is where the fun is at, using the below code we can query the table we created for the data we inserted. 


```sql

SELECT * FROM Users; 
```


the above uses the wild card to select all of the data inserted into the table, and we get this in return


```sql

1|Paul|p_man|paulnewman@test.com|secret!
2|Randy|ortonnn|rorton@test.com|secret2
3|Peter|griff_man|petergriffin@test.com|secret3
```


representing the whole of the data including rows and columns.
data can also be queried based on certain conditions using the `WHERE` Keyword

and finally where it gets interesting is the `OR` command where we can query the entire database and it returns all of the data because the OR logic means one condition is true, then the whole condition is true, 1 or  0 equals 1 anyway.

```sql
SELECT name,password FROM Users WHERE id=1 OR 1=1;
```

the above query will be true because 1=1 is a true value regardless of the other condition, hence we yield this result.


```sql
Paul|secret!
Randy|secret2
Peter|secret3
```
hence a typical payload can be

```sql
' OR 1=1 --
```



NOTE: This can be dangerous as the database can be contain a large amount of roles 


now we can move on to injection, but first we need to understand the meaning of an interpreter 
- which reads some text, 
- converts them into tokens
- these tokens are then combined into abstract syntax trees (ASTs), which are transformed into different  ASTs for many reasons
- the ASTs are then executed


the applications prepares the Text (ASCII) to be processed by an interpreter, but an attacker can modify these text through the vulnerabilities in the applications. 

an example of this can be a vulnerable endpoint which authenticates user but allows them to control the data that gets inputted. data can be queried from a table using the line of code
```sql
	SELECT name FROM users WHERE name= '$name' AND password='$p_hash';
```

this is giving the client the ability to query the database unknowing to the developer, using the typical payload `-- OR 1=1` we can obtain all the names from the database using the payload combination

```sql 
SELECT name From user WHERE name=' 'OR 1=1; --' AND password='123';
```
the above payload uses the OR payload to print the name of the users regardless of the first segment of the query. 

![[payload_result.png]]

here we have;
- used the OR to output the names regardless of the first half of the condition
- escaped the first single quotes using `<magic happens here>`
- we nullified the rest of the query using the -- comment tags, this is to ensure the other AND operator does not work anymore hence it is not interfering

## DVWA demo
### SQLi for low security levels 
using the common payload ` ' OR 1=1 #` can get all of database on a basic level

![[burpinterface.png]]


using a Union select to check how many columns there are, as well as figure out the names of the columns (basically knowing the entire structure of the database, tools like sqlmap can help with this)

`' UNION SELECT user, password  FROM Users #` will check how many columns the table has basically through fuzzing (recon stage/educated guesses), first we used null to figure out the number of columns and then we ease into finding the name of the columns e.g. username, user, id etc.

![[resultofpayload2.png]]


## Medium level security DVWA

here we have no user input to interact with hence its all burp suite for this one 

![[mediumDVWASQLi.png]]


however we can confirm that the payload remains the same as the low security SQLi, except we have to begin with `1` because the combo-box still expects an input just now a conventional one, but we can make it conventional using burp-suite.

hence our first payload is:
1 OR 1=1 #` to get firstname and surname` 

![[burpside.png]]

![[Payload1.png]]

second payload to get the password hashes, again only the `1`  changes from the low security one.
`1 UNION SELECT user, password  FROM Users #` 

and in burp-suite our payload is as follows

![[burpside2.png]]

![[Payload2222.png]]

we will be testing this concepts on a more sophisticated website in secure-bank.io


## Secure bank application

![[securebankui.png]]

here we are greeted with a warning when attempting to inject some SQL queries, this is indicative of an underlying vulnerability in the user input, we can however setup burp to proxy this application to craft our payload in peace.

![[burpside3.png]]
with the above payload we confirm the vulnerability in the secure bank application, next up we can do a little fuzzing/educated guesses, to try to find the number of columns in this field.


' Union SELECT 10, 'string', 'string', '06/21/2025', 'string', '1', @@version FROM Transactions --

we can then place suspected data types in our payload according the earlier responses, this will help us figure out the number of columns this Table has. 

## Conclusion
we will be proceeding into PortSwigger labs with what we have learned here