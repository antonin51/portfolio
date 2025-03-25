import React from 'react';
import '../styles/arrow.css';

const ArrowDown = () => {
   return (
     <div className="arrow-container">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="arrow-svg"
       >
         <path d="M5 12h14"></path>
         <path d="m12 5 7 7-7 7"></path>
       </svg>
     </div>
   );
 };

export default ArrowDown;
