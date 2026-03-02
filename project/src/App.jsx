import DashboardPage from "./pages/DashboardPage";
import ClientDetailsPage from "./pages/ClientDetailsPage";
import AddClientPage from "./pages/AddClientPage";
import EditClientPage from "./pages/EditClientPage";
import ClientListPage from "./pages/ClientsListPage";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/clients" element={<ClientListPage />} />
        <Route path="/clients/:id" element={<ClientDetailsPage />} />
        <Route path="/add" element={<AddClientPage />} />
        <Route path="/edit/:id" element={<EditClientPage />} />
      </Routes>
    </div>
  );
}

export default App;
