const quotes = [
  'A hug is always the right size.',
  'After all, one can’t complain. I have my friends.',
  'The things that make me different are the things that make me, me.',
  'You’re braver than you believe, stronger than you seem and smarter than you think.',
  'Sometimes the smallest things take up the most room in your heart.',
  'If you live to be a hundred, I hope I live to be a hundred minus one day, so that I never have to live a day without you.',
  'A little consideration, a little thought for others, makes all the difference.',
  'People say nothing is impossible, but I do nothing every day.',
  'A day without a friend is like a pot without a single drop of honey left inside.',
  'It is more fun to talk with someone who doesn’t use long, difficult words but rather short, easy words like, ‘What about lunch?',
  'If the person you are talking to doesn’t appear to be listening, be patient. It may simply be that he has a small piece of fluff in his ear.',
  'The most wonderful thing about Tiggers is, I’m the only one.',
  'Some people care too much. I think it’s called love.',
  'If there ever comes a day when we can’t be together, keep me in your heart, I’ll stay there forever.',
  'It never hurts to keep looking for sunshine.',
  'You can’t stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes.'
];

const generateBtn = document.getElementById('generate-btn');
const usedIndex = new Set();
const quoteElement = document.getElementById('quote');


function generateQuote() {

  if (usedIndex.size >= quotes.length) {
    usedIndex.clear();
  }

  while(true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if(usedIndex.has(randomIdx)) continue ;

    const quote = quotes[randomIdx];
    quoteElement.innerText = quote;
    usedIndex.add(randomIdx);
    break;
  }
}
  

generateBtn.addEventListener('click', generateQuote)



/* 
  Simple step by step description :

  Created an array with random quotes.
  Created a variable that stores already used quotes.
  Created a function that picks a random number which is an index from quotes array.
  Checks if that quote has already been used and if so it tries another one.
  After each quote has been used we save it in the usedIndex variable.
*/