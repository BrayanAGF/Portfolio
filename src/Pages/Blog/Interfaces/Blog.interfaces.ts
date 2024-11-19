import { Dispatch } from "react"

export interface PostI {
    Text: string
    Img?: { URL: string, Name: string }
    Destacado?: boolean
    ClassName?: string
}

export interface LoveItProps {
    Value: boolean,
    SetValue: Dispatch<React.SetStateAction<boolean>>
}

export interface ThreadProps {
    Content: PostI[],
}

export interface PostImgProps {
    Img: string
}