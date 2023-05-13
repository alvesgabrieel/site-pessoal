import React from "react";
//imgs
import Image from "../assets/banner.png";
//icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
// link
import { Link } from "react-scroll";
//css banner
import "../index.css";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              GABRIEL <span>ALVES</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leadin-[1]"
            >
              <span className="text-white mr-1">desenvolvedor</span>
              <TypeAnimation
                sequence={["Web", 2000, "React", 2000, "JavaScript", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.7 }}
              className="mb-8 max-wid-lg mx-auto lg:mx-0"
            >
              Atualmente meu foco é no Desenvolvimento Web Front-end,
              desenvolvendo aplicações web responsivas com as tecnologias mais
              atualizadas do mercado, tendo como meta tornar-me Fullstack.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contate-me</button>
              </Link>
              <Link to="work" activeClass="active" smooth={true} spy={true}>
                <a href="#" className="text-gradient btn-link ml-2">
                  Projetos
                </a>
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://github.com/alvesgabrieel"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-alvesqm-desenvolvedor/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="text-center"
          >
            <img
              className="App-logo block mx-auto"
              src={Image}
              alt="profile imag"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
