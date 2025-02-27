// src/app/devenir-annonceur/page.js
export default function DevenirAnnonceur() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="w-full max-w-4xl text-left py-8">
        {/* Breadcrumb navigation updated to English */}
        {/* <div className="text-gray-500 text-sm mb-4">
          Home / Become an Advertiser
        </div> */}

        {/* Main heading */}
        <h1 className="text-4xl font-bold mb-4">DEVENIR ANNONCEUR</h1>

        {/* Subtitle with divider below */}
        <h2 className="text-2xl font-semibold mb-4">
          Devenez annonceur sur Smart Reduc et dynamisez vos ventes !
        </h2>
        <div className="border-b border-gray-300 w-full max-w-md mb-6"></div> {/* Divider with margin-bottom for spacing */}

        {/* Descriptive paragraph */}
        <p className="mt-6 text-gray-600">
          Smart Reduc est la solution digitale idéale pour toucher une audience locale ciblée et augmenter votre chiffre
          d'affaires. Nos outils simples et puissants vous aident à booster votre visibilité, fidéliser clients et obtenir
          des résultats concrets.
        </p>
      </header>

      <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 my-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi devenir annonceur sur Smart Reduc ?</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Nos annonceurs constatent en moyenne :</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>25% de trafic en boutique grâce à nos offres promotionnelles ciblées</li>
              <li>15% de rétention client via des campagnes régulées</li>
              <li>Jusqu’à 20% de taux de conversion après envoi de notifications push</li>
            </ul>
          </div>
          <div className="ml-8">
            <img src="/images/look.png" alt="Businessman with arrow" className="w-48 h-48" />
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 my-8">
        <h2 className="text-2xl font-bold mb-4">Nos fonctionnalités clés :</h2>
        <ul className="list-none space-y-4">
          <li className="flex items-start">
            <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center mr-4">✓</span>
            <span>Notifications push : Envoyez des alertes personnalisées à vos clients, qui sont constatées un impact immédiat sur vos ventes.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center mr-4">✓</span>
            <span>Offres flash & push : Créez des promotions attractives qui motivent vos clients à l’achat, un impact même en période creuse.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center mr-4">✓</span>
            <span>Réservation en ligne : Simplifiez la vie de vos clients et optimisez votre organisation en proposant la réservation directe via notre plateforme.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-yellow-300 rounded-full w-6 h-6 flex items-center justify-center mr-4">✓</span>
            <span>Interface intuitive : Gérez facilement vos offres, suivez vos performances en temps réel et optimisez vos campagnes sans être un expert en digital.</span>
          </li>
        </ul>
      </section>

      <section className="w-full max-w-4xl text-left bg-white rounded-lg shadow-md p-6 my-8">
        <h2 className="text-2xl font-bold mb-4">Prêt à passer à l’action ?</h2>
        <p className="text-gray-600 mb-6">
          Rejoignez Smart Reduc dès aujourd’hui et découvrez comment nos outils digitaux peuvent vous aider à atteindre vos
          objectifs. Faites le maintien de vos performances et visibilité, de commentaires de nos clients et ventes.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
          Prenez rendez-vous maintenant
        </button>
      </section>
    </div>
  );
}