import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ClientsListPage from './pages/ClientsListPage.jsx'
import ClientDetailsPage from './pages/ClientDetailsPage.jsx'
import AddClientPage from './pages/AddClientPage.jsx'
import EditClientPage from './pages/EditClientPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/clients" element={<ClientsListPage />} />
        <Route path="/clients/:id" element={<ClientDetailsPage />} />
        <Route path="/add" element={<AddClientPage />} />
        <Route path="/edit/:id" element={<EditClientPage />} />
      </Route>
    </Routes>
  )
}

export default App
