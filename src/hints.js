import React from 'react';

const Hints = ({ input, setInput, setSyllables }) => {
    return (
        <div className='hints'>
            {input == "" ? 
                <h3 className="hints__title">Not sure where to start? Try some common adjectives</h3> :
                <h3 className="hints__title">Common adjectives</h3>
            }
            <ul>
                <li onClick={() => {setInput("big"); setSyllables(1);}}>big</li>
                <li onClick={() => {setInput("grand"); setSyllables(1);}}>grand</li>
                <li onClick={() => {setInput("slimy"); setSyllables(2);}}>slimy</li>
                <li onClick={() => {setInput("purple"); setSyllables(2);}}>purple</li>
                <li onClick={() => {setInput("weird"); setSyllables(1);}}>weird</li>
                <li onClick={() => {setInput("unfortunate"); setSyllables(3);}}>unfortunate</li>
                <li onClick={() => {setInput("timely"); setSyllables(2);}}>timely</li>
                <li onClick={() => {setInput("perpendicular"); setSyllables(3);}}>perpendicular</li>
                <li onClick={() => {setInput("askew"); setSyllables(2);}}>askew</li>
            </ul>
        </div>
    );
}

export default Hints;