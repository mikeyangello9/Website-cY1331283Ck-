import './style.css'
import ReactDOM from 'react-dom/client'
import Model from './Model'
import { BrowserRouter } from 'react-router-dom' 
import { ThemeProvider } from './ThemeProvider'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
       <ThemeProvider>
            <BrowserRouter>
                <Model />
            </BrowserRouter>
       </ThemeProvider>
      
        
    </>
)