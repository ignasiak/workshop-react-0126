import { createContext, useEffect, useState } from 'react'

const CLIENTS_STORAGE_KEY = 'minicrm_clients'

export const ClientsContext = createContext(null)

export function ClientsProvider({ children }) {
  const [clients, setClients] = useState(() => {
    const savedClients = localStorage.getItem(CLIENTS_STORAGE_KEY)
    if (!savedClients) {
      return []
    }

    try {
      return JSON.parse(savedClients)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(CLIENTS_STORAGE_KEY, JSON.stringify(clients))
  }, [clients])

  const addClient = (clientData) => {
    const newClient = {
      id: Date.now().toString(),
      ...clientData,
    }

    setClients([...clients, newClient])
  }

  const updateClient = (id, updatedData) => {
    const updatedClients = clients.map((client) => {
      if (client.id === id) {
        return { ...client, ...updatedData }
      }
      return client
    })
    setClients(updatedClients)
  }

  const deleteClient = (id) => {
    const filteredClients = clients.filter((client) => client.id !== id)
    setClients(filteredClients)
  }

  const getClientById = (id) => {
    return clients.find((client) => client.id === id)
  }

  const value = {
    clients,
    addClient,
    updateClient,
    deleteClient,
    getClientById,
  }

  return <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
}
