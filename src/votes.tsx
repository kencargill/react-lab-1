import {useState} from 'react';
import './votes.css';

export function Votes () {
    const [chocVal, setChocVal] = useState(0);
    const [vanVal, setVanVal] = useState(0);
    const [strawVal, setStrawVal] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0);

    let chocPercent = chocVal / totalVotes * 100;
    let vanPercent = vanVal / totalVotes * 100;
    let strawPercent = strawVal / totalVotes * 100;

    const chocVotes = () => {
        setChocVal(chocVal + 1);
        setTotalVotes(totalVotes + 1)
    }
    const vanVotes = () => {
        setVanVal(vanVal + 1);
        setTotalVotes(totalVotes + 1)
    }
    const strawVotes = () => {
        setStrawVal(strawVal + 1);
        setTotalVotes(totalVotes + 1)
    }

    return (
        <div>
            <h2>Vote Here</h2>
        <div className='btn-holder'>
            <button onClick={chocVotes}>Chocolate</button>
            <button onClick={vanVotes}>Vanilla</button>
            <button onClick={strawVotes}>Strawberry</button>
            </div>
            <div className='bar-holder'>
                { chocVal > 0 && 
                <div><label htmlFor='choc bar'>Chocolate: {chocPercent}%</label>
                <div className='choc' style={{
                    width: `${chocPercent}`+'%',
                    height: '30px'
                }}></div></div>
                }
                { vanVal > 0 && 
                <div><label htmlFor='van bar'>Vanilla: {vanPercent}%</label>
                <div className='van' style={{
                    width: `${vanPercent}`+'%',
                    height: '30px'
                }}></div></div>
                }
                {strawVal > 0 &&
                <div><label htmlFor='straw bar'>Strawberry: {strawPercent}%</label>
                <div className='straw' style={{
                    width: `${strawPercent}`+'%',
                    height: '30px'
                }}></div></div>
                }
            </div>
        { totalVotes === 0 && <p>No votes yet.</p> }
        </div>
    )
}