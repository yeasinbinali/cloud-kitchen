import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import About from '../../pages/About/About';
import AllFoods from '../../pages/AllFoods/AllFoods';
import DetailsFood from '../../pages/DetailsFood/DetailsFood';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import MyReviews from '../../pages/MyReviews/MyReviews';
import ReviewForm from '../../pages/ReviewForm/ReviewForm';
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
                path: '/allFoods',
                element: <AllFoods></AllFoods>
            },
            {
                path: '/reviewform/:id',
                element: <ReviewForm></ReviewForm>,
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/foods/${params.id}`)
                }
            },
            {
                path: '/detailsfood/:id',
                element: <DetailsFood></DetailsFood>,
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/foods/${params.id}`)
                }
            },
            {
                path: '/reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/about',
                element: <About></About>
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