import './style.css'
import ReactDOM from 'react-dom/client'
import SceneBox from './SceneBox'
import { BrowserRouter } from 'react-router-dom' 
import { ThemeProvider } from './ThemeProvider'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <BrowserRouter>
            <ThemeProvider>
                    <SceneBox />
            </ThemeProvider>
        </BrowserRouter>
    </>
)