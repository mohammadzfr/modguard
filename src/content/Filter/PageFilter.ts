// Import the bad-words library
// import Filter from 'bad-words-plus';
const Filter = require('bad-words-plus');


// Create an instance of the Filter class
const filter = new Filter({ firstLetter: true });

// Function to filter the text content of an HTML element
const filterElementContent = (element: Element) => {
  if (element instanceof HTMLElement && element.innerText) {
    const originalText = element.innerText;
    console.log('Original Text:', originalText);

    const filteredText = filter.clean(originalText);
    console.log('Filtered Text:', filteredText);

    element.innerText = filteredText;
  }
};

const filterPage = () => {
  const textElements = Array.from(document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6'));
  textElements.forEach((element) => {
    filterElementContent(element);
  });
};


// Call the filterPage function when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  filterPage();
});
