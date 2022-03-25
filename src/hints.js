import React from 'react';

const Hints = ({ input, setInput, setSyllables }) => {
    return (
        <div className='hints'>
            {input == "" ? 
                <h4 className="hints__title">Not sure where to start? Pick an adjective</h4> :
                <h4 className="hints__title">Pick an adjective</h4>
            }
            <ul>
                <li onClick={() => {setInput("grand"); setSyllables(1);}}>grand</li>
                <li onClick={() => {setInput("slimy"); setSyllables(2);}}>slimy</li>
                <li onClick={() => {setInput("purple"); setSyllables(2);}}>purple</li>
                <li onClick={() => {setInput("big"); setSyllables(1);}}>big</li>
                <li onClick={() => {setInput("weird"); setSyllables(1);}}>weird</li>
                <li onClick={() => {setInput("unfortunate"); setSyllables(3);}}>unfortunate</li>
                <li onClick={() => {setInput("timely"); setSyllables(2);}}>timely</li>
                <li onClick={() => {setInput("perpendicular"); setSyllables(3);}}>perpendicular</li>
                <li onClick={() => {setInput("askew"); setSyllables(2);}}>askew</li>
                <li onClick={() => {setInput("smart"); setSyllables(1);}}>smart</li>
                <li onClick={() => {setInput("fast"); setSyllables(1);}}>fast</li>
                <li onClick={() => {setInput("broad"); setSyllables(1);}}>broad</li>
                <li onClick={() => {setInput("merry"); setSyllables(2);}}>merry</li>
                <li onClick={() => {setInput("public"); setSyllables(2);}}>public</li>
                <li onClick={() => {setInput("justifiable"); setSyllables(3);}}>justifiable</li>
                <li onClick={() => {setInput("aspiring"); setSyllables(3);}}>aspiring</li>
                <li onClick={() => {setInput("mind-blowing"); setSyllables(3);}}>mind-blowing</li>
                <li onClick={() => {setInput("amazing"); setSyllables(3);}}>amazing</li>
                <li onClick={() => {setInput("disgusting"); setSyllables(3);}}>disgusting</li>
                <li onClick={() => {setInput("sluggish"); setSyllables(2);}}>sluggish</li>
                <li onClick={() => {setInput("sly"); setSyllables(1);}}>sly</li>
                <li onClick={() => {setInput("forgetful"); setSyllables(3);}}>forgetful</li>
                <li onClick={() => {setInput("dastardly"); setSyllables(3);}}>dastardly</li>
                <li onClick={() => {setInput("hard"); setSyllables(1);}}>hard</li>
                <li onClick={() => {setInput("queer"); setSyllables(1);}}>queer</li>
                <li onClick={() => {setInput("benevolent"); setSyllables(3);}}>benevolent</li>
                <li onClick={() => {setInput("wrong"); setSyllables(1);}}>wrong</li>
                
            </ul>
        </div>
    );
}

export default Hints;