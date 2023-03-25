import { RouterProvider } from "react-router";
import { router } from "./routes/route/Route";

function App() {
  return (
    <div className='bg-orange-50'>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
