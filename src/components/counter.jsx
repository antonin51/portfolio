// import { useState } from "react"
import useCounterStore from "../store/counterStore"
import "../styles/counter.css"

function Counter() {
   // Le hook useState permet de stocker et de modifier des valeurs
   // L'avantage d'utiliser un hook plutôt qu'une variable est que lorsque vous modifiez la valeur de la variable, le composant est automatiquement rechargé
   // let count = 10
   // Pour définir une variable d'état, on utilise la fonction useState
   // La fonction s'écrit sur une constante avec un tableau contenant deux valeurs
   // [valeur iniatile, fonction de mise à jour]
   // Ensuite on attribut le hook useState à la variable d'état et on assigne la valeur initiale
   // const [count, setCount] = useState(0)
   const { next, previous, horoscope, currentIndex } = useCounterStore()

   
   // const increment = () => {
   //       setCount(count + 1)
   // }

   // const decrement = () => {
   //    setCount(count - 1)
   // }
   return (
      <>
         <h1 className="title">Voici le compteur</h1>
         <img src={horoscope[currentIndex].image} alt={horoscope[currentIndex].signes} style={{ width: "200px", height: "200px" }} />
         <button onClick={previous}>Précédent</button>
         <button onClick={next}>Suivant</button>
         {/* <button onClick={reset}>Reset</button> */}
      </>
   )
}

export default Counter