import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import AllServices from '../../pages/AllServices/AllServices';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import MyReviews from '../../pages/MyReviews/MyReviews';
import Signup from '../../pages/Signup/Signup';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])