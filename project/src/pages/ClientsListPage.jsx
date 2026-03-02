import { Link } from "react-router-dom";
import { useContext } from "react";
import { ClientsContext } from "../context/ClientsContext";

function ClientsListPage() {
  const { clients, deleteClient } = useContext(ClientsContext);

  return (
    <section className="clients-section">
      <h1>Lista klientów</h1>

      <Link className="add-client-link" to="/add">
        Dodaj klienta
      </Link>

      <div className="clients-list">
        <div className="clients-row clients-row-header">
          <span>Imię i nazwisko</span>
          <span>E-email</span>
          <span>Telefon</span>
          <span>Firma</span>
          <span>Akcje</span>
        </div>

        {clients.map((client) => (
          <div className="clients-row" key={client.id}>
            <span>{client.name}</span>
            <span>{client.email}</span>
            <span>{client.phone}</span>
            <span>{client.company}</span>
            <span className="clients-actions">
              <Link className="action-link" to={`/clients/${client.id}`}>
                Szczegóły
              </Link>
              <button
                type="button"
                className="action-delete"
                onClick={() => deleteClient(client.id)}
              >
                Usuń
              </button>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientsListPage;
