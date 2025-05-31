import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar (){
    const isLoggedIn = useState(false);
  
    function logout(){
        console.log("logout");
    }
    
    return (
        <div>
            <Link to="/groups">
                Groups
            </Link>
            <Link to="/events">
                Events
            </Link>
            {isLoggedIn? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
          
        </div>
    )
}

export default Navbar;