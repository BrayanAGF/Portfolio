import { Post } from "../Components/Post/Post"
import { Thread } from "../Components/Thread/Thread"
import { ThreadAcerca } from "../Data/Blog.data"

export const AcercaDeMi = () => {
  return (
    <>
    <Thread Content={ThreadAcerca}/>
    <Post Text="Soy fanatico de los perros y actualmente tengo dos perros de raza labrador 🐶"></Post>
    </>
  )
}
