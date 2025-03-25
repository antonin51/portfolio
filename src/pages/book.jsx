import Card from "../components/card"
import "../styles/book.css"

function Book(){

   const cards = [
      {
         image: "/images/img1.jpg",
         title: "Crane",
         description: "crane en couleur"
      },
      {
         image: "/images/img2.jpg",
         title: "Pinceau",
         description: "pinceau de couleur"
      },
      {
         image: "/images/img3.jpg",
         title: "Degradé",
         description: "dégardé de ouf"
      },
      {
         image: "/images/img4.jpg",
         title: "Peinture",
         description: "peinture wow"
      }
   ]


   return (
      <main>
         <h1>Book</h1>
         <div className="cards">
            {cards.map((card) => {
               return <Card key={card.image} image={card.image} title={card.title} description={card.description} />
            })}
         </div>
      </main>
   )
}

export default Book