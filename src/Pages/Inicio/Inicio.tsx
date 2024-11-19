import { ExperienciaItem } from "./Components/ExperienciaItem"
import { ProyectoCard } from "./Components/Proyecto.Card"
import { Experiencia, Habilidades, Proyectos } from "./Data/Inicio.data"
import { motion, AnimatePresence } from "framer-motion"

export const Inicio = () => {

    document.title = "Inicio"

    return (
        <AnimatePresence>
            <motion.div className="overflow-hidden flex flex-col gap-5" initial={{ height: 10, filter: "blur(5px)" }} animate={{ height: "auto", filter: "blur(0px)" }} exit={{ height: 0 }} transition={{ duration: 1 }}>
                <section className="flex flex-col-reverse sm:flex-row items-center justify-between">
                    <div className="flex flex-col items-center sm:items-start sm:w-[70%]">
                        <h1 className="text-[30px] text-center sm:text-start sm:text-[40px] font-bold font-[Inter] w-fit dark:text-[#FAFAFA] text-[#08090A] ">¡Hola! Me llamo Brayan Alberto 👋</h1>
                        <p className="text-[16px] font-[Inter] text-center sm:text-start dark:text-[#FAFAFA] text-[#08090A] ">Soy un desarrollador web que le encanta mucho el diseño de interfaces y el lado visual de las aplicaciones web.</p>
                    </div>
                    <img src="./assets/imgs/Perfil.jpg" alt="Perfil Photo" className="!w-[120px] !h-[120px] object-cover rounded-[100px]" />
                </section>
                <section>
                    <h1 className="text-[18px] font-bold font-[Inter] dark:text-[#FAFAFA] text-[#08090A]">Acerca de mi</h1>
                    <p className="text-[14px] font-[Inter] text-slate-600 dark:text-[#919191] ">Egrese de mi carrera de Ingenieria en Sistemas Computacionales incursionando en el mundo laboral mediante el desarrollo web.</p>
                </section>
                <section className="font-[Inter]">
                    <h1 className="text-[18px] font-bold mb-3 dark:text-[#FAFAFA] text-[#08090A]">Experiencia</h1>
                    <div className="flex flex-col gap-2">
                        {
                            Experiencia.map((experiencia, index) => (
                                <ExperienciaItem {...experiencia} key={index} />
                            ))
                        }
                    </div>
                </section>
                <section>
                    <h1 className="text-[18px] font-bold font-[Inter] mb-2 dark:text-[#FAFAFA] text-[#08090A]">Educación</h1>
                    <div>
                        <p className="text-[16px] font-bold font-[Inter] dark:text-[#FAFAFA] text-[#08090A]">Ingeniería en Sistemas Computacionales</p>
                        <p className="text-[14px] font-[Inter] text-slate-600 dark:text-[#919191]">Instituto Tecnológico de Ocotlán</p>
                        <p className="text-[14px] font-[Inter] text-slate-600 dark:text-[#919191]">2018 - 2023</p>
                    </div>
                    <hr className="my-2" />
                    <div>
                        <p className="text-[16px] font-bold font-[Inter] dark:text-[#FAFAFA] text-[#08090A]">Técnico en programación</p>
                        <p className="text-[14px] font-[Inter] text-slate-600 dark:text-[#919191]">Centro de Bachillerato Tecnológico Industrial y de Servicios No.49</p>
                        <p className="text-[14px] font-[Inter] text-slate-600 dark:text-[#919191]">2015 - 2018</p>
                    </div>
                </section>
                <section className="AnimScroll">
                    <h1 className="text-[18px] font-bold font-[Inter] dark:text-[#FAFAFA] text-[#08090A] mb-2">Habilidades</h1>
                    <div className="Home__Habilidades-Container">
                        {
                            Habilidades.map((habilidad, index) => (
                                <div key={index} className="Habilidades__Pill">{habilidad}</div>
                            ))
                        }
                    </div>
                </section>
                <section className="text-center">
                    <h1 className="text-[40px] font-bold font-[Inter] dark:text-[#FAFAFA] mb-2 text-[#08090A]">Proyectos</h1>
                    <p className="text-[16px] font-[Inter] text-slate-600 dark:text-[#919191]">Me gusta mucho crear proyectos de desarrollo web y acontinuación te muestro algunos</p>
                    <div className="">
                        {
                            Proyectos.map((proyecto, index) => (
                                <ProyectoCard {...proyecto} key={index} />
                            ))
                        }
                    </div>
                </section>
            </motion.div>
        </AnimatePresence>
    )
}
