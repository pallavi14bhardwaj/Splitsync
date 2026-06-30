import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import GroupDetails from "./Pages/GroupDetails";
import History from "./Pages/History";
import Summary from "./Pages/Summary";
import Profile from "./Pages/Profile";
import SingleGroup from "./Pages/SingleGroup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/group" element={<GroupDetails />} />
        <Route path="/history" element={<History />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/group" element={<GroupDetails />} />
        <Route path="/group/:id" element={<SingleGroup />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;