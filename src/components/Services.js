import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// link
import { Link } from "react-scroll";
//variants
import { fadeIn } from "../variants";

//services data
const services = [
  {
    name: "Front-End",
    description:
      "Desenvolvo no lado do cliente, requisitando e recebendo do servidor, e tratando esses dados para garantir a melhor experiência ao usuário",
    link: "Leia mais",
  },
  {
    name: "React.JS",
    description:
      "Uso o melhor que tem no mercado, a biblioteca React.js. Usadas por grandes empresas como Facebook, Airbnb, Netflix.. para construção de suas páginas",
    link: "Leia mais",
  },
  {
    name: "SEO básico",
    description:
      "Um site sem acessibilidade fica atrás nos motores de busca do google, garanta que ele seja acessivel para todos os públicas, e assim estar sempre no topo.",
    link: "Leia mais",
  },
  {
    name: "UI/UX Design",
    description: "Adpatação de interface para cada área e nicho",
    link: "Leia mais",
  },
];

const serviceList = services.map((service, index) => {
  const { name, description, link } = service;

  return (
    <div
      className="border-b border-white/20 h-[146px] mb-[38px] flex"
      key={index}
    >
      <div className="max-w-[476px]">
        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
          {name}
        </h4>
        <p className="font-secondary leading-tight">{description}</p>
      </div>
      <div className="flex flex-col flex-1 items-end">
        <a
          href="#"
          className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
        >
          <BsArrowUpRight />
        </a>
        <a href="#" className="text-gradient text-sm">
          {link}
        </a>
      </div>
    </div>
  );
});

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & img*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ onde: false, amout: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Um pouco do que eu faço</h2>

            <Link to="work" activeClass="active" smooth={true} spy={true}>
              <button className="btn btn-sm">Veja meu trabalho</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ onde: false, amout: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>{serviceList}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
