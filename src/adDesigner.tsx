import {useState} from 'react';
import './adDesigner.css';
import Ad from './ad';

export function AdDesigner () {
    const [font, setFont] = useState(20)
    const [isDark, setIsDark] = useState(false)
    const [adName, setAdName] = useState('');
    let darkBtn: boolean = true;
    let lightBtn: boolean = false;
    let addClass = '';

    const incrementFont = () => {
        setFont(font + 1 );
    }
    const decrementFont = () => {
        setFont(font - 1 );
    }

        const setToChoc = () => {
            setAdName('Chocolate');
        }
        const setToVan = () => {
            setAdName('Vanilla');
        }
        const setToStraw = () => {
            setAdName('Strawberry');
        }

    const dark = () => {
        setIsDark(true);
    }
    const light = () => {
        setIsDark(false);
    }
    if (isDark === true) {
        addClass = 'darkMode'
        lightBtn = false;
        darkBtn = true;
    } else if (isDark === false) {
        lightBtn = true;
        darkBtn = false;
    }

    return (
        <div>
            <h2>Ad Designer</h2>
                <Ad darkTheme={addClass} adName={adName} font={font}/>
            <h3>What to Support</h3>
                <div className='btn-holder'>
                <button onClick={setToChoc} disabled={adName === 'Chocolate' ? true : false}>Chocolate</button>
                <button onClick={setToVan} disabled={adName === 'Vanilla' ? true : false}>Vanilla</button>
                <button onClick={setToStraw} disabled={adName === 'Strawberry' ? true : false}>Strawberry</button>
                </div>
            <h3>Color Theme</h3>
                <div className='btn-holder'>
                <button onClick={light} disabled={lightBtn}>Light</button>
                <button onClick={dark} disabled={darkBtn}>Dark</button>
                </div>
            <h3>Font Size</h3>
                <div className='btn-holder'>
                <button onClick={decrementFont}>Down</button>
                <p>{font}</p>
                <button onClick={incrementFont}>Up</button>
                </div>
        </div>
    )
}