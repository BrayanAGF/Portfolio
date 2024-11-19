import { useState } from "react"
import { BlogIcon, HomeIcon, LinkedinIcon, MailIcon, MoonIcon, SunIcon } from "./Utilities/Svg"
import { useNavigation } from "../Hooks/useNavigation"

export const Layout = ({ children }: { children: React.ReactNode }) => {

  const [Mode, setMode] = useState("Light")
  const { onHandleNavigate } = useNavigation()

  const onHandleMode = () => {
    if (Mode === "Light") {
      setMode("Dark")
      document.documentElement.classList.add("dark")
    } else {
      setMode("Light")
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="Layout__Container">
      {children}
      <div className="Layout__Navbar">
        <button className="Layout__Button" name="Inicio" onClick={() => onHandleNavigate("Inicio")}><HomeIcon /></button>
        <button className="Layout__Button" name="Blog" onClick={() => onHandleNavigate("Blog")}><BlogIcon /></button>
        <span className="block w-[2px] h-[25px] dark:bg-[#2D2F39] bg-[#E5E7EB] rounded-full" />
        <button className="Layout__Button" name="Contacto">
          <a href="mailto:mrbrayan.bagf@gmail.com">
            <MailIcon />
          </a>
        </button>
        <button className="Layout__Button" name="Linkedin">
          <LinkedinIcon />
        </button>
        <span className="block w-[2px] h-[25px] dark:bg-[#2D2F39] bg-[#E5E7EB] rounded-full" />
        <button className="Layout__Button" name={Mode === "Light" ? "Oscuro" : "Claro" } onClick={onHandleMode}>
          {
            Mode === "Light" ? <SunIcon /> : <MoonIcon />
          }
        </button>
      </div>
    </div>
  )
}
