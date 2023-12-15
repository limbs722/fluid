import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from './layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            // {
            //   path: "",
            //   element: <Home />,
            // },
        ],
    },
]);

export default router;
