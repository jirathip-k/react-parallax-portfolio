import { useState } from "react";

import useBodyStyle from "./useBodyStyle";
import useHeaderStyle from "./useHeaderStyle";

import './ModeButton.css'

export default function ModeButton() {

    const [mode, setMode] = useState(false)

    const bodyStyleWhite = {
        margin: 0,
        backgroundColor: `rgb(241, 241, 241)`,
        color: `rgb(80, 80, 80)`
    };
    const bodyStyleDark = {
        margin: 0,
        backgroundColor: `rgb(80, 80, 80)`,
        color: `rgb(241, 241, 241)`
    };

    
    function changeMode() {
        setMode(prevMode => !prevMode)
    }

    useBodyStyle(mode ? bodyStyleWhite:bodyStyleDark)
    useHeaderStyle(mode ? 'social-media-icones-black':'social-media-icones-white')

    return (
        <div class="mode-button" >
            <input type="checkbox" onClick={changeMode}/>
            <div class="left"></div>
            <div class="right"></div>
            <div class="switcher"></div>
        </div>
    );
};