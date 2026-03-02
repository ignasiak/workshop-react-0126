import { useState } from "react";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

function ClientForm({ initialValues = defaultValues, onSubmit, submitLabel }) {
  const [formData, setFormData] = useState({
    name: initialValues.name ?? "",
    email: initialValues.email ?? "",
    phone: initialValues.phone ?? "",
    company: initialValues.company ?? "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="client-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Imię i nazwisko</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefon</label>
        <input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Firma</label>
        <input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <button className="form-submit" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}

export default ClientForm;
