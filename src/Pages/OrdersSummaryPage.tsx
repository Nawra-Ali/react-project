import { useNavigate } from "react-router-dom";
import { useAuth } from "../Services/AuthContext";



function OrdersSummaryPage(){

  const { account, accessToken ,user, logout} = useAuth();
    const navigate = useNavigate();

    function handleLogout(){
      const result: Boolean = logout(); 
 if(result){
  navigate("/login")
 }else{
  console.log("Error in handle logout");
 }

    }
    return (
        <div className="p-6">
          <h2>Orders Summary</h2>
          <h2>Welcome, {account?.name}</h2>
          <p>Your token: {accessToken?.slice(0, 20)}...</p>
          <p>User is {user?.BadgeNo}</p>
          <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      );
    }

    
export default OrdersSummaryPage;