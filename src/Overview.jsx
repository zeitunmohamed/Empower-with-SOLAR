function Overview() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h2 style={{ textAlign: 'center', color: 'orange' }}>WELCOME</h2>
      <h2 style={{ textAlign: 'center', color: 'orange' }}>Northern Kenya Solar Initiative (NKSI)</h2>
      <h4 style={{ textAlign: 'center' }}>
        Powering Resilience, Security, and Growth Through Renewable Energy
      </h4>

      {/* Project Overview Section */}
      <div className="container mt-4 mb-4">
        <h3 className="mb-4">Project Overview</h3>
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 pe-lg-4">
            <p className="mb-4">
              The Northern Kenya Solar Initiative (NKSI) is a transformative renewable energy
              project designed to provide reliable solar power to underserved regions of Northern
              Kenya. By deploying solar energy solutions, we aim to:
            </p>

            <div className="benefits-list">
              <p className="mb-3">
                ✔ Reduce insecurity by powering streetlights and security installations in high-risk
                areas.
              </p>
              <p className="mb-3">
                ✔ Ensure uninterrupted electricity for hospitals, schools, and public institutions
                during blackouts.
              </p>
              <p className="mb-3">
                ✔ Boost agricultural productivity through solar-powered irrigation and cold storage
                for farmers.
              </p>
              <p className="mb-4">
                ✔ Partner with NGOs and government agencies to expand energy access in remote
                communities.
              </p>
            </div>

            <p>
              This project will enhance livelihoods, improve public services, and drive economic
              growth—all while reducing reliance on fossil fuels.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6 ps-lg-4 d-flex align-items-center">
            <img
              src="/image.png/image copy 2.png"
              alt="Solar energy project in Northern Kenya"
              className="img-fluid rounded shadow"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Logo Image */}
      <div className="text-center my-4">
        <img
          src="/image.png/image copy 7.png"
          alt="logo"
          style={{ width: '100%', maxWidth: '1300px', height: '900px' }}
        />
      </div>

      {/* Partners Logo Section */}
      <section className="py-5 bg-white">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-medium text-gray-900">Trusted by world class creators</h2>
          </div>

          <div className="grid items-center grid-cols-2 gap-10 mt-10 md:grid-cols-4 sm:gap-y-16">
            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="public/image.png/image copy 14.png"
                alt="Partner 1"
              />
            </div>
            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="public/image.png/image copy 13.png"
                alt="Partner 2"
              />
            </div>
            <div>
              <img
                className="object-contain w-auto mx-auto h-10"
                src="public/image.png/image copy 15.png"
                alt="Partner 3"
              />
            </div>
            <div>
              <img
                className="object-contain w-auto mx-auto h-14"
                src="public/image.png/image copy 16.png"
                alt="Partner 4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section: Key Benefits & Partnerships */}
      <div className="container mt-5">
        <div className="row">
          {/* Key Benefits */}
          <div className="col-md-6 mb-4">
            <div className="testimonials">
              <h3>Key Benefits</h3>
              <h5>1. Enhanced Security & Safety</h5>
              <p>
                Solar-powered streetlights and security outposts to deter crime and improve
                nighttime safety.
              </p>
              <p>Reliable energy for communication systems in remote areas.</p>

              <h5>2. Critical Backup Power for Public Services</h5>
              <p>
                Hospitals: Uninterrupted power for lifesaving medical equipment and refrigeration
                for vaccines.
              </p>
              <p>
                Schools: Consistent electricity for lighting, computers, and e-learning tools.
              </p>
              <p>
                Government Offices: Reliable energy for administrative operations and emergency
                response.
              </p>

              <h5>3. Agricultural & Economic Growth</h5>
              <p>
                Solar-powered water pumps for irrigation, helping farmers combat drought.
              </p>
              <p>
                Cold storage facilities to reduce post-harvest losses and increase incomes.
              </p>
              <p>Training programs on solar technology for local entrepreneurs.</p>

              <h5>4. Sustainable & Scalable Energy</h5>
              <p>Reduces diesel dependency, cutting costs and pollution.</p>
              <p>
                Modular solar systems allow for expansion into new villages and towns.
              </p>
            </div>
          </div>

          {/* Partnership Opportunities */}
          <div className="col-md-6 mb-4">
            <div className="testimonials">
              <h3>Partnership Opportunities</h3>
              <p>We collaborate with:</p>
              <p>✅ <strong>Government Agencies</strong> – County and national energy programs.</p>
              <p>✅ <strong>NGOs & Development Partners</strong> – Organizations focused on energy access, health, and education.</p>
              <p>✅ <strong>Private Sector Investors</strong> – Businesses looking to support sustainable development.</p>
              <p>✅ <strong>Local Communities</strong> – Empowering residents through training and job creation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
