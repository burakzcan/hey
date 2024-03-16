import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App';
import heyTheme from './config/theme'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter([
    {
        "path": "/",
        "element": <App />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={heyTheme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);
