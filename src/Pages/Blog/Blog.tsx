import { useState } from "react"
import { CakeIcon, CheckIcon, SuitcaseIcon } from "../../Components"
import { Tabs } from "./Components/Tabs/Tabs"
import { Publicaciones } from "./Views/Publicaciones"
import { AcercaDeMi } from "./Views/AcercaDeMi"

export const Blog = () => {

  document.title = "Blog"
  const [View, setView] = useState("Publicaciones")

  return (
    <div>

      <div className="font-[Inter] relative">
        <img src="./assets/imgs/bg-blog.jpg" alt="Wallpaper" className="rounded-lg object-cover h-[200px] w-full mb-[150px]" />
        <div className="absolute top-[140px] flex flex-col w-full">
          <img src="./assets/imgs/Perfil.jpg" alt="Profile Photo" className="!w-[100px] !h-[100px] object-cover rounded-[100px] border-2 dark:border-[#2D2F39] relative left-5" />
          <div className="flex items-center gap-2 dark:text-[#FAFAFA] text-[#08090A]">
            <h1 className="text-[34px] font-bold">Brayan Alberto </h1>
            <CheckIcon />
          </div>
          <div className="flex items-center gap-3 dark:text-[#FAFAFA] text-[#08090A]">
            <div className="flex items-center gap-1">
              <SuitcaseIcon />
              <p>Desarrollador Web</p>
            </div>
            <div className="flex items-center gap-1">
              <CakeIcon />
              <p>28 de Junio</p>
            </div>
          </div>
          <Tabs setSelectItem={setView} />
        </div>
      </div>

      {
        View === "Publicaciones" ? <Publicaciones /> : <AcercaDeMi />
      }


    </div>
  )
}
