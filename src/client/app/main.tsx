import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Index from '@client/pages/Index/Index';
import './main.scss'
import Generator from '@shared/util/Generator';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)

const gen: Generator = new Generator("test", 10);
console.log("Generated token:", gen.token);