import React, { useEffect, useState } from 'react';

function SolarProductsUser() {
  const [solarData, setSolarData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    residence: ''
  });

  useEffect(() => {
    fetch('http://localhost:3000/solarData')
      .then(res => res.json())
      .then(data => setSolarData(data))
      .catch(error => console.error("Fetch error:", error));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setFormData({ fullName: '', email: '', phone: '', residence: '' });
    const modal = new bootstrap.Modal(document.getElementById('applyModal'));
    modal.show();
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.residence) {
      alert("Please fill in all fields.");
      return;
    }

    const application = {
      userName: formData.fullName,
      userEmail: formData.email,
      phone: formData.phone,
      residence: formData.residence,
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      appliedAt: new Date().toISOString()
    };

    fetch('http://localhost:3000/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(application)
    })
      .then(res => {
        if (res.ok) {
          alert(`Application submitted for ${selectedProduct.name}`);
          const modal = bootstrap.Modal.getInstance(document.getElementById('applyModal'));
          modal.hide();
        } else {
          alert("Failed to submit application.");
        }
      })
      .catch(error => console.error("Application error:", error));
  };

  return (
    <div className="container mt-4">
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
                <p className="card-text"><strong>Price:</strong> {product.Price}</p>
                <div className="mt-auto">
                  <button className="btn btn-success" onClick={() => openModal(product)}>
                    Apply
                  </button>
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

      {/* Modal */}
      <div
        className="modal fade"
        id="applyModal"
        tabIndex="-1"
        aria-labelledby="applyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="applyModalLabel">
                  Apply for: {selectedProduct?.name}
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {selectedProduct && (
                  <div className="mb-3">
                    <p><strong>Description:</strong> {selectedProduct.description}</p>
                    <p><strong>Power Output:</strong> {selectedProduct.powerOutput}</p>
                    <p><strong>Lifespan:</strong> {selectedProduct.lifespan}</p>
                    <p><strong>Price:</strong> {selectedProduct.Price}</p>
                  </div>
                )}
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="residence"
                      placeholder="Area of Residence"
                      value={formData.residence}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Submit Application</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarProductsUser;
