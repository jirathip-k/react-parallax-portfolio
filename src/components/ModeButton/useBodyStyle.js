import { useEffect } from "react";

export default function useBodyStyle(style){
    useEffect(()=>{
        for(var key in style){
            document.body.style[key] = style[key];
        }
        return () => {
            document.body.style[key] = '';
        }
    }, [style])
}