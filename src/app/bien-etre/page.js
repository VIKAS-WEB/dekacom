import Head from 'next/head';

export default function BienEtre() {
  // Dummy data for poke bowl listings (replace with real data or API call if needed)
  const pokeBowls = [
    { id: 1, name: 'Mister Poke', rating: 4.5, price: 3.5, distance: '3.8km', image: '/images/test.png', location: 'Villeneuve-d’Ascq', discount: null },
    { id: 2, name: 'Mister Poke', rating: 4.5, price: 3.5, distance: '3.8km', image: '/images/test.png', location: 'Villeneuve-d’Ascq', discount: '-20%' },
    { id: 3, name: 'Mister Poke', rating: 4.5, price: 3.5, distance: '3.8km', image: '/images/test.png', location: 'Villeneuve-d’Ascq', discount: null },
    { id: 4, name: 'Mister Poke', rating: 4.5, price: 3.5, distance: '3.8km', image: '/images/test.png', location: 'Villeneuve-d’Ascq', discount: null },
  ];

  // Define styles as JavaScript objects
  const containerStyle = {
    minHeight: '100vh',
    padding: '0 2rem',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const mainStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 0',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#000',
    fontWeight: 'bold',
  };

  const navStyle = {
    display: 'flex',
    gap: '1rem',
  };

  const navButtonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#e0f7fa',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const promotionStyle = {
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    borderRadius: '5px',
    marginBottom: '2rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
  };

  const cardStyle = {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const cardContentStyle = {
    padding: '1rem',
    textAlign: 'center',
  };

  const cardTitleStyle = {
    fontSize: '1.1rem',
    margin: '0.5rem 0',
  };

  const ratingStyle = {
    color: '#ffd700',
    fontSize: '0.9rem',
  };

  const priceStyle = {
    fontSize: '1.2rem',
    color: '#000',
    margin: '0.5rem 0',
  };

  const discountStyle = {
    color: 'red',
    fontSize: '0.9rem',
    margin: '0.5rem 0',
  };

  const locationStyle = {
    fontSize: '0.8rem',
    color: '#666',
  };

  const offerButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  };

  const footerStyle = {
    textAlign: 'center',
    padding: '1rem 0',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <Head>
        <title>Bien-Être</title>
        <meta name="description" content="Discover healthy poke bowls and well-being offers!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={mainStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>BIEN-ÊTRE</h1>
          <nav style={navStyle}>
            <button style={navButtonStyle}>Par défaut</button>
            <button style={navButtonStyle}>Par ville</button>
            <button style={navButtonStyle}>Les mieux notés</button>
            <button style={navButtonStyle}>Les plus téléchargés</button>
          </nav>
        </header>

        <section style={promotionStyle}>
          <p>BIEN-ÊTRE À PRIX DOUX, GRÂCE À SMART REDUC !</p>
          <p>Smart Reduc propose des offres promotionnelles exclusives pour des produits et services de bien-être, permettant à ses utilisateurs de profiter de réductions sur une large gamme de soins, traitements et abonnements.</p>
        </section>

        <div style={gridStyle}>
          {pokeBowls.map((bowl) => (
            <div key={bowl.id} style={cardStyle}>
              <img src={bowl.image} alt={`${bowl.name} poke bowl`} style={imageStyle} />
              <div style={cardContentStyle}>
                <h2 style={cardTitleStyle}>{bowl.name}</h2>
                <div style={ratingStyle}>★★★★★ {bowl.rating}</div>
                <p style={priceStyle}>{bowl.price}€</p>
                {bowl.discount && <p style={discountStyle}>{bowl.discount}</p>}
                <p style={locationStyle}>{bowl.location} • vous êtes à {bowl.distance}</p>
                <button style={offerButtonStyle}>VOIR L'OFFRE</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={footerStyle}>
        <p>© 2025 Bien-Être</p>
      </footer>
    </div>
  );
}