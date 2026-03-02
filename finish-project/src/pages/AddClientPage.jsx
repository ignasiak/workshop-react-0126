import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ClientForm from '../components/ClientForm.jsx'
import { ClientsContext } from '../context/ClientsContext.jsx'

function AddClientPage() {
  const navigate = useNavigate()
  const { addClient } = useContext(ClientsContext)

  const handleSubmit = (formData) => {
    addClient(formData)
    navigate('/clients')
  }

  return (
    <section>
      <h1>Dodaj klienta</h1>
      <ClientForm submitLabel="Dodaj klienta" onSubmit={handleSubmit} />
    </section>
  )
}

export default AddClientPage
