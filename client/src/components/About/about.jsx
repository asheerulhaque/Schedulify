import React from "react";
import { Parallax } from 'react-parallax';
import '../../styles/font.css';
import Styles from './about.module.css';

const About = () => {
     return (
    <div className={Styles.AboutContainer}>
      <div className={Styles.AboutContentContainer}>
        <h1 className={Styles.AboutTitle}>About Schedulify</h1>
        <p className={Styles.AboutContent}>
          Welcome to Schedulify – Your Ultimate Solution for Seamless Consultation Scheduling! At Schedulify, we understand the importance of efficient and hassle-free appointment scheduling, especially when it comes to connecting with consultants who play a crucial role in various professional fields. Whether you're seeking expert advice in business, healthcare, education, or any other domain, Schedulify is here to revolutionize the way you book and manage your consultations.
        </p>
      </div>
      <div className={Styles.ImageContainer}>
        <Parallax
          bgImage={require('../../static/images/about_background1.jpg')}
          bgImageAlt="Calendar"
          strength={300}
          blur={{ min: -5, max: 5 }}
          style={{ height: '100vh'}}
        />
      </div>
    </div>
  );
};



export default About;