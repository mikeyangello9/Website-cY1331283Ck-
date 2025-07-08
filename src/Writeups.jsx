import { useEffect, useState } from "react"
import { faBackspace, faBackward, faBook, faCopy, faLessThan, faTentArrowTurnLeft } from "@fortawesome/free-solid-svg-icons"
import { Copy } from 'lucide-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "./ThemeProvider"
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomOneDark, dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"



export default function (props) {
    const { theme } = useTheme()
    const [displayNote, setDisplayNote] = useState(false)
    const [markdown, setMarkdown] = useState("")
    const topic = props.topic.map((t, i) => {
        return <li className="topic-tag" style={{color: theme === "white" || theme === "wheat" ? "black" :"white",background: theme}}  key={i}>{t}</li>
   })

   useEffect(() => {
    async function fetchMarkdown() {
        try {
            const response = await fetch(`/writeups/${props.body}`);
            let text = await response.text();
            // change
            text = text.replace(/!\[\[(.*?)\]\]/g, (_, filename) => `![Image](/images/${filename})`) 

            setMarkdown(text);
        } catch (error) {
            console.error("Error loading Markdown file:", error);
            setMarkdownContent("### Error: Unable to load the document.");
        }
    }

    fetchMarkdown();
   }, [props.body])


   
   const toggleNotes = () => {
        console.log("clicked on note")
        setDisplayNote(!displayNote)
    }

    const customStyle = {
        background: theme, 
        color: theme === "wheat" ? "black" : theme === "white" ? "black" : "white", 
        // color: "red",
        padding: "1rem", 
        borderRadius: "8px",
        fontSize: "1rem", 
        overflowX: "auto", 
        border: "1px solid white"
    }
    
 
    if (displayNote) {
        return (
            
                <div className="note-container" >
                    <button style={{color: theme}} className="back-button" onClick={toggleNotes}>
                        <FontAwesomeIcon icon={faLessThan}/>
                    </button>
                    <div className="note-display">
                        <h2>{props.title}</h2>
                        <h2> - {props.date}</h2>
                    </div>

                    <div className="topics">{topic}</div>

                    <div className="text-body markdown-body" style={{color: "white"}}>
                        <ReactMarkdown
                            children={markdown}
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                img({ node, ...props }){
                                    return <img {...props} style={{ display: 'block', margin: '1.5rem auto', maxWidth: '100%', height: 'auto' }} />;
                                },
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || "");
                                    const codeContent = String(children).replace(/\n$/, "");
                                    const [copied, setCopied] = useState(false)

                                    const handleCopy= () => {
                                        navigator.clipboard.writeText(codeContent)
                                            .then(() => {
                                                setCopied(true);
                                                console.log("Code copied to clipboard");
                                                setTimeout(() => setCopied(false), 2000)
                                            })
                                            .catch((err) => {
                                                console.error("Error copying code: ", err);
                                            });
                                    };
                                    return !inline && match ? (
                                        <div style={{ position: "relative" }}>
                                            <button className="copy-button" onClick={handleCopy} style={{ position: "absolute", top: "5px", right: "5px", background: theme, color: theme === "white" ? "black" : "white", borderRadius: "4px", padding: "2px 4px", fontSize: ".6rem" }}>
                                                <Copy />
                                            </button>
                                            {copied && (<div className="show-copied" style={{background: theme, color: theme === "white" ? "black" : "white"}}>
                                                code copied✅
                                            </div>)}
                                            <SyntaxHighlighter 
                                                style={atomOneDark} 
                                                language={match[1]} 
                                                PreTag="div" 
                                                customStyle={customStyle}
                                                {...props}>
                                                {String(children).replace(/\n$/, "")}
                                            </SyntaxHighlighter>
                                        </div>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        />
                    </div>
                </div>

        )
    }

    
    
    return <>
        <div className="notebook"  onClick={toggleNotes}>

          
            <div className="note-details" >

                    <div className="note-icon">
                        <FontAwesomeIcon icon={faBook} color={theme} size="1x"/>
                    </div>

                    <div className="writeup"  style={{display: "flex", color: theme}}>
                        {props.title}
                    </div>

                    
                    <div className="writeup-date">{props.date}</div>

                
            </div>
       
            

        </div>
    </>
}