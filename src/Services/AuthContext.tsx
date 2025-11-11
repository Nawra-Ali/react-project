import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useMsal, useAccount, useMsalAuthentication } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import type { AccountInfo } from '@azure/msal-browser';
import { loginRequest } from '../config/authconfig';
import type { IUser } from '../Interfaces/IUser';
import ENDPOINTS from '../config/api_endpoints';

interface AuthContextType {
  account: AccountInfo | null;
  accessToken: string | null;
  user: IUser | null;
  logout: () => Boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);


  useMsalAuthentication(InteractionType.Silent, loginRequest);

  useEffect(() => {
    const fetchTokenAndUser = async () => {
      if (account) {
        try {
          const tokenResponse = await instance.acquireTokenSilent({
            ...loginRequest,
            account,
          });
          setAccessToken(tokenResponse.accessToken);
          console.log("Access token has been set");
          // Fetch user from backend
          const userResponse = await fetch(ENDPOINTS.GET_USER, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${tokenResponse.accessToken}`,
              'Content-Type': 'application/json',
            },
          });
console.log("User Response after fecth: ",userResponse);
          if (!userResponse.ok) {
            throw new Error(`User fetch failed: ${userResponse.statusText}`);
          }

          const userData: IUser = await userResponse.json();
          setUser(userData);
        } catch (error) {
          console.log('Error during token or user fetch:', error);
        }
      }
    };

    fetchTokenAndUser();
  }, [account, instance]);

  const logout = (): Boolean => {
    //instance.logoutPopup().catch((error) => console.error("Logout failed:", error));
    try {
      instance.logoutPopup();
      setUser(null);
      setAccessToken(null);
      console.log("Successfully signed out");
      return true;
    } catch (error) {
      console.error("Logout failed:", error);
      console.log("Error Signing out");
      return false;
    }

  };

  return (
    <AuthContext.Provider value={{ account, accessToken, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
