import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ClientForm from "../components/ClientForm";
import { ClientsContext } from "../context/ClientsContext";

function AddClientPage() {
  const navigate = useNavigate();
  const { addClient } = useContext(ClientsContext);

  const handleSubmit = (formData) => {
    addClient(formData);
    navigate("/clients");
  };

  return (
    <section className="dashboard-page">
      <h1>Dodawanie klientów</h1>

      <ClientForm onSubmit={handleSubmit} />
    </section>
  );
}

export default AddClientPage;
