function comSupConjugate(value, syllables) {

  let comparative, comparativeMethod, comparativeExample, superlative, superlativeMethod, superlativeExample;
  // COMPARATIVE & SUPERLATIVE

  // One syllable
  if (syllables == 1) {

    // Ends in vowell
    if (['a','e','i','o','u'].includes(value.slice(-1))) {

      // Ends in 'e'
      if (value.slice(-1) === 'e') {
        comparative = value + 'r';
        comparativeMethod = `Adjective + 'r'. One syllable adjective ending in 'e'.`;
        superlative = value + 'st';
        superlativeMethod = `Adjective + 'st'. One syllable adjective ending in 'e'.`;
      } else {
        comparative = value + 'er';
        comparativeMethod = `Adjective + 'er'. One syllable adjective.`;
        superlative = value + 'est';
        superlativeMethod = `Adjective + 'est'. One syllable adjective.`;
      }

    // Ends in consonant
    } else {

      // Single consonant ending
      if ((['a','e','i','o','u'].includes(value.slice(-2,-1))) && !(['a','e','i','o','u'].includes(value.slice(-3,-2)))) {
        comparative = value + value.slice(-1) + 'er';
        comparativeMethod = `Adjective + final letter + 'er'. One syllable adjective ending in a single consonant.`;
        superlative = value + value.slice(-1) + 'est';
        superlativeMethod = `Adjective + final letter + 'est'. One syllable adjective ending in a single consonant.`;

      // Double consonant ending
      } else {
        comparative = value + 'er';
        comparativeMethod = `Adjective + 'er'. One syllable adjective ending in a double consonant.`;
        superlative = value + 'est';
        superlativeMethod = `Adjective + 'est'. One syllable adjective ending in a double consonant.`;
      }
    }

  // Two syllable
  } else if (syllables == 2) {

    // Ends in 'y'
    if (value.slice(-1) === 'y') {
      comparative = value.slice(0,-1) + 'ier';
      comparativeMethod = `Adjective - 'y' + 'ier'. Two syllable adjective ending in 'y'.`;
      superlative = value.slice(0,-1) + 'iest';
      superlativeMethod = `Adjective - 'y' + 'iest'. Two syllable adjective ending in 'y'.`;

      // Ends in 'e'
    } else if (value.slice(-1) === 'e') {
        comparative = value + 'r';
        comparativeMethod = `Adjective + 'r'. Two syllable adjective ending in 'e'.`;
        superlative = value + 'st';
        superlativeMethod = `Adjective + 'st'. Two syllable adjective ending in 'e'.`;

    // Ends in 'er'
    } else if ((value.slice(-2) === 'er') || (value.slice(-2) === 'le') || (value.slice(-2) === 'ow')) {
      comparative = value + 'er';
      comparativeMethod = `Adjective + 'er'. Two syllable adjective ending in 'er', 'le', or 'ow'.`;
      superlative = value + 'est';
      superlativeMethod = `Adjective + 'est'. Two syllable adjective ending in 'er', 'le', or 'ow'.`;

    // Standard ending
    } else {
      comparative = 'more ' + value;
      comparativeMethod = `'more' + adjective. Standard two syllable adjective.`;
      superlative = 'most ' + value;
      superlativeMethod = `'most' + adjective. Standard two syllable adjective.`;
    }


  // Three+ syllable
  } else if (syllables == 3) {
    comparative = 'more ' + value;
    comparativeMethod = `'more' + adjective. Standard three syllable adjective.`;
    superlative = 'most ' + value;
    superlativeMethod = `'most' + adjective. Standard three syllable adjective.`;
  }

  comparativeExample = `Staci is way <u>${comparative}</u> than Tiffani.`;
  superlativeExample = `It was the <u>${superlative}</u> kiss I ever saw.`;

  return [comparative, comparativeMethod, comparativeExample, superlative, superlativeMethod, superlativeExample];
}

export default comSupConjugate
