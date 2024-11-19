import { Route, Routes } from "react-router-dom"
import { Layout } from "./Components/Layout"
import { Inicio } from "./Pages/Inicio/Inicio"
import { Blog } from "./Pages/Blog/Blog"

function App() {

  return (
    <section className="flex justify-center">
      <Layout>
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Blog" element={<Blog />} />

          <Route path="/*" element={<Inicio />} />
        </Routes>
      </Layout>
    </section>
  )
}

export default App




