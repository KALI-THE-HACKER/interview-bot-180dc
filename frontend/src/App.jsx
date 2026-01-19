import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Welcome from "./pages/Welcome";
import ResumeBuilder from "./pages/ResumeBuilder";
import InterviewSystem from "./pages/InterviewSystem";
import InterviewQuestions from "./pages/InterviewQuestions";
import AuthWrapper from "./components/AuthWrapper";

function App() {
  const onRedirectCallback = (appState) => {
    window.history.replaceState(
      {},
      document.title,
      appState?.returnTo || window.location.pathname
    );
  };

  return (
    // <Auth0Provider
    //   domain={import.meta.env.VITE_AUTH0_DOMAIN}
    //   clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    //   authorizationParams={{
    //     redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    //     audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    //     scope: "openid profile email",
    //     connection: "google-oauth2",
    //     prompt: "select_account"
    //   }}
    //   onRedirectCallback={onRedirectCallback}
    //   cacheLocation="localstorage"
    //   useRefreshTokens={true}
    // >
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/interview-system" element={<InterviewSystem />} />
            <Route path="/interview-questions" element={<InterviewQuestions />} />
            <Route path="/interview-questions" element={<InterviewQuestions />} />
          </Routes>
        </div>
      </Router>
    // </Auth0Provider>
  );
}

export default App;