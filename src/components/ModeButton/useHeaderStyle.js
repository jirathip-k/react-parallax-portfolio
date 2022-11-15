import { useEffect } from "react";

export default function useHeaderStyle(className){
    useEffect(()=>{

        document.querySelector('.nav').classList.add(className);
        
        return () => {
            document.querySelector('.nav').classList.remove(className);
        }
    }, [className])
}