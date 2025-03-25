// import { useEffect, useState } from "react"

// function Fox() {
//    // Le hook useEffect permet d'effectuer des effets de bord dans un composant foctionnel
//    // Un effet de bord (sideeffect) est une action qui affecte l'état global de l'application
//    // useEffect est utile pour effectuer des requêtes avec fetch ou pour initialiser des événements ou des variables globales
//    const [foxImage, setFoxImage] = useState("")
//    const [loading, setLoading] = useState(true)
//    useEffect(() => {
//       getRandomFox()
//    })

//    async function getRandomFox() {
//       // const req = await fetch("https://randomfox.ca/floof/")
//       // const res = await req.json()
//       // console.log(res)

//       const mock = {
//          "image": "https://randomfox.ca/images/105.jpg",
//          "link": "https://randomfox.ca/?i=105"
//       }
//       // Lancer une nouvelle résolution de promesse pour simuler les données de l'API
//       await new Promise((resolve) => {
//          setTimeout(() => {
//             setFoxImage(mock.image)
//             setLoading(false)
//             resolve(mock)
//          }, 3000)
//       })
//    }

//    // https://randomfox.ca/floof/

//    return (
//       <>
//          <h1>Le renard</h1>
//          <p>Le renard est un animal sauvage et rusé.</p>
//          {loading ? <p>Chargement...</p> : <img src={foxImage} alt="Renard" />}
//       </>
//    )
// }

// export default Fox