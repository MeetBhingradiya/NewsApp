import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#010409'
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider theme={DarkTheme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)
