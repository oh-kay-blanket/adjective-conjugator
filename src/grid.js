import React, {Component} from 'react';

class Grid extends React.Component {
  render() {
    return (
      <div class='container'>
        <div class='title'>
          <h1>Adjective Conjugator</h1>
          <p>A tool to conjugate English adjectives into their adverb, comparative, and superlative forms.</p>
        </div>
        <div class='adjective-box'>
          <Adjective
            handleConversion={this.props.handleConversion}
          />
        </div>
        <div class='grid'>

          <GridBox
            title='Adverb'
            content={this.props.adverb}
            conversionMethod={this.props.adverbMethod}
            example={this.props.adverbExample}
          />

          <GridBox
            title='Comparative'
            content={this.props.comparative}
            conversionMethod={this.props.comparativeMethod}
            example={this.props.comparativeExample}
          />

          <GridBox
            title='Superlative'
            content={this.props.superlative}
            conversionMethod={this.props.superlativeMethod}
            example={this.props.superlativeExample}
          />
        </div>
      </div>
    );
  }
}

// Grid box component
class GridBox extends React.Component {
  render() {
    return (
      <div class='grid-box'>

        <Content // Title
          title={this.props.title}
          content={this.props.content}
        />

        <ConversionMethod // Conversion Method
          conversionMethod={this.props.conversionMethod}
        />

        <Example
          example={this.props.example}
        />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <h4>{this.props.title}: {this.props.content}</h4>
    );
  }
}


class Adjective extends React.Component {
  constructor(props) {
    super(props)

    this.initialState = {
        adjective: '',
        syllables: '1'
    };
    this.state = this.initialState;
  }

  handleChange = event => {
    this.setState({
      adjective: event.target.value
    }, () => {
      this.props.handleConversion(this.state);
    });
  }

  syllableChange = event => {
    this.setState({
      syllables: event.target.value
    }, () => {
      this.props.handleConversion(this.state);
    });
  }

  render() {
    return (
      <div class='adjective-input-area'>
        <p>
          <input
            class='input-box'
            type="text"
            name="adjective"
            placeholder="Type an adjective"
            value={this.state.adjective}
            onChange={this.handleChange}
            autoFocus
          />
          Syllables:
          <select onChange={this.syllableChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3+</option>
          </select>
        </p>
      </div>
    );
  }
}

class ConversionMethod extends React.Component {
  render() {
    return (
      <p><b>Method:</b> {this.props.conversionMethod}</p>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <p><b>Example:</b> {this.props.example}</p>
    );
  }
}

export default Grid;
