import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/authconfig';
import Logo from '../assets/BE Primary Logo White.png';

import { useNavigate } from 'react-router-dom';
import { CiDeliveryTruck } from "react-icons/ci";
/* import { BsTruck } from "react-icons/bs"; */
import style from "../styles/login.module.css";
function LoginPage()  {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).then(() => navigate('/')).catch((error)=> console.log(error));
  };

  return (
    <div className={style.LoginContainerPage}>
    <div className="flex flex-col items-center justify-center">
    <CiDeliveryTruck className='icon-size' color="white"/>

{/* <BsTruck size={200} color="white"/>
 */}    <div className='mt-30'>
      <button onClick={handleLogin} className="flex items-center gap-2">
<svg
stroke="currentColor"
fill="currentColor"
strokeWidth="0"
viewBox="0 0 16 16"
height="1em"
width="1em"
xmlns="http://www.w3.org/2000/svg"
>
<path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z"></path>
</svg>
Login with Single Sign On
</button>
    </div>
    </div>

 
  </div>
  );
};

export default LoginPage;


