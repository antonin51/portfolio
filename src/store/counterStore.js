import { create } from 'zustand';

const horo = [
   {
      signes: "Crane",
      image: "/images/img1.jpg"
   },
   {
      signes: "Pinceau",
      image: "/images/img2.jpg"
   },
   {
      signes: "Degrade",
      image: "/images/img3.jpg"
   }
]

const useCounterStore = create((set) => ({
  horoscope: horo,
  currentIndex: 0,
  next: () => set((state) => ({ 
   //Vériier si on dépasse la fin de l'array
   currentIndex: state.currentIndex >= state.horoscope.length - 1 ? 0 : state.currentIndex + 1
  })),
  previous: () => set((state) => ({
    currentIndex: state.currentIndex <= 0 ? state.horoscope.length - 1 : state.currentIndex - 1
  }))
}));

export default useCounterStore;

// const useCounterStore = create((set) => ({ }));
// Configurer deux types d'éléments dans le store
// 1. La ou les variables de state (pour stocker les valeurs, ex. compteur, nombre de points, JSON, etc.)
// Les actions (pour modifier les valeurs, ex. increment, decrement, etc.)

/*
Les actions qui permettent de modifier les valeurs de state sont enregistrées dans le store.
Elles peuvent être appelées à partir de n'importe quel endroit du code
*/