import { useContext } from 'react'
import { ClientsContext } from '../context/ClientsContext.jsx'

function DashboardPage() {
  const { clients } = useContext(ClientsContext)
  const mostRecentClient = clients[clients.length - 1]

  return (
    <section className="dashboard-page">
      <h1>Panel</h1>

      <div className="dashboard-grid">
        <div className="dashboard-card dashboard-card-primary">
          <p className="dashboard-card-label">Liczba klientow</p>
          <p className="dashboard-card-value">{clients.length}</p>
        </div>

        <div className="dashboard-card">
          <h2>Ostatnio dodany klient</h2>

          {mostRecentClient ? (
            <div className="dashboard-client-info">
              <p>
                <span>Imie i nazwisko:</span> {mostRecentClient.name}
              </p>
              <p>
                <span>E-mail:</span> {mostRecentClient.email}
              </p>
            </div>
          ) : (
            <p>Brak klientow.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
