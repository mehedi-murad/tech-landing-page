import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import Details from "../Pages/Details/Details";
import PrivateRouter from "./PrivateRouter";
import Projects from "../Pages/Projects/Projects";
import ProjectDetails from "../Pages/Details/ProjectDetails";
import Courses from "../Pages/Courses/Courses";
import Gallery from "../Pages/Gallery/Gallery";
import Blogs from "../Pages/Blogs/Blogs";

const Routes = createBrowserRouter([
    {
        path : "/",
        element : <Root></Root>,
        errorElement: <Error></Error>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/details/:id",
                element : <PrivateRouter><Details></Details></PrivateRouter>
            },
            {
                path: "/projects",
                element : <PrivateRouter><Projects></Projects></PrivateRouter>
            },
            {
                path : "/projectdetails/:id",
                element : <PrivateRouter><ProjectDetails></ProjectDetails></PrivateRouter>
            },
            {
                path : "/courses",
                element : <Courses></Courses>
            },
            {
                path : "/gallery",
                element : <PrivateRouter><Gallery></Gallery></PrivateRouter>
            },
            {
                path : "/blogs",
                element : <Blogs></Blogs>
            }
        ]
    }
])

export default Routes;