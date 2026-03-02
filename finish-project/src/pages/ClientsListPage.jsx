import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ClientsContext } from '../context/ClientsContext.jsx'

function ClientsListPage() {
  const { clients, deleteClient } = useContext(ClientsContext)

  if (clients.length === 0) {
    return (
      <section className="clients-section">
        <div className="clients-header">
          <h1>Klienci</h1>
          <Link className="add-client-link" to="/add">
            Dodaj klienta
          </Link>
        </div>
        <p>Brak klientow do wyswietlenia.</p>
      </section>
    )
  }

  return (
    <section className="clients-section">
      <div className="clients-header">
        <h1>Klienci</h1>
        <Link className="add-client-link" to="/add">
          Dodaj klienta
        </Link>
      </div>

      <ul className="clients-list">
        <li className="clients-row clients-row-header">
          <span>Imie i nazwisko</span>
          <span>E-mail</span>
          <span>Telefon</span>
          <span>Firma</span>
          <span>Akcje</span>
        </li>

        {clients.map((client) => (
          <li className="clients-row" key={client.id}>
            <span>{client.name}</span>
            <span>{client.email}</span>
            <span>{client.phone}</span>
            <span>{client.company}</span>
            <span className="clients-actions">
              <Link className="action-link" to={`/clients/${client.id}`}>
                Szczegoly
              </Link>
              <button type="button" className="action-delete" onClick={() => deleteClient(client.id)}>
                Usun
              </button>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ClientsListPage
