import React from "react";

import Header from "../Header";

import "./style.less";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="content">
          <p className="paragraph">
          Social injustice speaks volumes about the world we live in today. Time after time in history, 
          Black lives have been dismissed and systemically targeted in a negative light; we stand in solidarity against repetition of Black oppression in our history. 
          Discrimination towards Black lives must end.</p> 
          <p className="paragraph"> Here at Make Cents, every cent counts towards fighting social injustice, no matter how big or small. 
          By choosing to use Make Cents, each purchase made on a debit or credit card will be rounded up to the nearest dollar, and the difference will 
          be donated to a fund of your choice advocating against racial inequality. Whether it be affirming education efforts and the advocacy of Black Lives Matter, 
          defending legal battles faced with protest, intervening in police brutality, or demanding liberation of racial justice to those like George Floyd, Breonna Taylor, 
          Ahmaud Arbery, and many more, every cent collected will make sense. 
          </p>
          <p className="paragraph">
          We understand that making an impact on abolishing the social injustice towards the Black community may seem intimidating with the plethora of methods to contribute
           to the movement. By using Make Cents, the process of supporting human rights and the end of systemic racism is simple and streamlined. Together, it is our responsibility
            to cease anti-Black sentiments. Creating an impact can start with baby steps- do your part, beginning with something that Makes Cents.  
          </p>
      </div>

    </div>
  );
};

export default About;
