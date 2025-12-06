import { useNavigate } from "react-router-dom";
import { useAuth } from "../Services/AuthContext";
import { FaFilter, FaHistory, FaSignOutAlt } from "react-icons/fa";


function NavBar(){

  const {logout} = useAuth();
    const navigate = useNavigate();

    function handleLogout(){
      const result: boolean = logout(); 
 if(result){
  navigate("/login")
 }else{
  console.log("Error in handle logout");
 }

    }
    return (
        
<nav className="w-full h-20 bg-[#07114CFF] p-4 text-white flex items-center justify-between">      {/* Left side icons */}
      <div className="flex space-x-4">
       <FaHistory className="w-6 h-6 cursor-pointer hover:text-gray-400" />
        <FaFilter className="w-6 h-6 cursor-pointer hover:text-gray-400" />
      </div>

      {/* Right side icon */}
      <div onClick={handleLogout} >
        <FaSignOutAlt  className="w-6 h-6 cursor-pointer hover:text-gray-400" />        
      </div>
    </nav>
      );
    }

    
export default NavBar;
