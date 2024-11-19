import { WebSiteIcon } from "../../../Components"
import { ProyectoI } from "../Interfaces/Inicio.interfaces"

export const ProyectoCard = ({ Titulo, Img, Link, Descripcion, Tecnologias }: ProyectoI) => {
    return (
        <div className="w-[280px] h-fit rounded-md overflow-hidden border dark:border-[#202122] font-[Inter] inline-block m-1">
            <img src={Img} alt="Proyecto" className="w-full h-[190px] object-cover" />
            <div className="p-2 text-start h-full flex flex-col justify-between">
                <div className="h-[100px]">
                    <h3 className="font-semibold dark:text-[#FAFAFA] text-[#08090A]">{Titulo}</h3>
                    <p className="text-[14px] text-slate-600 dark:text-[#919191] mb-2">{Descripcion}</p>
                </div>
                <div className="inline">
                    {
                        Tecnologias.map((tecnologia, index) => (
                            <div className="Habilidades__Pill" key={index}>{tecnologia}</div>))
                    }
                </div>
                <a href={Link} target="_blank">
                    <button className="text-[#FAFAFA] font-bold bg-black rounded-lg w-[80px] p-1 text-[10px] flex items-center justify-center gap-1 hover:scale-110 transition">
                        <WebSiteIcon className="w-[12px] h-[12px]" />
                        <span>Sitio web</span>
                    </button>
                </a>
            </div>
        </div>
    )
}
