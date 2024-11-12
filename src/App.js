import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';


function App() {


  const myRouter = createBrowserRouter([
    { path: '', element: <Login /> },
    { path: '/login', element: <Login /> },
    {path:'/register', element: <Register/>}
  ])



  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  );
}

export default App;
