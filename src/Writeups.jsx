import { useEffect, useState } from "react"
import { faBackspace, faBackward, faBook, faLessThan, faTentArrowTurnLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "./ThemeProvider"
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomOneDark, dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"


export default function (props) {
    const { theme } = useTheme()
    const [displayNote, setDisplayNote] = useState(false)
    const [markdown, setMarkdown] = useState("")
    const topic = props.topic.map((t, i) => {
        return <li className="topic-tag" style={{color: theme ==="white" ? "black" :"white",background: theme}}  key={i}>{t}</li>
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
        color: theme === "aqua" ? "black" : theme === "white" ? "black" : "white", 
        padding: "1rem", 
        borderRadius: "8px",
        fontSize: ".6rem", 
        overflowX: "auto", 
    }
    
 
    if (displayNote) {
        return (
            <div className="note-container" >
                <button className="back-button" onClick={toggleNotes}>
                    <FontAwesomeIcon icon={faLessThan}/>
                </button>
                <div className="note-display">
                    <h2>{props.title}</h2>
                </div>

                <div className="topics">{topic}</div>

                <div className="text-body markdown-body">
                    <ReactMarkdown
                        children={markdown}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            img({ node, ...props }){
                                return <img {...props} style={{ width: '100%',maxWidth: '100%', height: 'auto', marginLeft:'auto', marginRight: 'auto' }} />;
                            },
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || "");
                                return !inline && match ? (
                                    <SyntaxHighlighter 
                                        style={atomOneDark} 
                                        language={match[1]} 
                                        PreTag="div" 
                                        customStyle={customStyle}
                                        {...props}>
                                        {String(children).replace(/\n$/, "")}
                                    </SyntaxHighlighter>
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

                    <div className="writeup"  style={{display: "flex", fontFamily: "Space Mono, monospace", color: theme}}>
                        {props.title}
                    </div>

                    <div className="topics" >
                        {topic}
                    </div>
            </div>
       
            

        </div>
    </>
}