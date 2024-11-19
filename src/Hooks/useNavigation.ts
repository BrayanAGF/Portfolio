import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
 
    const navigate = useNavigate();

    const onHandleNavigate = (Enlace: string, State?: any) => {
        if (!document.startViewTransition) return navigate(Enlace, { state: State })

        document.startViewTransition(() =>
            flushSync(() => navigate(Enlace, { state: State }))
        )

    }

    return {
        onHandleNavigate
    }
}