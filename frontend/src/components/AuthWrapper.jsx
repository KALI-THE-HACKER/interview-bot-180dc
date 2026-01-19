import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const AuthWrapper = ({ children }) => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    error,
  } = useAuth0();
  const [configValid, setConfigValid] = useState(true);

  useEffect(() => {
    const isValid =
      !!import.meta.env.VITE_AUTH0_DOMAIN &&
      !!import.meta.env.VITE_AUTH0_CLIENT_ID &&
      !!import.meta.env.VITE_AUTH0_CALLBACK_URL &&
      !!import.meta.env.VITE_AUTH0_AUDIENCE;
    setConfigValid(isValid);

    if (!isValid) {
      console.error("Auth0 Configuration Error:", {
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        callbackUrl: import.meta.env.VITE_AUTH0_CALLBACK_URL,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE
      });
    }
  }, []);

  if (error) {
    console.error("Auth Error:", error);
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md">
          <p className="text-xl text-red-600">Authentication Error</p>
          <p className="mt-2">{error.message}</p>
          {!configValid && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-yellow-800 font-medium">Configuration Issue Detected</p>
              <p className="text-sm text-yellow-700 mt-1">
                One or more required Auth0 environment variables are missing or incorrect.
                Check the browser console for details.
              </p>
            </div>
          )}
          <button
            onClick={() => loginWithRedirect({
              authorizationParams: {
                redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                connection: "google-oauth2"
              },
            })}
            className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome</h1>
          <p className="mb-6">Please sign in to continue</p>
          <button
            onClick={() => loginWithRedirect({
              authorizationParams: {
                redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                connection: "google-oauth2"
              },
            })}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:opacity-90"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default AuthWrapper;