import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection oberver hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return(    
      <section id='about' className='section' ref={ref}>
        <div className="container mx-auto">
          <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
            {/* img */}
            <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ onde:false, amout: 0.3 }} className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>              
            </motion.div>
            {/* text */}
            <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ onde:false, amout: 0.3 }} className='flex-1'>
              <h2 className='h2 text-accent'>Sobre mim</h2>
              <h3 className='h3 mb-4'>
                Sou um programador Web Freelancer 
              </h3>
              <p className='mb-6'>
              Ao longo de minha jornada adquiri conhecimentos base da programação Web:
              </p>
              <ul>
                <li>
                HTML semântico e SEO básico;  
                </li>
                <li>
                CSS, suas linguagens pré-processadas SASS e LESS;  
                </li>
                <li>
                Linguagem de programação o JavaScript/TypeScript,  
                </li>
                <li>
                Biblioteca e Framworks: React.js, Vue.js, JQuery, Bootstrap, Tailwind; 
                </li>
              </ul>
              <p>

                
              Programação orientada a objetos (POO), Clean Code, API’s, NodeJs, npm, bundlers e Git/Github também fazem parte das minhas Hardskills.
              </p>
              {/* stats */}
              <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={1} duration={3}/> : null}
                  </div>

                  <div className='font-primary text-sm tracking-[2px]'>
                    Ano de <br />
                    Experiência
                  </div>
                </div>

                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={10} duration={3}/> : null}+
                  </div>

                  <div className='font-primary text-sm tracking-[2px]'>
                    Projetos <br />
                    Completos
                  </div>
                </div>

              </div>
               <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Contate-me</button>
                <a href="#" className='text-gradient btn-link'>
                  Projetos
                </a>
               </div>    
            </motion.div>
          </div>
        </div>
      </section>        
  )
};

export default About;
