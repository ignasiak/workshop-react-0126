import { createContext, useState, useEffect } from "react";

export const ClientsContext = createContext(null);

export function ClientsProvider({ children }) {
  const [clients, setClients] = useState([
    {
      name: "Adam",
      email: "test@test.pl",
      phone: "12341234",
      company: "Test firma",
      id: 1,
    },
    {
      name: "Kasia",
      email: "test@test.pl",
      phone: "12341234",
      company: "Test firma",
      id: 2,
    },
    {
      name: "Mateusz",
      email: "test@test.pl",
      phone: "12341234",
      company: "Test firma",
      id: 3,
    },
  ]);

  const addClient = (clientData) => {
    const newClient = {
      id: Date.now().toString(),
      ...clientData,
    };

    setClients([...clients, newClient]);
  };

  const updateClient = (id, updatedData) => {
    const updatedClients = clients.map((client) => {
      if (client.id === id) {
        return { ...client, ...updatedData };
      }
      return client;
    });

    setClients(updatedClients);
  };

  const deleteClient = (id) => {
    const filteredClients = clients.filter((client) => client.id !== id);
    setClients(filteredClients);
  };

  const getClientsById = (id) => {
    return clients.find((client) => client.id === id);
  };

  const value = {
    clients,
    addClient,
    updateClient,
    deleteClient,
    getClientsById,
  };

  return (
    <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
  );
}
