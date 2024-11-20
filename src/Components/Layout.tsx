import { BlogIcon, HomeIcon, LinkedinIcon, MailIcon, MoonIcon, SunIcon } from "./Utilities/Svg"
import { useNavigation } from "../Hooks/useNavigation"
import { useTheme } from "../Hooks/useTheme"

export const Layout = ({ children }: { children: React.ReactNode }) => {

  const { onHandleNavigate } = useNavigation()

  const {theme, setTheme} = useTheme()

  const onHandleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark")
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
        <button className="Layout__Button" name={theme === "light" ? "Oscuro" : "Claro" } onClick={onHandleMode}>
          {
            theme === "light" ? <SunIcon /> : <MoonIcon />
          }
        </button>
      </div>
    </div>
  )
}
