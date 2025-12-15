import { createFileRoute } from "@tanstack/react-router";
import { Item } from "@/components/ui/item";

export const Route = createFileRoute("/mentions-legales")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1>Mentions légales</h1>
      <Item>
        Éditeur du site Grégory Bouteiller Adresse : [Adresse de la personne principale] Email : kreathera@gmail.com Co-éditeurs /
        co-responsables du traitement Ce sondage est réalisé conjointement par : - Grégory Bouteiller - Samia Mekkas - Sébastien Dunand
        Directeur de la publication Grégory Bouteiller Hébergeur Nom : Netlify, Inc. Adresse : 2325 3rd Street, Suite 296, San Francisco, CA
        94107, États-Unis Site web : https://www.netlify.com
      </Item>
      Politique de confidentialité
      <Item>
        1. Responsable du traitement La présente politique de confidentialité s’applique au sondage accessible à l’adresse:
        https://sgs-ts.netlify.app/ Le traitement des données est assuré conjointement par trois personnes suivantes: Grégory Bouteiller
        Samia Mekkas Sébastien Dunand Pour exercer vos droits (accès, rectification, effacement, etc.), contactez: kreathera@gmail.com
      </Item>
      <Item>
        2. Finalité du traitement Les données collectées via ce sondage sont utilisées exclusivement dans le cadre de la conception d’un
        outil numérique destiné à aider les thérapeutes dans leur activité professionnelle. Elles ne seront ni vendues, ni utilisées à des
        fins de prospection commerciale ou de marketing.
      </Item>
      <Item>3. Données collectées Ces données sont strictement limitées à ce qui est nécessaire pour atteindre l’objectif du sondage.</Item>
      <Item>
        4. Base légale du traitement Le traitement repose sur le consentement de la personne interrogée, recueilli via une case à cocher non
        cochée par défaut avant le début du sondage. Vous pouvez retirer votre consentement à tout moment en envoyant un email à
        kreathera@gmail.com
      </Item>
      <Item>
        5. Destinataires des données Les données sont accessibles uniquement à : Grégory Bouteiller Samia Mekkas Sébastien Dunand Aucune
        donnée n’est transmise à des partenaires publicitaires ou à des tiers non nécessaires au projet.
      </Item>
      <Item>
        6. Durée de conservation Les données sont conservées pendant 12 mois à compter de la date de réponse au sondage, puis supprimées
        définitivement. Si vous souhaitez que vos données soient supprimées avant cette date, vous pouvez en faire la demande à
        kreathera@gmail.com
      </Item>
      <Item>
        7. Droits des personnes concernées Conformément au RGPD, vous avez le droit de : Accéder à vos données Demander leur rectification
        Demander leur effacement Demander la limitation du traitement Demander la portabilité de vos données Vous opposer au traitement Pour
        exercer ces droits, contactez krethera@gmail.com Vous pouvez aussi introduire une réclamation auprès de la CNIL https://www.cnil.fr
      </Item>
      <Item>
        8. Sécurité des données Les données sont stockées sur un serveur sécurisé (Netlify) et protégées par le protocole HTTPS. Des mesures
        techniques et organisationnelles sont mises en œuvre pour garantir la confidentialité et la sécurité des données.
      </Item>
      <Item>
        9. Cookies et traceurs Ce site n’utilise pas de cookies de suivi (comme Google Analytics) ou de traceurs publicitaires. Il utilise
        uniquement les cookies strictement nécessaires au fonctionnement du formulaire (ex. : session temporaire).
      </Item>
      <Item>
        10. Modifications de la politique Cette politique peut être mise à jour. En cas de modification importante, un avertissement sera
        affiché sur la page du sondage.
      </Item>
    </>
  );
}
