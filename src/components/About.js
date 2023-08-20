import React from 'react';
import img1 from "../assets/img/entertainment.jpg";
import img2 from "../assets/img/contact-img.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
    <div className="about-container" >
      <div className="image-container">
        <h1 className="heading">I am a Professional Voice Artist</h1>
        <img src={img2} alt="Person" className="person-image" />
      </div>
      <div className="content-container">
        <p className="description">
          Welcome to my world! I'm passionate about using my voice to bring stories to life and create memorable experiences. Let's embark on an incredible journey together!
        </p>
        <div className="topics-container">
          <div className="topic">
            <i className="fas fa-language"></i>
            <h3>Language</h3>
            <p>Captivating audiences with multilingual mastery and vocal prowess.</p>
          </div>
          <div className="topic">
            <i className="fas fa-microphone"></i>
            <h3>Narration</h3>
            <p>Guiding audiences through mesmerizing journeys with my narrative expertise.</p>
          </div>
          <div className="topic">
            <i className="fas fa-person"></i>
            <h3>Voice Ages</h3>
            <p>From the innocence of a child to the wisdom of the elderly, I bring to life voices that span all ages.</p>
          </div>
          <div className="topic">
            <i className="fas fa-commenting"></i>
            <h3>Accents</h3>
            <p>Diving into the diverse ocean of accents, delivering linguistic brilliance.</p>
          </div>
          <div className="topic">
            <i className="fas fa-feed"></i>
            <h3>Voice Over Skills</h3>
            <p>With a versatile voice, impeccable articulation, expressive tone, and an innate ability to interpret scripts, I bring a captivating and professional touch to every voice over project.</p>
          </div>
          <div className="topic">
            <i className="fas fa-podcast"></i>
            <h3>Character Voices</h3>
            <p>From quirky sidekicks to menacing villains, I possess the versatility to breathe life into a myriad of captivating character voices, crafting distinctive personalities with a wide vocal range.</p>
          </div>
          {/* Add more topic divs with icons and descriptions */}
        </div>
      </div>
    </div>
    </section>  );
};

export default About;
