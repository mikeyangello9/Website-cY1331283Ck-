import { useTheme } from "./ThemeProvider"
export default function About(){
    const { theme } = useTheme()

    return <>
        <div  className="content turn-dark">


{/* 
            <svg  style={{background:"white", width:"100%" ,height:"100%"}}  transform="scale(10)"  viewBox="0 0 1113 754" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g>
                        <path id="Vector" d="M139.88 28.84V106.45H183.46L249.16 39.39L308.39 39.05V56.75L243.37 123.48H177.67L139.88 161.26V216.58H158.1L336.31 38.37V10.8H182.61L162.56 29.43L139.88 28.84Z" fill="red" stroke-miterlimit="10"/>
                        <path id="Vector_2" d="M203.8 216.58L272.48 147.9H301.59L337.59 111.9V151.73L271.71 217.6H202.48L207.18 212.9" stroke="#1D1D1C" stroke-miterlimit="10"/>
                        <path id="Vector_3" d="M198.96 732.76V635.63L219.54 615.05V564.14L247.7 592.3V685.46L198.75 734.41V727.76" stroke="#1D1D1C" stroke-miterlimit="10"/>
                        <path id="Vector_4" d="M139.88 298.12V232.75H233.84L367.08 365.99V375.05L334.33 342.31H276.39L238.1 298.12H139.88Z" stroke="#1D1D1C" stroke-miterlimit="10"/>
                        <path id="Vector_5" d="M131.82 554.28V488.92H225.78L359.01 622.15V631.21L326.27 598.47H268.33L230.03 554.28H131.82Z" stroke="#1D1D1C" stroke-miterlimit="10"/>
                        <path id="Vector_6" d="M139.88 433.6V415.22L169.84 386.97V363.82L203.35 330.31H245.42L139.88 433.6Z" stroke="#1D1D1C" stroke-miterlimit="10"/>
                        <path id="Vector_7" d="M251.39 488.92L238.39 475.92L239.59 434.75L223.22 418.38V370.99L252.97 341.25L251.39 488.92Z" stroke="#1D1D1C" stroke-miterlimit="10"/>
                    </g>
           
            </svg>   */}
            
                
            <div className="detail">
                <p>michael</p>
                <div className="profile"></div>
                <p>names</p>
            </div>
            


            <div className="aboutme">
                <p>I am an enthusiastic student with a deep interest in networking within the extensive cybersecurity domain. 
                    I had the opportunity to engage in a project where I conducted a comprehensive analysis of network traffic using Wireshark, specifically focusing on the identification of network packets.</p>
                   <div className="resume">
                        <button style={{background:theme}} className="cv">
                                <a style={{color: theme ==="white" ? "black" :"white"}} href="">RESUME</a>
                        </button>
                   </div>
            </div>
            

            
            
        

                <div className="group">
                    <h1 className="header">SKILLS</h1>
                    <div className="one">JavaScript</div>
                    <div className="one">Python</div>
                    <div className="one">WireShark</div>
                    <div className="one">Git</div>
                    <div className="one">Virtualisation</div>
                    <div className="one">Bash</div>
                    <div className="one">C</div>
                   
                </div>

          

           

        </div>

        
</>
}