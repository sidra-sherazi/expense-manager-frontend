import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import Categories from "../pages/Categories";
import Analytics from "../pages/Analytics";
import Profile from "../pages/Profile";
import Reports from "../pages/Reports";

import ProtectedRoute from "./ProtectedRoute";


export default function AppRoutes() {


return (

<Routes>


<Route 
path="/"
element={<Navigate to="/dashboard" replace />}
/>


<Route 
path="/login"
element={<Login />}
/>


<Route 
path="/register"
element={<Register />}
/>





<Route element={<ProtectedRoute />}>


<Route
path="/dashboard"
element={<Dashboard />}
/>


<Route
path="/expenses"
element={<Expenses />}
/>


<Route
path="/categories"
element={<Categories />}
/>


<Route
path="/analytics"
element={<Analytics />}
/>


<Route
path="/reports"
element={<Reports />}
/>


<Route
path="/profile"
element={<Profile />}
/>



</Route>



</Routes>

);

}