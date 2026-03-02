import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClientForm from "../components/ClientForm.jsx";
import { ClientsContext } from "../context/ClientsContext.jsx";

function EditClientPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getClientById, updateClient } = useContext(ClientsContext);

  const client = getClientById(id);

  if (!client) {
    return (
      <section>
        <h1>Edytuj klienta</h1>
        <p>Nie znaleziono klienta.</p>
        <Link to="/clients">Wróć do klientów</Link>
      </section>
    );
  }

  const handleSubmit = (formData) => {
    updateClient(id, formData);
    navigate("/clients");
  };

  return (
    <section>
      <h1>Edytuj klienta</h1>
      <ClientForm
        initialValues={client}
        submitLabel="Zapisz zmiany"
        onSubmit={handleSubmit}
      />
    </section>
  );
}

export default EditClientPage;
