import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";



function OrdersSummaryPage(){

    const { accounts, instance } = useMsal();
    const navigate = useNavigate();

    const handleLogout = () => {
      instance.logoutPopup().then(()=> navigate('/login')).catch(console.error);
    };
    return (
        <div className="p-6">
          <h2>Orders Summary</h2>
          <p>Welcome, {accounts[0]?.name}</p>
          <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      );
    }

    
export default OrdersSummaryPage;