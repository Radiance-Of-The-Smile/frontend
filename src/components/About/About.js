import React from "react";
import './About.css';
import SirHamad from '../../assets/sir_hamad.png'
import Hassan from '../../assets/hassan.png'
import Ibrahim from '../../assets/ibrahim.png'
import Uzair from '../../assets/uzair.jpeg'

const About = () => {
  return (
    <div className="about">
      <h2>About Our Project</h2>
      <p align="justify">
        <span style={{"font-weight": "bold", "color": "#bf7b75"}}>Radiance Of The Smile: A Complete Deep Learning Approach</span> is an innovative project 
        that leverages deep learning techniques to analyze dental images. Our goal is to provide
        dentists with actionable insights through advanced teeth detection and disease classification.
        Utilizing modern Object Detection Models and Transfer Learning, this platform aims in
        easing manual X-Ray analysis significantly.
      </p>
      <h2>Key Features</h2>
      <ul className="features-list">
        <li>Advanced image processing using state-of-the-art deep learning models</li>
        <li>Quick and accurate identification of dental anomalies</li>
        <li>User-friendly interface for easy image upload and analysis</li>
        <li>Detailed anomaly reports to aid in diagnosis and treatment planning</li>
      </ul>
      <h2>Our Team</h2>
      <div className="team-grid">
        <div className="user-card">
          <img src={SirHamad} alt="Sir Hamad"/>
          <a href="https://www.linkedin.com/in/hamad-ulqudous-3a2a4869/">Mr. Hamad Qudous</a>
          {/* <p><span>FYP Supervisor:</span> Ustaad</p> */}
        </div>
        <div className="user-card">
          <img src={Hassan} alt="Hassan"/>
          <a href="https://www.linkedin.com/in/ihassanmahmood/">Hassan Mahmood</a>
          {/* <p><span>Project Manager:</span> Oversaw project planning and execution.</p> */}
        </div>
        <div className="user-card">
        <img src={Ibrahim} alt="Ibrahim"/>
          <a href="https://www.linkedin.com/in/mibrahim39/">Muhammad Ibrahim</a>
          {/* <p><span>Full Stack Developer:</span> Implemented web app using ReactJS and FastAPI.</p> */}
        </div>
        <div className="user-card">
          <img src={Uzair} alt="Uzair"/>
          <a href="https://www.linkedin.com/in/hafiz-uzair/">Uzair Warsi</a>
          {/* <p><span>AI Engineer:</span> Implemented deep learning models of YOLOv8 and DenseNet-121</p> */}
        </div>     
      </div>
      <p className="supervisor-note">Special thanks to our supervisor, <a href="https://www.linkedin.com/in/hamad-ulqudous-3a2a4869/">Mr. Hamad Ul Qudous</a>, for his guidance and support throughout this project.</p>
    </div>
  );
}

export default About;