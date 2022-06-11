import React from 'react'
import {RiTeamFill} from 'react-icons/ri';

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutBox" id="company">
        <h1>Our Company</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          mattis ligula eget nulla euismod maximus. Vestibulum ac accumsan
          tortor, nec lobortis arcu. Quisque ultrices tincidunt lorem sed
          volutpat. Aliquam erat volutpat. Fusce vulputate nulla vitae
          sollicitudin consectetur. Cras aliquam augue a ante luctus tempus.
          Vestibulum placerat dapibus nibh, id mattis erat mattis vel. Nam sit
          amet finibus nisi.
        </p>
      </div>

      <div className="aboutBox2">
        <div className='aboutIcon'>
          <RiTeamFill size={80}/>
        </div>
        <div className='aboutBoxDetail' id="our_team">
          <h2>Our Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mattis ligula eget nulla euismod maximus. Vestibulum ac accumsan
            tortor, nec lobortis arcu. Quisque ultrices tincidunt lorem sed
            volutpat. Aliquam erat volutpat. Fusce vulputate nulla vitae
            sollicitudin consectetur. Cras aliquam augue a ante luctus tempus.
            Vestibulum placerat dapibus nibh, id mattis erat mattis vel. Nam sit
            amet finibus nisi.
          </p>
        </div>
      </div>
      <div className="aboutBox2">
        <div className='aboutIcon'>
          <RiTeamFill size={80}/>
        </div>
        <div className='aboutBoxDetail' id="who_we_are">
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mattis ligula eget nulla euismod maximus. Vestibulum ac accumsan
            tortor, nec lobortis arcu. Quisque ultrices tincidunt lorem sed
            volutpat. Aliquam erat volutpat. Fusce vulputate nulla vitae
            sollicitudin consectetur. Cras aliquam augue a ante luctus tempus.
            Vestibulum placerat dapibus nibh, id mattis erat mattis vel. Nam sit
            amet finibus nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About