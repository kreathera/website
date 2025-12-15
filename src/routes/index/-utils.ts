import type { Surveys } from "@/lib/domain";

// CONST -----------------------------------------------------------------------------------------------------------------------------------
export const survey = [
  {
    name: "q1",
    legend: "Sur quels réseaux sociaux êtes-vous actuellement présent·e pour votre activité professionnelle ?",
    description: "(Aucune ou plusieurs réponses possibles)",
    type: "checkbox",
    items: [
      { id: "instagram", label: "Instagram" },
      { id: "facebook", label: "Facebook" },
      { id: "linkedIn", label: "LinkedIn" },
      { id: "tiktok", label: "TikTok" },
      { id: "youtube", label: "Youtube" },
    ],
  },
  {
    name: "q2",
    legend: "Estimez-vous qu'être présent·e sur les réseaux sociaux vous permette d’obtenir de nouveaux patients/clients ?",
    type: "radio",
    items: [
      { id: "yes", label: "Oui, significativement" },
      { id: "aLittle", label: "Oui, mais très peu" },
      { id: "no", label: "Non, aucun impact mesurable" },
    ],
  },
  {
    name: "q3",
    legend: "Quelle est la meilleure façon, selon vous, d’acquérir des patients/clients ?",
    type: "sortable",
    items: [
      { id: "wordOfMouth", label: "Le bouche-à-oreille" },
      { id: "socialMedia", label: "Les réseaux sociaux" },
      { id: "website", label: "Un site internet" },
      { id: "bookingPlatforms", label: "Des plateformes de réservation (Resalib, Medoucine, etc...)" },
      { id: "advertising", label: "La publicité (physique ou digitale)" },
    ],
  },
  {
    name: "q4",
    legend: "Si vous ne publiez pas sur les réseaux sociaux, qu'est-ce qui vous en empêche principalement ?",
    type: "sortable",
    items: [
      { id: "lackingTime", label: "Je manque de temps" },
      { id: "lackingInspiration", label: "Je manque d'inspiration / ne sais pas quoi publier" },
      { id: "lackingTechnicalSkills", label: "Je manque de compétences techniques (création graphique, montage vidéo)" },
      { id: "fearingNotToBeLegitimate", label: "J'ai peur de ne pas être légitime ou d'être jugé·e" },
      { id: "fearingEthicalIssues", label: "J'ai des doutes sur la déontologie et les règles de communication de ma profession" },
      { id: "notKnowingSocialCodes", label: "Je ne maîtrise pas les codes des réseaux sociaux" },
      { id: "preferringToFocusOnMyPractice", label: "Je préfère me concentrer sur mes consultations" },
      { id: "dislikingBeingVisible", label: "Je n'aime pas être visible sur les réseaux sociaux" },
      { id: "notSeeingUtility", label: "Je ne pense pas que ce soit utile pour mon activité" },
    ],
  },
  {
    name: "q5",
    legend: "Quelles seraient vos principales préoccupations concernant l'utilisation d'une I.A. pour votre communication ?",
    description: "(Une à plusieurs réponses possibles)",
    type: "checkbox",
    items: [
      { id: "lossOfAuthenticity", label: "La perte d'authenticité / Le contenu qui ne me ressemble pas" },
      { id: "inexactInformation", label: "Des informations inexactes" },
      { id: "deshumanisation", label: "La déshumanisation de ma relation avec mes patients/clients" },
      { id: "ethicalIssues", label: "Le non-respect de la déontologie de ma profession" },
      { id: "lossOfControl", label: "La perte de contrôle sur mon image professionnelle" },
      { id: "aiDisclosure", label: "Le fait que mes patients/clients découvrent que la génération est faite par une I.A." },
      { id: "complexity", label: "La complexité technique de l'outil" },
      { id: "cost", label: "Le coût de la solution" },
      { id: "security", label: "La sécurité et la confidentialité des données" },
    ],
  },
  {
    name: "q6",
    legend:
      "A quel point êtes-vous à l'aise avec l'idée qu'une Intelligence Artificielle (I.A.) génère du contenu professionnel pour vous ?",
    type: "radio",
    items: [
      { id: "veryUncomfortable", label: "Très mal à l'aise" },
      { id: "somewhatUncomfortable", label: "Plutôt réticent·e" },
      { id: "neutral", label: "Neutre / Mitigé·e" },
      { id: "somewhatComfortable", label: "Plutôt à l'aise" },
      { id: "veryComfortable", label: "Totalement à l'aise" },
    ],
  },
  {
    name: "q7",
    legend: "Si vous pouviez décrire l'outil idéal pour gérer votre communication sur les réseaux sociaux, quel serait-il ?",
    type: "textarea",
  },
  {
    name: "q8",
    legend: "Quel serait le bénéfice n°1 que vous attendriez d'un tel outil ?",
    type: "textarea",
  },
  {
    name: "q9",
    legend: "Avant de nous laisser, on aimerait en savoir un peu plus sur vous, en quelques lignes :",
    description: "(Exemple : je m'appelle Céline. Je suis sophrologue depuis 5 ans...)",
    type: "textarea",
  },
] as const;

export const defaultSurveyCreateValues: Surveys["CreateValues"] = {
  consent: false,
  q1: [],
  q2: "",
  q3: [...survey[2].items],
  q4: [...survey[3].items],
  q5: [],
  q6: "",
  q7: "",
  q8: "",
  q9: "",
  email: "",
  phone: "",
};
