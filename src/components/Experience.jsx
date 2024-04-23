import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';



const ExperienceCard = ({experience})=>{
  return(
    <VerticalTimelineElement
      contentStyle={{background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      date={experience.date}
      iconStyle={{background: experience.iconBg, display: 'flex', justifyContent:'center', alignItems:'center'}}
      icon={<div className='flex justify-center items-center'>
              <img 
                src={experience.icon} 
                alt={experience.company_name}
                className='w-[80%] h-[0%] object-contain'
              />
          </div>}>

      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {experience.title}
        </h3>
        <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point,index)=>{
          return(
            <li
              key={`experience.point-${index}`}
              className='text-white-100 text-[14px] tracking-wider'
            >
                {point}
            </li>
          )
        })}
      </ul>

    </VerticalTimelineElement>
  )
}



const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience & Projects</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline layout='1-column-left'>
           { experiences.map((experience,index)=>{
            return(
              <ExperienceCard key={index} experience={experience} />
            )
           })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,'work')