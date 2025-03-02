import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { account } from './appwriteConfig'; // Ensure your Appwrite configuration is correct
import DataHome from './components/DataHome'; // Imported Home component
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import Playground from './components/playground';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    loader: async () => {
      try {
        await account.get(); // Get user information from Appwrite
        return {}; // Proceed to the sign-up screen
      } catch {
        return { redirect: '/login' }; // Redirect to login if not authenticated
      }
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />,
  },
  {
    path:"/playground",
    element: <Playground />,
  },
  {
    path: "/home", // Updated path to Home
    element: <DataHome />, // Replaced Chatbot with Home component
    loader: async () => {
      try {
        await account.get(); // Check if the user is logged in
        return {}; // User is authenticated, proceed to Home
      } catch {
        return { redirect: '/login' }; // Redirect to login if not authenticated
      }
    },
  },
  {
    path: "*",
    element: <Navigate to="/login" />, // Redirect unknown paths to login
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
