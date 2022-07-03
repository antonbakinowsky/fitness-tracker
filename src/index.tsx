import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('app') as HTMLElement;

ReactDOM.createRoot(container).render(<App />);
