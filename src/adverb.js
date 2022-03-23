function adverbConjugate(value) {
  let adverb, adverbMethod, adverbExample;
  // ADVERB

  // 'y' ending
  if (value.slice(-1) === 'y') {
    adverb = value.slice(0,-1) + 'ily';
    adverbMethod = `Adjective - 'y' + 'ily'.`;
  }
  // 'le' ending
  else if (value.slice(-2) === 'le') {
    adverb = value.slice(0,-1) + 'y';
    adverbMethod = `Adjective - 'le' + 'ly'.`;
  }
  // 'c' ending
  else if (value.slice(-2) === 'ic') {
    // check for exceptions (public-->publicly)
    adverb = value + 'ally';
    adverbMethod = `Adjective + 'ally'.`;
  }
  // default ending
  else {
    adverb = value + 'ly';
    adverbMethod = `Adjective + 'ly'.`;
  }

  adverbExample = 'Harold ate the jello ' + adverb + '.';

  return [adverb, adverbMethod, adverbExample];
}

export default adverbConjugate
