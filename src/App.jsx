import Sidebar from "./components/Sidebar";
import InfoPage from "./pages/InfoPage";
import PlanPage from "./pages/PlanPage";
import AddOnsPage from "./pages/AddOnsPage";
import SummaryPage from "./pages/SummaryPage";
import { Route, Routes } from "react-router";
import CurrentPageProvider from "./providers/CurrentPageProvider";

export default function App() {
  return (
    <CurrentPageProvider>
      <div
        id="app"
        className="bg-[#eef5ff] font-main min-h-[100vh] elements-center"
      >
        <div className="bg-[#ffffff] w-full max-w-[1000px] md:flex p-[15px] min-h-[75%] rounded-[10px]">
          <Sidebar />
          <Routes>
            <Route path="/" element={<InfoPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/addons" element={<AddOnsPage />} />
            <Route path="/summary" element={<SummaryPage />} />
          </Routes>
        </div>
      </div>
    </CurrentPageProvider>
  );
}
