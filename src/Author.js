import React from 'react';
import authorImg from './assets/nathan.png'
import { useSpring, animated } from "@react-spring/web";
import { GitHub, LinkedIn } from '@mui/icons-material'
import './Author.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(15000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Author = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 8, tension: 350, friction: 90 } }))
    return (
        <animated.div className="card authorCard"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        >
            <img className='authorImg' src={authorImg} />
            <h2 className='uppercase'>Nathaniel Pownell</h2>
            <a target="_blank" href="https://www.nathanielpownell.com/">
                www.nathanielpownell.com
            </a>
            <a target="_blank" href="https://github.com/NathanielPownell" className='author_social'>
                <GitHub /> Visit my Github
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/nathaniel-pownell-3a510a1bb/" className='author_social'>

                <LinkedIn /> Connect With Me
            </a>

        </animated.div>
    )
};

export default Author;
