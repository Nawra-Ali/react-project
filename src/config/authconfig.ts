    // src/authConfig.ts
    import type { Configuration, PopupRequest } from "@azure/msal-browser";

    export const msalConfig: Configuration = {
        auth: {
            clientId: "1734483d-a10c-4742-96b0-b42a2cd587dd", // Replace with your Application (Client) ID
        
            authority: "https://login.microsoftonline.com/dd50b9c2-43de-40a8-829e-0b535ca936ce", // Replace with your Tenant ID
            redirectUri: "http://localhost:3000", // Your redirect URI
        },
        cache: {
            cacheLocation: "sessionStorage", // or "localStorage"
            storeAuthStateInCookie: false,
        },
    };

    export const loginRequest: PopupRequest = {
        scopes: ["User.Read", "Email", "openid", "profile", "offline_access"], // Example scope
    };