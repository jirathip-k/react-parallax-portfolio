import { useState, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import BarChart from '../BarChart';

import DoodleBackground from "../DoodleBackground";

import './Content.css';

export default function Content(props) {

    const [bool, setBool] = useState(false)
    const ref = useRef()

    const date = new Date()
    const hours = date.getHours() % 12

    function mouseClick() {
        setBool(prevState => !prevState)
    }
    const parallaxStyle = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    }

    return (
        <div className="parallax-container">
            <Parallax pages={4} ref={ref}>
                <ParallaxLayer
                    speed={1}
                    onClick={() => ref.current.scrollTo(1)}
                    style={parallaxStyle}
                >
                    <h1 style={{zIndex: 5}}>Hello</h1>
                    <DoodleBackground/>
                </ParallaxLayer>
                <ParallaxLayer 
                    offset={1} 
                    speed={0.5}
                    onClick={() => ref.current.scrollTo(2)}
                    style={parallaxStyle}
                >
                    <h1 style={{zIndex: 5}}>Hello 2</h1>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    onClick={() => ref.current.scrollTo(3)}
                    style={parallaxStyle}
                >
                    <h1 style={{zIndex: 5}}>Hello 3</h1>   
                </ParallaxLayer>
                <ParallaxLayer 
                    offset={3}
                    style={parallaxStyle}
                    onClick={() => ref.current.scrollTo(0)}
                >
                    <h1>Hello Mom</h1>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

/*
<main className="content" onClick={mouseClick}>
            <h1 className="content-title">Hello {bool ? props.name:'Joe'}</h1>
            <h2>It's {hours} o'clock</h2>

            <ol>
                <li>
                    !!!
                </li>
            </ol>
            <div>
                <BarChart/>
            </div>
            
</main>
*/