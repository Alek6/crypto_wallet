import { createBrowserRouter } from "react-router-dom";

import Root from '@pages/Root';
import Welcome from '@pages/Welcome.js';
import AccessData from "@pages/Register/AccessData";
import UserData from "@pages/Register/UserData";
import UploadDocuments from "@pages/Register/UploadDocuments";
import Login from "@pages/Login/Login";
import OTP from "@pages/Login/OTP";
import Wallet from "@pages/Wallet/Wallet";
import Movements from "@pages/Wallet/Movements";
import Send from "@pages/Wallet/Send";
import Receive from "@pages/Wallet/Receive";

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
    },
    {
        path: '/login',
        element: <Root/>,
        children: [
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/login/otp',
                element: <OTP/>
            }
        ]
    },
    {
        path: '/wallet',
        element: <Root/>,
        children: [
            {
                path: '/wallet',
                element: <Wallet/>
            },
            {
                path: '/wallet/movements',
                element: <Movements/>
            },
            {
                path: '/wallet/send',
                element: <Send/>
            },
            {
                path: '/wallet/receive',
                element: <Receive/>
            }
        ]
    }
]);

export default router;