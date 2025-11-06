import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/authconfig';
import Logo from '../assets/BE Primary Logo White.png';
import "../App.css"
import { useNavigate } from 'react-router-dom';

function LoginPage()  {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).then(() => navigate('/')).catch((error)=> console.log(error));
  };

  return (
    <div className="flex flex-col items-center justify-center">
    <div
      className="absolute top-0 left-0 w-full h-1/2 bg-blue-800 flex items-center justify-center p-8 text-white"
      style={{
        backgroundColor: "#000a51",
        opacity: "1",
        backgroundImage:
        "repeating-radial-gradient( circle at 0 0, transparent 0, #000a51 200px ), repeating-linear-gradient( #0259a855, #0259a8 )",            }}
    >
                  <h1>Welcome to OMLA App</h1>

      <div>
        <img
          src={Logo}
          alt={"Bapco Energies Logo"}
          width={100}
          height={100}
          className='absolute top-5 right-5'
        />
      </div>
    </div>
    <div className='mt-30'>
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

  );
};

export default LoginPage;


