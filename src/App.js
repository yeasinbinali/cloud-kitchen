import { Button } from "@mui/material";
import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./routes/route/Route";

function App() {
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
