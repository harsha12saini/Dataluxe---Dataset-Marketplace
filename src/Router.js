import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { account } from './appwriteConfig';
import DataHome from './components/DataHome';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import Playground from './components/playground';
import Dashboard from './components/Dashboard';

// Loader function for authenticated routes
const loader = async () => {
    try {
        await account.get();
        return {}; 
    } catch {
        return { redirect: '/login' }; 
    }
};

// Define routes
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/playground",
    element: <Playground />,
  },
  {
    path:"/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />, 
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />, 
  },
  {
    path: "/home",
    element: <DataHome />,
    loader, 
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

const AppRouter = () => (
  <RouterProvider router={router} />
);

export default AppRouter;
