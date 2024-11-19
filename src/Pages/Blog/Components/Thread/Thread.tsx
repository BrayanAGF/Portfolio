import { PostI, ThreadProps } from "../../Interfaces/Blog.interfaces"
import { Post } from "../Post/Post"

export const Thread = ({ Content }: ThreadProps) => {
    return (
        <>
        {
            Content.map((post: PostI) => (
                    <div className="Thread__Container" key={Math.random()}>
                        <Post Text={post.Text} Img={post.Img} Destacado={post.Destacado} />
                        <span className="block w-[3px] h-[calc(100%-60px)] rounded-full dark:bg-[#2D2F39] bg-[#E5E7EB] absolute top-[68px] left-7 z-10"></span>
                    </div>
                ))
        }
        </>
    )
}
