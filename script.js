//create the DOM fragment for the index.html page.
const homeFragment = document.createDocumentFragment();

//create the container for the web app description and assign an id name.
const description = document.createElement('div');
description.id = 'desc';
//create the h1,h2 and h3 and add text content.
description.innerHTML = `
    <h1>Explore the roar</h1>
    <h2>Your motorcyle catalogue</h2>
    <h3>40,000+ bikes</h3>
`;

//create the image-slider container and assign a class.
const defaultBike = document.createElement('div');
defaultBike.classList.add('image-slider');
//add the image.
defaultBike.innerHTML = `
    <img src="images/blue.png" alt="blue sports bike">
    <img src="images/blue.png" alt="blue sports bike">
    <img src="images/blue.png" alt="blue sports bike">
`; 

//create the link for navigation to next page.
const link = document.createElement('a');
link.href = 'catalogue.html';
link.rel = 'next';

//add the logo
const logo = document.createElement('img');
logo.id = 'logo';
logo.src = 'images/logo.svg';
logo.alt = 'A motorcycle logo';

//append the logo to the hyperlink.
link.appendChild(logo);

//append to the fragment
homeFragment.append(description, defaultBike, link);

//append the fragment to the body
document.body.appendChild(homeFragment);