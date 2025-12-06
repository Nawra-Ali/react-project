import NavBar from "../components/NavBar";
import OperatorOrderTile from "../components/OperatorOrderTile";
import SearchBar from "../components/SearchBar";

import style from "../styles/login.module.css";
function OrdersSummaryPage(){

  


    return (
  <div className="OrderSummary">
<NavBar/>

<SearchBar/>
  <p className={style.OrderSummary}>Orders Summary</p>
      {/* Render 5 tiles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <OperatorOrderTile key={i} />
      ))}
  </div>  

      );
    }

    
export default OrdersSummaryPage;
/*
<div className="p-6">
          <h2>Orders Summary</h2>
          <h2>Welcome, {account?.name}</h2>
          <p>Your token: {accessToken?.slice(0, 20)}...</p>
          <p>User is {user?.BadgeNo}</p>
          <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>*/ 