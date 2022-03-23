import React from 'react';

const Input = ({ input, setInput, syllables, setSyllables }) => {

    return (
        <div className='input-area'>
            <input
                className='input-box'
                type="text"
                name="adjective"
                placeholder="Type any adjective"
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus
            />
            <p>Syllables:</p>
            <select value={syllables} onChange={e => setSyllables(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3+</option>
            </select>
        </div>
    );
}

export default Input;