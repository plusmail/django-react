import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root')


ReactDOM.createRoot(rootNode).render(

  <BrowserRouter>
    <App />
    </BrowserRouter>,
);

reportWebVitals();