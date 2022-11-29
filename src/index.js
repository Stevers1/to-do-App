import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';

const root= ReactDOM.createRoot(document.querySelector(".root"))

root.render(<App />);
