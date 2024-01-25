import { createBrowserRouter } from "react-router-dom";

import Root from '@pages/Root';
import Welcome from '@pages/Welcome.js';
import AccessData from "@pages/Register/AccessData";
import UserData from "@pages/Register/UserData";
import UploadDocuments from "@pages/Register/UploadDocuments";
import Login from "@pages/Login/Login";
import OTP from "@pages/Login/OTP";
import Home from "@pages/Wallet/Home";
import Movements from "@pages/Wallet/Movements";
import Send from "@pages/Wallet/Send";
import Receive from "@pages/Wallet/Receive";
import Market from "@pages/Market/Market";
import Buy from "@pages/Market/Buy";
import Sell from "@pages/Market/Sell";
import Profile from "@pages/Profile/Profile";
import EditUserData from "@pages/Profile/EditUserData";
import EditPassword from "@pages/Profile/EditPassword";

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
                element: <Home/>
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
    },
    {
        path: '/market',
        element: <Root/>,
        children: [
            {
                path: '/market',
                element: <Market/>
            },
            {
                path: '/market/buy',
                element: <Buy/>
            },
            {
                path: '/market/sell',
                element: <Sell/>
            },
        ]
    },
    {
        path: '/profile',
        element: <Root/>,
        children: [
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/profile/edit-user-data',
                element: <EditUserData/>
            },
            {
                path: '/profile/edit-password',
                element: <EditPassword/>
            }
        ]
    }
]);

export default router;