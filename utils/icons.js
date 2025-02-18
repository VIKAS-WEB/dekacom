const categoryIcons = {
    'Puériculture': 'furniture.png',
    'bowling': 'furniture.png',
    'Cinéma': 'furniture.png',
    'Discothèque': 'furniture.png',
    'Karting': 'furniture.png',

    'patinoire': 'furniture.png',
    'Location Vidéo': 'furniture.png',
    'Sorties et Loisirs': 'furniture.png',
    'Restauration Rapide': 'furniture.png',
    'Pizzeria': 'furniture.png',

    'Restauration à thème': 'furniture.png',
    'Restauration Traditionnelle': 'furniture.png',
    'Prêt à porter': 'furniture.png',
    'Accessoires': 'furniture.png',
    'Soin-Beauté': 'furniture.png',

    'Opticien': 'furniture.png',
    'Parfumerie': 'furniture.png',
    'Coiffure': 'furniture.png',
    'Centre de remise en forme': 'furniture.png',
    'Services à la personne': 'furniture.png',

    'Agence de voyages': 'furniture.png',
    'Contrôle Technique': 'furniture.png',
    'Lavage Automobile': 'furniture.png',
    'Garage Automobile': 'furniture.png',
    'Artisanat': 'furniture.png',

    
    'Agence de "Hypermarché - Supermarché': 'furniture.png',
    'Meubles': 'furniture.png',
    'Cuisine': 'furniture.png',
    'Habitat': 'furniture.png',
    'Animalerie': 'furniture.png',

    'Banque': 'furniture.png',
    'Assurance': 'furniture.png',
    'Bricolage': 'furniture.png',
    'Jardinerie': 'furniture.png',
    'Broderie': 'furniture.png',

    
    'Services': 'furniture.png',
    'Santé': 'furniture.png',
    'Automobile': 'furniture.png',

  };

  Object.keys(categoryIcons).forEach((key) => {
    categoryIcons[key] = `/assets/img/icon/${categoryIcons[key]}`;
  });