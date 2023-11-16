/* 
-------------------------------------------------------------------------------------------
AboutMe component contains code for the about me view/page
*Adds my name as headline
*Adds first paragragh about myself
*Adds second paragragh about why I choose MCDA program
-------------------------------------------------------------------------------------------
*/

import React from "react";
import '../App.css';

const AboutMe = () => {
    return (
      <div className='aboutMe'> 
        <h1>Sivleen Kaur</h1>
        <p>Hi, my name is Sivleen Kaur. I am from Punjab, India. I have completed my BTech in Communication and Computer Engineering from LNMIIT, Jaipur, India. After completing my undergraduate, I worked at Traction on Demand as a mulesoft developer for around ten months. Later, the company was acquired by Salesforce, and since then, I have worked as a Mulesoft Developer at Salesforce, with an overall experience of 2 years as a Mulesfot Developer. I also have experience working as a salesforce developer, specifically in the salesforce industries(velocity). </p>
        <p>I choose MCDA because this program will help me develop deep knowledge and gain expertise in practical aspects of the computing and data analytics domain, as almost one-third part of the courses are taught by industry professionals and are project-based. Working on real-world challenges through projects, design competitions, and hackathons will help me gain invaluable experience and foster creativity, teamwork and project management skills. Moreover, the internship program will help me gain industry experience, enhance my technical skills, and build my professional network, which will further help me after graduation. </p>
      </div> 
    );
};

export default AboutMe;