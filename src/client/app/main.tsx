import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Index from '@client/pages/Index/Index';
import './main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
