function SkillFacile(){
   return (
      <div>
         <img src="" alt="" />
      </div>
   )
}


// import { useState } from "react";
// import "../styles/exercice.css";

// export default function Slider({image}) {
//   const [index, setIndex] = useState(0);
//   const suivant = () => {
//     setIndex((indexActuel) => (indexActuel + 1) % image.length);
//   };
//   const precedent = () => {
//     setIndex((indexActuel) =>
//       indexActuel === 0 ? image.length - 1 : indexActuel - 1
//     );
//   };
//   return (
//     <div>
//       <h2>Slide {index + 1} / {image.length}</h2>
//       <img src={image[index]} alt={`Slide ${index + 1}`} className="image"/>
//       <div>
//         <button onClick={precedent}>Précédent</button>
//         <button onClick={suivant}>Suivant</button>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";

// function Element({title, description}){
//    const [estAffiche, setEstAffiche] = useState(false)
//    return (
//       <div>
//          <h2 onClick={() => setEstAffiche(!estAffiche)}>{title}</h2>
//          <p>{estAffiche ? description : null}</p>
//       </div>
//    )
// } 
// export default Element


// import { useState } from "react"

// const AffichageConditionnel = () => {
//    const [estConnecte, setEstConnecte] = useState(true)

//    return (
//       <div>
//          <h2>{estConnecte ? 'Vous êtes connecté' : 'Vous êtes pas connecté'}</h2>
//          {estConnecte ? <p>Bienvenue !</p> : <p>Veuillez vous connecter</p>}
//          <button onClick={() => setEstConnecte(!estConnecte)}> 
//             {estConnecte ? 'Se déconnecter' : 'Se connecter'}
//          </button>
//     </div>
//    )
// }

// export default AffichageConditionnel

// import { useState } from 'react';

// const Form = () => {
//    const [nom, setNom] = useState('');
//    const [prenom, setPrenom] = useState('');

//    const handleSubmit = (e) => {
//       e.preventDefault(); 
//       console.log(nom, prenom);
//    };

//    return (
//       <div>
//       <h2>Formulaire de Contact</h2>
//       <form onSubmit={handleSubmit}>
//          <div>
//             <label htmlFor="nom">Nom:</label>
//             <input
//             type="text"
//             id="nom"
//             value={nom}
//             onChange={(e) => setNom(e.target.value)}
//             />
//          </div>
//          <div>
//             <label htmlFor="prenom">Prenom:</label>
//             <input
//             type="text"
//             id="prenom"
//             value={prenom}
//             onChange={(e) => setPrenom(e.target.value)}
//             />
//          </div>
//          <button type="submit">Envoyer</button>
//       </form>
//       <p><strong>Nom :</strong> {nom}</p>
//       <p><strong>Prénom :</strong> {prenom}</p>
//       </div>
//    );
// };

// export default Form



