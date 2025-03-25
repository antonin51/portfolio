import { Link } from "react-router-dom"

function Home() {
  return (
   <>
      <h1>Hello World</h1>
      <Link to="/about">About</Link>
      <link to="/book">Book</link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut beatae corrupti ad, accusantium consectetur asperiores temporibus debitis soluta doloribus ut dolor eum porro, dolores quis unde culpa impedit facere.</p>
      {/* <Counter /> */}
   </>
  )
}

export default Home