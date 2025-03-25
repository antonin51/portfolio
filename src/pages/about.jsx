import { Link } from "react-router-dom"
import Hello from "../components/hello"

function About() {
  return (
   <>
      <h1>Page about</h1>
      <Link to="/">Home</Link>
      <Hello prenom="Jack" nom="Johnes" />
   </>
  )
}

export default About