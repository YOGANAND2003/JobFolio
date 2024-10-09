import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/shared/Navbar.jsx";
import Signup from "./components/auth/Signup.jsx";
import Home from "./components/Home.jsx";
import LogIn from "./components/auth/Login.jsx";
import Jobs from "./components/Jobs.jsx";
import Browse from "./components/Browse.jsx";
import Profile from "./components/Profile.jsx";
import JobDescription from "./components/JobDescription.jsx";
import Companies from "./components/admin/Companies.jsx";
import CreateCompany from "./components/admin/CreateCompany.jsx";
import CompanySetup from "./components/admin/CompanySetup.jsx";
import AdminJobs from "./components/admin/AdminJobs.jsx"
import PostJobs from "./components/admin/PostJobs.jsx";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <LogIn />
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path:"/browse",
    element:<Browse/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },

  //Admin Routing
  {
    path:"/admin/companies",
    element:<Companies/>
  },{
    path:"/admin/companies/create",
    element:<CreateCompany/>
  },{
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  },{
    path:"/admin/jobs",
    element:<AdminJobs/>
  },,{
    path:"/admin/jobs/create",
    element:<PostJobs/>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={ appRouter}/>
    </>
  );
}

export default App;
