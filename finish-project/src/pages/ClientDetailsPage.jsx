import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ClientsContext } from '../context/ClientsContext.jsx'

function ClientDetailsPage() {
  const { id } = useParams()
  const { getClientById } = useContext(ClientsContext)
  const client = getClientById(id)

  if (!client) {
    return (
      <section className="client-details-page">
        <h1>Szczegoly klienta</h1>
        <p>Nie znaleziono klienta.</p>
      </section>
    )
  }

  return (
    <section className="client-details-page">
      <h1>Szczegoly klienta</h1>

      <div className="client-details-card">
        <div className="client-details-row">
          <span className="client-details-label">Imie i nazwisko</span>
          <span className="client-details-value">{client.name}</span>
        </div>
        <div className="client-details-row">
          <span className="client-details-label">E-mail</span>
          <span className="client-details-value">{client.email}</span>
        </div>
        <div className="client-details-row">
          <span className="client-details-label">Telefon</span>
          <span className="client-details-value">{client.phone}</span>
        </div>
        <div className="client-details-row">
          <span className="client-details-label">Firma</span>
          <span className="client-details-value">{client.company}</span>
        </div>
      </div>

      <Link className="client-details-edit" to={`/edit/${client.id}`}>
        Edytuj
      </Link>
    </section>
  )
}

export default ClientDetailsPage
