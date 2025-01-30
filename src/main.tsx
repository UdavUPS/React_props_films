import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './react/App.tsx';

import './css/resetStyle.css';
import './css/style.css';
/* import './js/actions.js'; */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)