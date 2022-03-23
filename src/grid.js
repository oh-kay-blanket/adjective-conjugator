import React from 'react';

const Grid = ({ adverb, adverbMethod, adverbExample, comparative, comparativeMethod, comparativeExample, superlative, superlativeMethod, superlativeExample }) => {
    return (
        <div className='grid'>
            <GridBox
                title='Adverb'
                content={adverb}
                conversionMethod={adverbMethod}
                example={adverbExample}
            />

            <GridBox
                title='Comparative'
                content={comparative}
                conversionMethod={comparativeMethod}
                example={comparativeExample}
            />

            <GridBox
                title='Superlative'
                content={superlative}
                conversionMethod={superlativeMethod}
                example={superlativeExample}
            />
        </div>
    );
}

// Grid box component
const GridBox = ({ title, content, conversionMethod, example }) => {
    return (
        <div className="grid__tile">
            <h3 className="grid__tile__type">{title}</h3>
            <div className='grid__tile__box'>
                <h4 className="grid__tile__title">{content}</h4>
                <p>{conversionMethod}</p>
                <p className="example">{example}</p>
            </div>
        </div>
    );
}

export default Grid;