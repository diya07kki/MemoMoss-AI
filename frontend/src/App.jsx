import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import PatientDash from "./pages/PatientDash";
import CaregiverDash from "./pages/CaregiverDash";
import BrainGym from "./pages/BrainGym";
//import MemoryTimeline from "./pages/MemoryTimeline";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/patient" element={<PatientDash />} />
      <Route path="/brain-gym" element={<BrainGym />} />
      <Route path="/caregiver" element={<CaregiverDash />} />
    </Routes>
  );
}

export default App;