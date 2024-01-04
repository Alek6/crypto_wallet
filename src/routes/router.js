import { createBrowserRouter } from "react-router-dom";

import Root from '@pages/Root';
import Welcome from '@pages/Welcome.js';
import AccessData from "@pages/Register/AccessData";
import UserData from "@pages/Register/UserData";
import UploadDocuments from "@pages/Register/UploadDocuments";

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
            {
                path: '/register/upload-documents',
                element: <UploadDocuments/>
            }
        ]
    }
]);

export default router;