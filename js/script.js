/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// array of quote objects
quotes = [
  {
    quote: 'When something is important enough, you do it even if the odds are not in your favor.',
    source: 'Elon Musk'
  },
  {
    quote: 'The people who are crazy enough to think they can change the world are the ones who do.',
    source: 'Steve Jobs'
  },
  {
    quote: 'Read 500 pages like this every day. That\'s how knowledge works. It builds up, like compound interest. All of you can do it, but I guarantee not many of you will do it.',
    source: 'Warren Buffett'
  },
  {
    quote: 'I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.',
    source: 'Michael Jordan',
    citation: 'CHICAGO TRIBUNE',
    year: '1997'
  },
  {
    quote: 'If I cannot do great things, I can do small things in a great way.',
    source: 'MLK Jr'
  },
  {
    quote: 'The Way Get Started Is To Quit Talking And Begin Doing.',
    source: 'Walt Disney'
  }
];


// returns a random quote object from the quotes array.
function getRandomQuote() {
  let random_number = Math.floor(Math.random() * quotes.length);
  return quotes[random_number];
}

// changes the html in the #quote-box on index.html page.
function printQuote() {
  let quote = getRandomQuote();
  let html_string = '';
  html_string += `<p class="quote">${quote['quote']}</p>`;
  html_string += `<p class="source">${quote['source']}`;
  if (quote['citation'] !== undefined) {
    html_string += `<span class="citation">${quote['citation']}</span>`;
  }
  if (quote['year'] !== undefined) {
    html_string += `<span class="year">${quote['year']}</span>`;
  }
  html_string += '</p>';
  document.getElementById('quote-box').innerHTML = html_string;
  document.body.style.backgroundColor = getRandomColor();
}

// listens for a click event and calls printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// when window is loaded call the printQuote function
window.onload = function() {
  printQuote();
};

// changes the quote every five seconds
setInterval(function() {
  printQuote();
}, 5000);

// returns a random hex value (color)
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}