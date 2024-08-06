import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
    );
  };


     
    
    
const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText} >introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p 
          variants={fadeIn("", "", 0.1, 1 )}
          className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          I am a Senior at The University of North Carolina at Charlotte, majoring in Data Science and minoring in Artificial Intelligence. My academic background equips me with a robust foundation in data analysis, statistical modeling, and computational techniques, enabling me to transform complex datasets into actionable insights. I have hands-on experience in both front-end and back-end development, with proficiency in Java and JavaScript, and am familiar with frameworks such as React, Angular, and Node.js. Additionally, I excel in data visualization, predictive analytics, and machine learning, leveraging tools like Python, R, Tableau, Power BI, and SQL. My skill set includes data cleaning, preprocessing, feature engineering, and statistical analysis, alongside practical applications of machine learning algorithms and big data technologies like Hadoop and Spark. Passionate about integrating data science with AI and full-stack development, I am eager to apply my diverse skills to tackle real-world challenges and contribute to innovative solutions in a professional setting.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service,index) => (
            <ServiceCard key={service.title} index= {index} {...service} />
          ))}
        </div>
    </>
  );
};

export default SectionWrapper(About, "about")