const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const leftHeader = document.createElement('div');
leftHeader.className = 'header-left';

// creating image element with src of logo.png
const headerImg = document.createElement('img');
headerImg.src = 'logo.png';

// creating h1 element with text content of UnEarthed
const headingUnearthed = document.createElement('h1');
headingUnearthed.textContent = "UnEarthed";

// leftHeader.append(headerImg, headingUnearthed);
// appending logo and title to header-left div
leftHeader.appendChild(headerImg);
leftHeader.appendChild(headingUnearthed);

const rightHeader = document.createElement('div');
rightHeader.className = 'header-right';

// creating a button that redirects user home
const headerButton = document.createElement('button');
headerButton.textContent = 'Home';

// event listening in on when button is clicked
headerButton.addEventListener('click', function handleClick(event){
    window.location = '/'
});

rightHeader.appendChild(headerButton);

headerContainer.appendChild(leftHeader);
headerContainer.appendChild(rightHeader);


header.appendChild(headerContainer);
