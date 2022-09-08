// Get DOM elements
const footer = document.querySelector(".footer");

// Get current year
const currentYear = new Date().getFullYear();

// Add content into footer
footer.innerHTML = `
  Copyright 2014 - ${currentYear}, GameOn Inc.
`;
