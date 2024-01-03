import { createBrowserRouter } from "react-router-dom";

import Root from '@pages/Root';
import Welcome from '@pages/Welcome.js';
import AccessData from "@pages/Register/AccessData";
import UserData from "@pages/Register/UserData";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome/>
    },
    {
        path: '/register',
        element: <Root/>,
        children: [
            {
                path: '/register',
                element: <AccessData/>
            },
            {
                path: '/register/user-data',
                element: <UserData/>
            },
        ]
    }
]);

export default router;