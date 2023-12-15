import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const children = (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

const container = document.getElementById('root');
createRoot(container as Element).render(children);
