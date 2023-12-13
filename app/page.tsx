"use client";

import { useState } from 'react';

const Home = () => {
  const [step, setStep] = useState(0);

  const names = ['Lests Start', 'Sir Zia Khan', 'Sir Naveed','Sir Abu Hurairah','Sir Zeeshan','Abid Malik','End'];
  const pictures = ['start.gif','sirzia.jpg', 'sirnaveed.jpeg','AbuHurairah.jpeg','zeeshanhanif.jpg','abid.png','end.gif'];

  const currentName = names[step];
  const currentPicture = pictures[step];

  const handleNext = () => {
    setStep((prevStep) => (prevStep < names.length - 1 ? prevStep + 1 : prevStep));
  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
   <body>
      
   
    <div >
      <h1>Piaic Team</h1>
      <hr />
      <h2>{currentName}</h2>
      <hr />
      <hr />
      {/* <button onClick={handleBack}>Back</button> */}
      <button className="button" onClick={handleBack}><span>Back </span></button>
      <img
        src={currentPicture}
        alt={currentName}
        style={{ width: '400px', height: '400px' }}
      />
            <button className="button" onClick={handleNext}><span>Next</span></button>
      {/* <button onClick={handleNext}>Next</button> */}
      {/* <hr /> */}
      
    </div>
    </body>
  );
};

export default Home;
