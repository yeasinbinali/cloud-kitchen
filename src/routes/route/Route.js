import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import AllServices from '../../pages/AllServices/AllServices';
import Home from '../../pages/Home/Home/Home';


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
            }
        ]
    }
])