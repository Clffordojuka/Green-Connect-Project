import { Link } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
const Home = () => {
    return (
        <div>
            <button><Link to= "/register">Register</Link></button>
            <button><Link to= "/login">Login</Link></button>

            <Header/>
            <div className="navbar">
                <div className="navbar-txt">
                    <button><Link to= "/register">Register</Link></button>
                    <button><Link to= "/login">Login</Link></button>
                </div>
            </div>
            <Outlet></Outlet>

            <div>
            <Hero/>
            </div>
        </div>
     );
}
 
export default Home;