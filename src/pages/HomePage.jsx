import Navbar from "../components/Navbar";
import RegisterPage from "../pages/auth/RegisterPage"
export default function HomePage()
{
    return(<div><Navbar/>
        <p>home page</p>
        <RegisterPage/></div>);
}