import { RouterProvider } from "react-router";
import { router } from "./routes/route/Route";
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className='bg-orange-50'>
      <div><Toaster/></div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
