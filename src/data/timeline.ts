import type { TimelineStage } from '../types';

export const timelineData: TimelineStage[] = [
  {
    title: "Etap I",
    description: "Przygotowanie projektowe",
    details: [
      "Projekt budowlany",
      "Pozwolenie na budowę",
      "Projekt wykonawczy"
    ],
    period: "wrzesień 2024 - październik 2024",
    status: "completed"
  },
  {
    title: "Etap II",
    description: "Prace ziemne i fundamenty",
    details: [
      "Wykopy",
      "Fundamenty",
      "Instalacje podziemne"
    ],
    period: "październik 2024 - grudzień 2024",
    status: "in-progress"
  },
  {
    title: "Etap III",
    description: "Stan surowy zamknięty",
    details: [
      "Ściany",
      "Strop",
      "Dach"
    ],
    period: "grudzień 2024 - marzec 2025",
    status: "planned"
  },
  {
    title: "Etap IV",
    description: "Prace instalacyjne, tynki, podłogi",
    details: [
      "Instalacje",
      "Tynki",
      "Podłogi"
    ],
    period: "marzec 2025 - czerwiec 2025",
    status: "planned"
  },
  {
    title: "Etap V",
    description: "Wykończenie",
    details: [
      "Malowanie",
      "Armatura",
      "Zagospodarowanie terenu"
    ],
    period: "czerwiec 2025 - sierpień 2025",
    status: "planned"
  }
];