import React, { useEffect, useRef, useState } from 'react';

function SolarProductsAdmin() {
  const [solarData, setSolarData] = useState([]);
  const [applications, setApplications] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    powerOutput: '',
    lifespan: '',
    bestFor: '',
    image: ''
  });

  useEffect(() => {
    fetchSolarData();
    fetchApplications();
  }, []);

  const fetchSolarData = () => {
    fetch('http://localhost:3000/solarData')
      .then(res => res.json())
      .then(data => setSolarData(data))
      .catch(error => console.error("Fetch error:", error));
  };

  const fetchApplications = () => {
    fetch('http://localhost:3000/applications')
      .then(res => res.json())
      .then(data => setApplications(data))
      .catch(error => console.error("Applications fetch error:", error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/solarData/${id}`, { method: 'DELETE' })
      .then(() => setSolarData(solarData.filter(product => product.id !== id)))
      .catch(error => console.error("Delete error:", error));
  };

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setFormData({
      name: product.name,
      description: product.description,
      powerOutput: product.powerOutput,
      lifespan: product.lifespan,
      bestFor: product.bestFor.join(', '),
      image: product.image
    });
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      bestFor: formData.bestFor.split(',').map(tag => tag.trim())
    };

    const method = editingProduct ? 'PUT' : 'POST';
    const url = editingProduct
      ? `http://localhost:3000/solarData/${editingProduct}`
      : `http://localhost:3000/solarData`;

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(() => {
        fetchSolarData();
        setEditingProduct(null);
        setFormData({ name: '', description: '', powerOutput: '', lifespan: '', bestFor: '', image: '' });
        setShowAddForm(false);
      })
      .catch(error => console.error("Submit error:", error));
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setShowAddForm(false);
    setFormData({ name: '', description: '', powerOutput: '', lifespan: '', bestFor: '', image: '' });
  };

  return (
    <div className="container mt-4">
      {/* Applications section */}
      <div className="mb-5">
        <h3>Product Applications</h3>

        {/* List existing applications */}
        {applications.length === 0 && <p>No applications yet.</p>}
        {applications.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Applicant Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Residence</th>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => {
                const product = solarData.find(p => p.id === app.productId);
                return (
                  <tr key={app.id}>
                   <td>{app.applicantName || app.userName}</td>
                   <td>{app.email || app.userEmail}</td>

                    <td>{app.phone || 'N/A'}</td>
                    <td>{app.residence || 'N/A'}</td>
                    <td>{product ? product.name : 'Unknown Product'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Product button */}
      <button className="btn btn-primary mb-3" onClick={() => setShowAddForm(true)}>Add Product</button>

      {(editingProduct || showAddForm) && (
        <div className="card mb-4" ref={formRef}>
          <div className="card-body">
            <h5 className="card-title">{editingProduct ? 'Edit Product' : 'Add New Product'}</h5>
            <form onSubmit={handleSubmit}>
              {['name', 'powerOutput', 'lifespan', 'image'].map((field, idx) => (
                <div className="mb-3" key={idx}>
                  <label className="form-label">{field.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type="text"
                    className="form-control"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              ))}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Best For (comma separated)</label>
                <input
                  type="text"
                  className="form-control"
                  name="bestFor"
                  value={formData.bestFor}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success me-2">Save</button>
              <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Solar Products Cards */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {solarData.map(product => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image.replace('public/', '/')}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Power Output:</strong> {product.powerOutput}</p>
                <p className="card-text"><strong>Lifespan:</strong> {product.lifespan}</p>
                <div className="mt-auto">
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(product)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
              </div>
              <div className="card-footer bg-white border-0">
                {product.bestFor.map((tag, idx) => (
                  <span key={idx} className="badge bg-secondary me-1">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolarProductsAdmin;
