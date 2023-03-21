import React, { useState } from 'react';
// motion 
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// EmailJs
import emailJS from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault()

    if(name === '' || email === '' || message === '') {
      return alert('Preencha todos os campos ')
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailJS.send('service_5it4b7t', 'template_w7zmptt', templateParams, 'Fj3qRkJ1IkY5_i7RU')
    .then((response) => {
      console.log('Email enviado', response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
      alert('Mensagem enviada, entrarei em contato em breve!')

    }, (erro) => {
      console.log('ERRO', erro)
    })
  }

  return (
    <section className='py-16 lg:section' id='contact' >

      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row'> 

          {/* text */}
          <motion.div className='flex-1 flex justify-start items-center' variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Entre em contato</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Vamos trabalhar <br /> juntos!</h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form onSubmit={sendEmail} className='flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6 items-start' variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
            <input onChange={(e) => setName(e.target.value)} value={name} className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'  type="text" placeholder='Seu Nome' />
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'  type="text" placeholder='Seu Email' />
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'  placeholder='Sua mensagem'></textarea>
            <button className='btn btn-lg'>Enviar mensagem</button>
          </motion.form>


        </div>

      </div>

    </section>
  );
};

export default Contact;
