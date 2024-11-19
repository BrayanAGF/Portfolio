import { useRef, useState } from "react"
import { TabsProps } from "./Interfaces/Tabs.interfaces"

export const Tabs = ({ setSelectItem }: TabsProps) => {

  const PostTab = useRef<HTMLInputElement>(null)
  const ProfileTab = useRef<HTMLInputElement>(null)

  const [translate, setTranslate] = useState("0px")

  return (
    <div className="flex bg-[#FBFBFB] dark:bg-[#121314] border dark:border-[#202122] rounded-lg self-center font-[Inter] relative overflow-hidden">
      <input ref={PostTab} type="radio" name="blogtab" className="Tabs__Input" defaultChecked/>
      <button className="Tabs__Label" onClick={() => {setSelectItem("Publicaciones"); PostTab.current?.click(); setTranslate("0px")}}>Publicaciones</button>
      <input ref={ProfileTab} type="radio" name="blogtab" className="Tabs__Input" />
      <button className="Tabs__Label" onClick={() => {setSelectItem("Perfil"); ProfileTab.current?.click(); setTranslate("110px")}}>Acerca de mí</button>
      <span className="Tabs__Indicator" style={{transform: `translateX(${translate})`}}></span>
    </div>
  )
}
