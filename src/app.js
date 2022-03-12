import React, { Component } from 'react';
import Grid from './grid';
import Exceptions from './exceptions.json';
import adverbConjugate from './adverb';
import comSupConjugate from './comparative-superlative';

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      adjective: '',
      syllables: '1',
      adverb: '',
      adverbMethod: '',
      adverbExample: '',
      comparative: '',
      comparativeMethod: '',
      comparativeExample: '',
      superlative: '',
      superlativeMethod: '',
      superlativeExample: ''
    };

    this.state = this.initialState;
  }

  handleConversion = inputData => {
    const value = inputData.adjective;
    const syllables = inputData.syllables;
    let adverb, adverbMethod, adverbExample, comparative, comparativeMethod, comparativeExample, superlative, superlativeMethod, superlativeExample;

    // no input
    if (value === '') {
      this.setState({
        adjective: '',
        adverb: '',
        adverbMethod: '',
        adverbExample: '',
        comparative: '',
        comparativeMethod: '',
        comparativeExample: '',
        superlative: '',
        superlativeMethod: '',
        superlativeExample: ''
      });
      return;
    } else {

      // check for exceptions
      for(var i in Exceptions) {
        if (value === Exceptions[i].adjective) {
          adverbExample = 'Harold ate the jello <span className="example-word">' + Exceptions[i].adverb + '</span>.';
          comparativeExample = 'Staci is way <span className="example-word">' + Exceptions[i].comparative + '</span> than Tiffani.';
          superlativeExample = 'It was the <span className="example-word">' + Exceptions[i].superlative + '</span> kiss I ever saw.';

          if (Exceptions[i].adverb === '') {
            adverbExample = '';
          }

          if (Exceptions[i].comparative === '') {
            comparativeExample = '';
            superlativeExample = '';
          }

          // set state and exit loop
          this.setState({
            adjective: value,
            adverb: Exceptions[i].adverb,
            adverbMethod: Exceptions[i].adverb_method,
            adverbExample: adverbExample,
            comparative: Exceptions[i].comparative,
            comparativeMethod: Exceptions[i].comparative_method,
            comparativeExample: comparativeExample,
            superlative: Exceptions[i].superlative,
            superlativeMethod: Exceptions[i].superlative_method,
            superlativeExample: superlativeExample
          });
          return;
        }
      }

      let adverbValues = adverbConjugate(value, syllables, adverb, adverbMethod, adverbExample);

      adverb = adverbValues[0];
      adverbMethod = adverbValues[1];
      adverbExample = adverbValues[2];

      //comparativeExample = 'Staci is way ' + comparative + ' than Brad.';
      let compSupValues = comSupConjugate(value, syllables, adverb, comparative, comparativeMethod, comparativeExample, superlative, superlativeMethod, superlativeExample);

      comparative = compSupValues[0];
      comparativeMethod = compSupValues[1];
      comparativeExample = compSupValues[2];
      superlative = compSupValues[3];
      superlativeMethod = compSupValues[4];
      superlativeExample = compSupValues[5];
    }

    this.setState({
      adjective: value,
      adverb: adverb,
      adverbMethod: adverbMethod,
      adverbExample: adverbExample,
      comparative: comparative,
      comparativeMethod: comparativeMethod,
      comparativeExample: comparativeExample,
      superlative: superlative,
      superlativeMethod: superlativeMethod,
      superlativeExample: superlativeExample
    });
  }

  render() {
    const { adverb, adverbMethod, adverbExample, comparative, comparativeMethod, comparativeExample, superlative, superlativeMethod, superlativeExample } = this.state;

    return (
      <div class='app-container'>
        <Grid
          handleConversion={this.handleConversion}
          adverb={adverb}
          adverbMethod={adverbMethod}
          adverbExample={adverbExample}
          comparative={comparative}
          comparativeMethod={comparativeMethod}
          comparativeExample={comparativeExample}
          superlative={superlative}
          superlativeMethod={superlativeMethod}
          superlativeExample={superlativeExample}
        />
      </div>
    );
  }
}

export default App;
