// COMPONENT NEED REVIEW (mobile)
import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  //open link w/ button
  const link = () => {
    return window.open("https://github.com/alvesgabrieel", "_blank");
  };

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Alguns
                <br />
                Projetos
              </h2>
              <p className="max-w-sm mb-16">
                Alguns projetos feitos por mim e um pouco sobre eles, para ver
                todos os projetos é só acessar meu Github, clicando no botão
                abaixo:
              </p>

              <button className="btn btn-sm" onClick={link}>
                Ver todos os projetos no Github
              </button>
            </div>

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="projeto clone pagina vingadores"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  <a
                    href="https://disney-plus-pagina-vingadores.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Preenchimento de forms dinamico - dados do cartao
                  </a>
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  w/ React, Styled-Components e pacote "React-input-mask(npm)"
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col gap-y-10 mt-[-14px]"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a
                  href="https://clone-disneyplus-streaming-1rm80gpux-alvesgabrieel.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-gradient">
                    Clone Landing page Streaming Disney+
                  </span>
                </a>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  w/ HTML, SASS, JS PURO
                </span>
              </div>
            </div>

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a
                  href="https://weekaway-gaqm.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-gradient">Website WEEKAWAY</span>
                </a>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">w/ REACT, TAILWIND</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
