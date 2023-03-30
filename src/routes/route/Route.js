import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../pages/About/About";
import AllFoods from "../../pages/AllFoods/AllFoods";
import DetailsFood from "../../pages/DetailsFood/DetailsFood";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import ReviewForm from "../../pages/ReviewForm/ReviewForm";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allFoods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/reviewform/:id",
        element: (
          <PrivateRoute>
            <ReviewForm></ReviewForm>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://cloud-kitchen-server-blue.vercel.app/foods/${params.id}`
          );
        },
      },
      {
        path: "/detailsfood/:id",
        element: <DetailsFood></DetailsFood>,
        loader: async ({ params }) => {
          return fetch(
            `https://cloud-kitchen-server-blue.vercel.app/foods/${params.id}`
          );
        },
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
