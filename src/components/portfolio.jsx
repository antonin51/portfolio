import { faArrowRight, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai'; // LinkedIn
import { FaGithub } from 'react-icons/fa'; // GitHub
import { SiX } from 'react-icons/si'; // X (anciennement Twitter)
import 'typeface-inter';
import 'typeface-roboto';
import ArrowDown from "../components/arrow";
import "../styles/portfolio.css";




export default function Portfolio() {
   return (
      <>
         <header>
            <div>
               <h1>Portfolio</h1>
            </div>
            <nav>
               <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
               </ul>
            </nav>
            <FontAwesomeIcon icon={faSun} id='toggle-button' className="fa-solid fa-sun" />
         </header>


         <main>
            <section id="home">
               <div id='home-container'>
                  <article>
                     <p>Hey !</p>
                     <h2>Je suis Antonin</h2>
                     <h3>Développeur web full-stack</h3>
                     <p id='devweb'>Développeur web en formation, passionné par la cybersécurité. Je combine compétences techniques et souci de la sécurité pour créer des solutions fiables et performantes.</p>
                     <div>
                        <button onClick={() => window.location.href = '#projects'} id='button1'>Voir mes projets<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} /></button>
                        <button onClick={() => window.location.href = '#contact'} id='button2'>Me contacter</button>
                     </div>
                     <div id='icone'>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} color="#fff" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size={20} color="#fff" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <SiX size={20} color="#fff" />
                        </a>
                     </div>
                  </article>
                  <img src="images/logo-grey.png" alt="logo"/>
               </div>
               <div>
                  <a href="#projects"><ArrowDown /></a>
               </div>
            </section>

            <section id="projects">
               <h2>Projets</h2>
               <p>Voici quelques projets sur lesquels j'ai travaillé récemment.</p>
               <div id="projettab">
                  <div>
                     <div style={{ textAlign: "center" }}>
                        <img src="images/logo-grey.png" alt=""/>
                     </div>
                     <h3>Projet 1</h3>
                     <p>Lorem ipsum dolor sit amet...</p>
                     <div>
                        <p>html</p>
                        <p>css</p>
                        <p>js</p>
                     </div>
                  </div>
                  <div>
                     <div style={{ textAlign: "center" }}>
                        <img src="images/logo-grey.png" alt=""/>
                     </div>
                     <h3>Projet 2</h3>
                     <p>Lorem ipsum dolor sit amet...</p>
                     <div>
                        <p>html</p>
                        <p>css</p>
                        <p>js</p>
                     </div>
                  </div>
                  <div>
                     <div style={{ textAlign: "center" }}>
                        <img src="images/logo-grey.png" alt=""/>
                     </div>
                     <h3>Projet 3</h3>
                     <p>Lorem ipsum dolor sit amet...</p>
                     <div>
                        <p>html</p>
                        <p>css</p>
                        <p>js</p>
                     </div>
                  </div>
               </div>
            </section>

            <section id="skills">
                  <h2>Skills</h2>
                  <div>
                     <div>
                        <div className="skill">
                           <div>
                              <p>html</p>
                           </div>
                           <div>
                              <p>90%</p>
                           </div>
                        </div>
                        <hr/>
                     </div>
                     <div>
                        <div className="skill">
                           <div>
                             <p>html</p>
                           </div>
                           <div>
                              <p>90%</p>
                           </div>
                        </div>
                        <hr/>
                     </div>
                     <div>
                        <div className="skill">
                          <div>
                              <p>html</p>
                           </div>
                           <div>
                              <p>90%</p>
                           </div>
                        </div>
                        <hr/>
                     </div>
                     <div>
                        <div className="skill">
                           <div>
                              <p>html</p>
                           </div>
                           <div>
                              <p>90%</p>
                           </div>
                        </div>
                        <hr/>
                     </div>
                     <div>
                        <div className="skill">
                           <div>
                              <p>html</p>
                           </div>
                           <div>
                              <p>90%</p>
                           </div>
                        </div>
                        <hr/>
                     </div>
                     <div>
                        <div className="skill">
                           <div>
                              <p>html</p>
                           </div>
                           <div>
                              <p>90%</p>
                           </div>
                        </div>
                        <hr/>
                     </div>
                     <div>
                        <div className="skill">
                           <div>
                              <p>html</p>
                           </div>
                           <div>
                              <p>90%</p>
                           </div>
                        </div>
                        <hr/>
                     </div>
                     <div>
                        <div className="skill">
                           <div>
                              <p>html</p>
                           </div>
                           <div>
                              <p>90%</p>
                           </div>
                        </div>
                        <hr/>
                     </div>
                  </div>
            </section>

            <section id="about">
                  <h2>About</h2>
                  <p>Je m'appelle Antonin, et je suis actuellement en formation de développement web.    Passionné par les technologies du web, j'ai toujours été fasciné par la création de sites et d'applications, et je trouve immense satisfaction à voir une idée se transformer en un produit interactif et fonctionnel.<br/><br/>
                     
                  Cependant, ce qui me distingue un peu plus, c'est mon intérêt pour la cybersécurité. Dans un monde de plus en plus connecté, protéger les données et les utilisateurs est devenu essentiel. C'est un domaine qui me passionne profondément, car il combine à la fois des compétences techniques pointues et un enjeu crucial pour la société. Je suis convaincu que comprendre comment sécuriser les systèmes web, prévenir les attaques et gérer les vulnérabilités est aussi important que de savoir développer de manière efficace et propre.<br/><br/>
                  
                  Au fil de ma formation, j'ai pu explorer plusieurs aspects du développement web, notamment :
                  
                  - La création de sites dynamiques avec HTML, CSS, et JavaScript.
                  - Le développement back-end avec des technologies comme Node.js, PHP et Python.
                  - L'utilisation de bases de données, et bien sûr, l'intégration avec des API et des services tiers.
                  Mais au-delà de ces compétences techniques, ce qui m'intéresse particulièrement, c'est de comprendre comment protéger ces technologies contre les menaces potentielles. J'ai commencé à me plonger dans les bases de la cybersécurité, telles que les attaques courantes comme les injections SQL, les attaques XSS, ou encore les vulnérabilités liées à l'authentification et aux sessions.<br/><br/>
                  
                  En parallèle, je me forme également aux outils et aux bonnes pratiques pour sécuriser le code, comme l'usage de HTTPS, la gestion des permissions, et l'implémentation de politiques de sécurité sur les applications web.<br/><br/>
                  
                  Mon objectif à terme est de combiner mes compétences en développement web et en cybersécurité pour créer des applications à la fois performantes et sûres. Je cherche constamment à apprendre et à me tenir à jour sur les dernières évolutions dans ces deux domaines.</p>
            </section>

            <section id="contact">
                  <h2>Contact</h2>
                  <p>Si vous avez des questions ou des commentaires, n'hésitez pas à me contacter. Je suis disponible pour répondre à toutes vos questions et pour discuter de vos projets.</p>
                  <div>
                     <div>
                        <div>
                           <i className="fa-solid fa-envelope"></i>
                           <p>Email : antonin51@gmail.com</p>
                        </div>
                        <div>
                           <i className="fa-solid fa-phone"></i>
                           <p>Téléphone : +33 (0)6 56 19 22 61</p>
                        </div>
                        <div>
                           <i className="fa-solid fa-location-dot"></i>
                           <p>Localisation : St Maximin la Ste Baume</p>
                        </div>
                        <div>
                           <p>Suivez-moi</p>
                           <i className="fab fa-github"></i>
                           <i className="fab fa-x-twitter"></i>
                           <i className="fab fa-linkedin"></i>
                        </div>
                     </div>
                     <div>
                        <form action="#">
                           <div>
                              <label htmlFor="name">Nom :</label>
                              <input type="text" id="name" name="name" placeholder="Votre nom"/>
                           </div>
                           <div>
                              <label htmlFor="email">Email :</label>
                              <input type="email" id="email" name="email" placeholder="Votre email"/>
                           </div>
                           <div>
                              <label htmlFor="subject">Sujet :</label>
                              <input type="text" id="subject" name="subject" placeholder="Sujet"/>
                           </div>
                           <div>
                              <label htmlFor="message">Message :</label>
                              <textarea id="message" name="message" placeholder="Votre message"></textarea>
                           </div>
                        </form>
                     </div>
                  </div>
            </section>
         </main>


         <footer>
            <p>© 2025 Nom de l'entreprise. Tous droits réservés.</p>
         </footer>
      </>
   )
}