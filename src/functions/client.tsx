import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

// LEGALE NOTICE ---------------------------------------------------------------------------------------------------------------------------
export const readLegaleNotice = () => ({
  legaleNotice: {
    title: "Mentions légales",
    items: [
      {
        id: "editeur-du-site",
        title: " Éditeur du site",
        content: (
          <>
            <p>Grégory Bouteiller</p>
            <p>1A rue Gérard de Nerval, 97430 Trois Mares REUNION - FRANCE</p>
            <Button variant="link" size="sm" className="p-0 h-auto" asChild><a href="mailto:contact@kreathera.com">contact@kreathera.com</a></Button>
          </>
        ),
      },
      {
        id: "co-editeurs-du-site",
        title: "Co-éditeurs du site",
        content: (
          <>
            <p>Samia Mekkas</p>
            <p>Sébastien Dunand</p>
          </>
        ),
      },
      {
        id: "directeur-de-la-publication",
        title: "Directeur de la publication",
        content: <p>Grégory Bouteiller</p>,
      },
      {
        id: "hebergeur",
        title: "Hebergeur",
        content: (
          <>
            <p>Cloudflare, Inc.</p>
            <p>101 Townsend St, San Francisco, CA 94107, ETATS-UNIS</p>
            <Button variant="link" size="sm" className="p-0 h-auto" asChild><a href="https://www.cloudflare.com">cloudflare.com</a></Button>
          </>
        ),
      },
    ],
  },
  privacyPolicy: {
    title: "Politique de confidentialité",
    items: [
      {
        id: "responsable-du-traitement",
        title: "Responsable du traitement",
        content: (
          <>
            <p>La présente politique de confidentialité s’applique au sondage accessible à l’adresse: <Button variant="link" size="sm" className="p-0 h-auto" asChild><Link to="/">https://kreathera.com</Link></Button></p>
            <p>Le traitement des données est assuré conjointement par les trois personnes suivantes:</p>
            <ul className="list-disc">
              <li className="ml-6 mt-1">Grégory Bouteiller</li>
              <li className="ml-6">Samia Mekkas</li>
              <li className="ml-6 mb-1">Sébastien Dunand</li>
            </ul>
            <p>Pour exercer vos droits (accès, rectification, effacement, etc.), contactez: <Button variant="link" size="sm" className="p-0 h-auto" asChild><a href="mailto:contact@kreathera.com">contact@kreathera.com</a></Button></p>
          </>
        ),
      },
      {
        id: "finalite-du-traitement",
        title: "Finalité du traitement",
        content: (
          <>
            <p>Les données collectées via ce sondage sont utilisées exclusivement dans le cadre de la conception d’un outil numérique
            destiné à aider les thérapeutes dans leur activité professionnelle.</p>
            <p>Elles ne seront ni vendues, ni utilisées à des fins de prospection commerciale ou de marketing.</p>
          </>
        ),
      },
      {
        id: "donnees-collectees",
        title: "Données collectées",
        content: <><p>Ces données sont strictement limitées à ce qui est nécessaire pour atteindre l’objectif du sondage.</p></>,
      },
      {
        id: "base-legale-du-traitement",
        title: "Base légale du traitement",
        content: (
          <>
            <p>Le traitement repose sur le consentement de la personne interrogée, recueilli via une case à cocher non cochée par défaut
            avant envoi du sondage.</p>
            <p>Vous pouvez retirer votre consentement à tout moment en envoyant un email à <Button variant="link" size="sm" className="p-0 h-auto" asChild><a href="mailto:contact@kreathera.com">contact@kreathera.com</a></Button></p>
          </>
        ),
      },
      {
        id: "destinataire-des-donnees",
        title: "Destinataire des données",
        content: (
          <>
            <p>Les données sont accessibles uniquement à :</p>
              <ul className="list-disc">
                <li className="ml-6 mt-1">Grégory Bouteiller</li>
                <li className="ml-6">Samia Mekkas</li>
                <li className="ml-6 mb-1">Sébastien Dunand</li>
              </ul>
            <p>Aucune donnée n’est transmise à des partenaires publicitaires ou à des tiers non nécessaires au projet.</p>
          </>
        ),
      },
      {
        id: "duree-de-conservation",
        title: "Durée de conservation",
        content: (
          <>
            <p>Les données sont conservées pendant 12 mois à compter de la date de réponse au sondage, puis supprimées définitivement.</p>
            <p>Si vous souhaitez que vos données soient supprimées avant cette date, vous pouvez en faire la demande à <Button variant="link" size="sm" className="px-0" asChild><a href="mailto:contact@kreathera.com" className="hover:text-primary">contact@kreathera.com</a></Button></p>
          </>
        ),
      },
      {
        id: "droits-des-personnes-concernees",
        title: "Droits des personnes concernées",
        content: (
          <>
            <p>Conformément au RGPD, vous avez le droit de :</p> 
            <ul className="list-disc">
              <li className="ml-6 mt-1">Accéder à vos données</li>
              <li className="ml-6">Demander leur rectification</li>
              <li className="ml-6">Demander leur effacement</li>
              <li className="ml-6">Demander la limitation du traitement</li>
              <li className="ml-6">Demander la portabilité de vos données</li>
              <li className="ml-6 mb-1">Vous opposer au traitement</li> 
            </ul>
            <p>Pour exercer ces droits, contactez <Button variant="link" size="sm" className="p-0 h-auto" asChild><a href="mailto:contact@kreathera.com">contact@kreathera.com</a></Button></p>
            <p>Vous pouvez aussi introduire une réclamation auprès de la <Button variant="link" size="sm" className="p-0 h-auto" asChild><a href="https://www.cnil.fr">CNIL</a></Button>.</p>
          </>
        ),
      },
      {
        id: "securite-des-donnees",
        title: "Sécurité des données",
        content:  (
          <>
            <p>Les données sont stockées sur un serveur sécurisé (Cloudflare) et protégées par le protocole HTTPS.</p>
            <p>Des mesures techniques et organisationnelles sont mises en œuvre pour garantir la confidentialité et la sécurité des données.</p>
          </>
        ),
      },
      {
        id: "cookies-et-traceurs",
        title: "Cookies et traceurs",
        content: (
          <>
            <p>Ce site n’utilise pas de cookies de suivi (comme Google Analytics) ou de traceurs publicitaires.</p>
            <p>Il utilise uniquement les cookies strictement nécessaires au fonctionnement du formulaire (ex. : session temporaire).</p>
          </>
        ),
      },
      {
        id: "modification-de-la-politique",
        title: "Modification de la politique",
        content: (
          <>
            <p>Cette politique peut être mise à jour. En cas de modification importante, un avertissement sera affiché sur la page du 
              sondage.</p>
          </>
        ),
      },
    ],
  },
});
export type LegaleNoticeData = Awaited<ReturnType<typeof readLegaleNotice>>;
