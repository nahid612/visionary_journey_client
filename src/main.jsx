import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import NotFound from "./component/NotFound";
import AllTouristSpot from "./pages/AllTouristSpot/AllTouristSpot";
import AddTouristSpot from "./pages/AddTouristSpot/AddTouristSpot";
import MyAddList from "./pages/MyAddList/MyAddList";
import AuthProvider from "./AuthProvider/AuthProvider";
import Register from "./component/Register";
import Login from "./component/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UpdatePlace from "./pages/AllTouristSpot/UpdatePlace";
import ViewDetails from "./pages/AllTouristSpot/ViewDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allTouristspot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("https://visionary-five.vercel.app/allTouristspot"),
      },
      {
        path: "/addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/myAddList",
        element: (
          <PrivateRoute>
            <MyAddList />
          </PrivateRoute>
        ),
      },
      {
        path: "/updatePlace/:id",
        element: (
          <PrivateRoute>
            <UpdatePlace />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
