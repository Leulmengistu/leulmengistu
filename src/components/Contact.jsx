import React,{useEffect,useRef, useState} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {


  const formRef = useRef()
  const [form, setForm] = useState({
    name:'',
    email: '',
    message: '',
  });

  const [loading,setLoading] = useState(false);



  const handleChange =(e)=>{
      const {name,value} = e.target
      setForm({...form, [name]:value})}
    
  const handleSubmit =  async (e)=> {
    e.preventDefault();

    setLoading(true);
    try {
      if(!form.name || !form.email || !form.message){
        throw new Error("Fill all fields please!")
      }
      const message = `${form.message} 
        from: ${form.email}
      `
     await emailjs.send("service_ugny2rl","template_rycqiqe",
    {from_name: form.name,
      to_name: "Leul Mengistu",
      from_email: form.email,
      to_email:"leulmengistu64@gmail.com",
      message: message
    },
    "AD5zq0HQqvPRnatTR"  
    )
    toast.success("Message sent successfully.Thank you!")
    setForm({name:'',email:'',message:''})
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
    

  }

  return (
   <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left','tween',0.2,0.1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-r-2xl'
        >
            <p className={`${styles.sectionSubText}`}>
              Get in touch
            </p>
            <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
            <form ref={formRef} onSubmit={handleSubmit}
              className='mt-12  flex flex-col gap-8'
            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input 
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='What is your name?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary
                  text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your email</span>
                <input 
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='What is your email?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary
                  text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea 
                  rows='7'
                  type='text'
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What do you want to say?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary
                  text-white rounded-lg outline-none border-none font-medium'
                />
              </label>
              <button type='submit' 
                className='bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md
                shadow-primary rounded-xl'
              >
                {loading?'Sending...':'Send'}
              </button>

            </form>
        </motion.div>
        <motion.div
          variants={slideIn('right','tween',0.2,0.1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[250px]'
        >
          <EarthCanvas />
        </motion.div>
   </div>
  )
}

export default SectionWrapper(Contact,'contact')