import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Root from './Root';
import { GlobalStyle, theme } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </ThemeProvider>
);
