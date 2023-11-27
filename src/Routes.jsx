import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ChatMessages = React.lazy(() => import("pages/ChatMessages"));
const ChatUI = React.lazy(() => import("pages/ChatUI"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<ChatUI />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/chatmessages" element={<ChatMessages />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
