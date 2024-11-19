import { useState } from "react"
import { CheckIcon, PinIcon } from "../../../../Components"
import { PostI } from "../../Interfaces/Blog.interfaces"
import { LoveIt } from "./Addons/LoveIt"
import { PostImg } from "./Addons/PostImg"

export const Post = ({ Text, Img, Destacado = false, ClassName }: PostI) => {

    const [Love, setLove] = useState(false)

    return (
        <section className={`font-[Inter] border-t dark:border-[#202122] pt-2 dark:text-[#FAFAFA] text-[#08090A] ${ClassName}`}>
            {
                Destacado && <div className="text-[12px] font-bold w-fit p-1 flex items-center gap-1">
                    <PinIcon />
                    <p>Publicación fijada</p>
                </div>
            }
            <section className="flex gap-2 flex-wrap">
                <div>
                    <img src="./assets/imgs/Perfil.jpg" alt="Profile Photo" className="w-[60px] h-[60px] object-cover rounded-full border-2 dark:border-[#2D2F39]" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center self-start gap-2 flex-wrap">
                        <div className="flex items-center gap-1">
                            <h1 className="text-[18px] font-semibold">Brayan Alberto</h1>
                            <CheckIcon className="w-[15px] h-[15px]" />
                        </div>
                        <span className="block w-1 h-1 rounded-full bg-[#08090A] dark:bg-[#FAFAFA]" />
                        <p className="text-[18px] font-semibold">28 de Junio</p>
                    </div>
                    <div className="text-[16px] break-words">
                        <p>{Text}</p>
                        {
                            Img && <PostImg Img={Img.URL} />
                        }
                    </div>
                </div>
            </section>
            <div className="flex justify-center">
                <LoveIt SetValue={setLove} Value={Love} />
            </div>
        </section>
    )
}
