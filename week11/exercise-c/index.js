
function variationExample(sentence) {
  let output = document.querySelector('#variation-exp');
  let newSentence = sentence;

  /*
  * we're padding the thing we want to replace to ensure we are capturing
  * just the word and not parts of other words e.g we want `he` and not
  * the `he` part of t`he`
  */
  newSentence = newSentence.replace(' the ', "<span style='color: purple;'> the </span>");
  newSentence = newSentence.replace(' he ', ' she ');
  newSentence = newSentence.replace(' his ', ' her ');

  output.innerHTML = newSentence;
}

function variationOne(sentence) {
  let output = document.querySelector('#variation-one');
  let newSentence = sentence;

  // modify the sentence

  output.innerHTML = newSentence.replace(' stupid and ridiculous ', "<span style='letter-spacing: -2px; font-size: 1.4rem;'> $ToOP1d and R!d1cuLu0$ </span>");
}

function variationTwo(sentence) {
  let output = document.querySelector('#variation-two');
  let newSentence = sentence;

  // modify the sentence

  output.innerHTML = newSentence.replace(' tightly ', "<span style='letter-spacing: -2px; font-size: 1.4rem;'> tightly </span>");
}

function variationThree(sentence) {
  let output = document.querySelector('#variation-three');
  let newSentence = sentence;

  // modify the sentence

  output.innerHTML = newSentence.replace(' stupid and ridiculous ', "<span style='writing-mode: vertical-rl;'> stupid and ridiculous </span>" );
}

let input = document.querySelector('#sentence');

// recomput when the input text changes
input.addEventListener('input', function () {
  let sentence = input.value;
  variationExample(sentence);
  variationOne(sentence);
  variationTwo(sentence);
  variationThree(sentence);
});

// also comput when the page loads
variationExample(input.value);
variationOne(input.value);
variationTwo(input.value);
variationThree(input.value);
