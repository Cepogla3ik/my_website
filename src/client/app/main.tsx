import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Index from '@client/pages/Index/Index';
import './main.scss'
/* import Data from '@client/features/Data'; */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)

/* new Data("name", {});
new Data("name", {}); */