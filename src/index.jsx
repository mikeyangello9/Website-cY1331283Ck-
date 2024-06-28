import './style.css'
import ReactDOM from 'react-dom/client'
import Model from './Model'
import { BrowserRouter } from 'react-router-dom' 

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <BrowserRouter>
           <Model />
        </BrowserRouter>
      
        
    </>
)