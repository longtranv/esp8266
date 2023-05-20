import { Login } from './pages/login';
import Toggles from './pages/toggles';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider
} from "react-router-dom";
// import ErrorPage from "./pages/error-page";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/main' element={<Toggles/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
