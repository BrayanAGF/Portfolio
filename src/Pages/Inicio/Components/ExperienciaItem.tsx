import { useState } from "react"
import { ExperienciaI } from "../Interfaces/Inicio.interfaces"
import { motion, AnimatePresence } from 'framer-motion'


export const ExperienciaItem = ({ Empresa, Img, Periodo, Puesto, Responsabilidades }: ExperienciaI) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <div className="Home__Experiencia-Container cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <img src={Img} alt={Empresa} className="Home__Experiencia-Img" />
                <section className="Home__Experiencia-Body">
                    <article>
                        <h1 className="text-[16px] font-bold dark:text-[#FAFAFA] text-[#08090A]">{Empresa}</h1>
                        <p className="text-[14px] dark:text-[#FAFAFA] text-[#08090A]">{Puesto}</p>
                    </article>
                    <article className="sm:text-right">
                        <p className="text-[14px] text-slate-600 dark:text-[#919191]">{Periodo}</p>
                    </article>
                </section>
            </div>
            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                        initial={{
                            opacity: 0,
                            height: 0,
                            marginTop: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: '10px'
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            marginTop: 0
                        }}
                    >
                        <p className="text-[14px] pl-3 dark:text-[#FAFAFA] text-[#08090A] font-bold">Responsabilidades</p>
                        {
                            Responsabilidades.map((responsabilidad, index) => (
                                <li className="text-[14px] pl-3 text-slate-600 dark:text-[#919191]" key={index}>{responsabilidad}</li>
                            ))
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </section>
    )
}

