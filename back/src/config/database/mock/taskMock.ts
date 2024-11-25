import { ITask } from "../../../models/Task";

export const tasksMock: Omit<ITask, "id">[] = [
  {
    title: "Configurer le serveur",
    description: "Mettre en place le serveur principal pour l'application.",
    status: "todo",
    assignedTo: 1,
    dueDate: new Date("2024-11-30"),
  },
  {
    title: "Créer le design de la page d'accueil",
    description: "Collaborer avec l'équipe UX/UI pour finaliser le prototype.",
    status: "in_progress",
    assignedTo: 2,
    dueDate: new Date("2024-12-05"),
  },
  {
    title: "Écrire les tests pour l'API",
    description:
      "Ajouter des tests unitaires et d'intégration pour les endpoints principaux.",
    status: "todo",
    assignedTo: 3,
    dueDate: new Date("2024-12-10"),
  },
  {
    title: "Corriger les bugs signalés par QA",
    description: "Analyse des tickets ouverts sur GitHub.",
    status: "done",
    assignedTo: null,
    dueDate: new Date("2024-11-18"),
  },
  {
    title: "Préparer la présentation du sprint",
    description: "Créer une présentation pour la réunion de fin de sprint.",
    status: "canceled",
    assignedTo: null,
    dueDate: new Date("2024-11-25"),
  },
];
