import React, { useState, useEffect } from 'react';
import Input from './input';
import Grid from './grid';
import Hints from './hints';
import exceptions from './exceptions.json';
import adverbConjugate from './adverb';
import comSupConjugate from './comparative-superlative';

const App = () => {

    const [input, setInput] = useState('');
    const [syllables, setSyllables] = useState(1);
    const [adverb, setAdverb] = useState('');
    const [adverbMethod, setAdverbMethod] = useState('');
    const [adverbExample, setAdverbExample] = useState('');
    const [comparative, setComparative] = useState('');
    const [comparativeMethod, setComparativeMethod] = useState('');
    const [comparativeExample, setComparativeExample] = useState('');
    const [superlative, setSuperlative] = useState('');
    const [superlativeMethod, setSuperlativeMethod] = useState('');
    const [superlativeExample, setSuperlativeExample] = useState('');

    // Handle input & syllable change
    useEffect(() => {

        // check for exceptions
        const exception = exceptions.find(exception => input === exception.adjective);

        // If exception found, populate with special rules
        if (exception) {
            
            exception.adverb !== '' ?
                setAdverbExample(`Harold ate the jello <u>${exception.adverb}</u>.`) :
                setAdverbExample('');
            
            if (exception.comparative === '') {
                setComparativeExample('');
                setSuperlativeExample('');
            } else {
                setComparativeExample(`Staci is way <u>${exception.comparative}</u> than Tiffani.`);
                setSuperlativeExample(`It was the <u>${exception.superlative}</u> kiss I ever saw.`);
            }

            setAdverb(exception.adverb);
            setAdverbMethod(exception.adverb_method);
            setComparative(exception.comparative);
            setComparativeMethod(exception.comparative_method);
            setSuperlative(exception.superlative);
            setSuperlativeMethod(exception.superlative_method);
        
        // Else use normal rules
        } else {

            // Set asdverb
            let adverbValues = adverbConjugate(input, syllables);
    
            setAdverb(adverbValues[0]);
            setAdverbMethod(adverbValues[1]);
            setAdverbExample(adverbValues[2]);
            
            // Set comparative & superlative
            let compSupValues = comSupConjugate(input, syllables);
    
            setComparative(compSupValues[0]);
            setComparativeMethod(compSupValues[1]);
            setComparativeExample(compSupValues[2]);
            setSuperlative(compSupValues[3]);
            setSuperlativeMethod(compSupValues[4]);
            setSuperlativeExample(compSupValues[5]);
        }

    }, [input, syllables]);

    return (
        <>
            <div className='container'>
                <div className='title'>
                    <h1>Adjective Conjugator</h1>
                    <p>A tool to conjugate English adjectives into their adverb, comparative and superlative forms.</p>
                </div>
                <Input 
                    input={input}
                    setInput={setInput}
                    syllables={syllables}
                    setSyllables={setSyllables}
                />
                {input !== "" && 
                <Grid
                    adverb={adverb}
                    adverbMethod={adverbMethod}
                    adverbExample={adverbExample}
                    comparative={comparative}
                    comparativeMethod={comparativeMethod}
                    comparativeExample={comparativeExample}
                    superlative={superlative}
                    superlativeMethod={superlativeMethod}
                    superlativeExample={superlativeExample}
                />}
                <Hints 
                    input={input}
                    setInput={setInput} 
                    setSyllables={setSyllables}
                />
            </div>
            <div className="footer">
                <p><a href="https://mrplunkett.com">mrplunkett.com</a></p>
            </div>
        </>
    );
}

export default App;