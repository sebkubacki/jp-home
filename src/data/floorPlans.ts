import type { FloorPlan } from '../types';

export const groundFloor: FloorPlan = {
  title: "Powierzchnia użytkowa - parter",
  rooms: [
    { name: "Wiatrołap", area: 3.5 },
    { name: "Hol + schody", area: 8.7 },
    { name: "Salon + kuchnia", area: 35.1 },
    { name: "WC", area: 1.8 },
    { name: "Kotłownia", area: 5.2 },
    { name: "Garaż", area: 18.0 },
    { name: "Taras", area: 15.0 }
  ]
};

export const firstFloor: FloorPlan = {
  title: "Powierzchnia użytkowa - piętro",
  rooms: [
    { name: "Hol", area: 6.8 },
    { name: "Sypialnia", area: 14.3 },
    { name: "Pokój", area: 11.2 },
    { name: "Pokój", area: 9.8 },
    { name: "Łazienka", area: 6.2 },
    { name: "Garderoba", area: 3.1 }
  ],
  totalArea: 95.60
};