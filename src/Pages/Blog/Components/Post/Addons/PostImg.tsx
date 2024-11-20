import { useState } from "react";
import { flushSync } from "react-dom";
import { CheckIcon } from "../../../../../Components";
import { PostImgProps } from "../../../Interfaces/Blog.interfaces";

export const PostImg = ({ Img }: PostImgProps) => {
    
    const [viewMode, setviewMode] = useState("Normal");
    const [viewTransitionName, setViewTransitionName] = useState("")

    const onHandleView = (mode: string) => {
        if (!document.startViewTransition) return setviewMode("Expanded");

        if (viewMode === "Normal") setViewTransitionName("ImgTransition")

        const transition = document.startViewTransition(() => {
            flushSync(() => {
                setviewMode(mode);
            });
        });

        transition.finished.then(() => {
            if(mode === "Normal") setViewTransitionName("")
        })
    };

    return (
        <>
            {viewMode === "Normal" ? (
                <img
                    src={Img}
                    alt="Post Image"
                    className="md:h-[350px] mt-2 object-contain md:object-cover rounded-lg mx-auto cursor-pointer ImgPost"
                    style={{
                        viewTransitionName,
                    }}
                    onClick={() => onHandleView("Expanded")}
                />
            ) : (
                <div className="h-[350px]">
                    <div className="bg-black fixed h-dvh w-dvw top-0 left-0 z-30 grid place-content-center">
                        <div className="flex flex-col justify-center gap-2">
                            <div className="flex items-center gap-1 z-[45]">
                                <div>
                                    <img
                                        src="./assets/imgs/Perfil.jpg"
                                        alt="Profile Photo"
                                        className="w-[50px] h-[50px] object-cover rounded-full border-2 dark:border-[#2D2F39]"
                                    />
                                </div>
                                <h1 className="text-[23px] font-semibold text-white">Brayan Alberto</h1>
                                <CheckIcon className="w-[20px] h-[20px]" />
                            </div>
                            <img
                                src={Img}
                                alt="Post Image"
                                className="md:h-[70dvh] object-contain rounded-lg mx-auto cursor-pointer z-40 ImgPost"
                                style={{
                                    viewTransitionName,
                                }}
                                onClick={() => onHandleView("Normal")}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
