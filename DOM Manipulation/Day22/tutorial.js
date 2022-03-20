/**
 * by xennia316
 */

/**************************************
 *      Tutorial 2
 ***************************************/

console.log(document);

document.getElementById('page-banner');
let banner = document.getElementById('page-banner');

let title = document.getElementsByClassName('title');
console.log(title);

/******************************************
 *      Tutorial 3
 ******************************************/
// BY Class Name
let titles = document.getElementsByClassName('title');
console.log(titles);

console.log(titles[0]);

console.log(titles[1]);

// By Tag Name

let lis = document.getElementsByTagName('li');
console.log(lis[2]);

// Cycling with for loop
for( let i = 0; i < titles.length ; i++){
    console.log(titles[i]);
}

// Cycling with array method

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));


Array.from(titles).forEach;

/***********************************************
 *              Tutorial 4
 ***********************************************/
// The Query Selector

// $('#wrapper'); //JQuery method
let wrap = document.querySelector('#wrapper');

console.log(wrap);

let wmf = document.querySelector('#book-list li:nth-child(2) span');
console.log(wmf);

// To Select Many Not One

let books = document.querySelectorAll('#books li .name');
console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
});

/*****************************************
 *                Tutorial 5
 *****************************************/

let books2 = document.querySelectorAll('#book-list li .name');
Array.from(books2).forEach(function(book){
    console.log(book.textContent);
    book.textContent += ' (book title)';
});

let bookList = document.querySelector('#book-list');
bookList.innerHTML += '<h2>This is how we add to HTML</h2>';

/**************************************************
 *                     Tutorial 6
 **************************************************/

const  baner = document.querySelector('#page-banner');
console.log("#page banner type is:", baner.nodeType);
console.log("#page banner name is:", baner.nodeName);

console.log("#page banner has child Nodes is:", baner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

/*************************************************
 *                   Tutorial 7
 *************************************************/

const bookli = document.querySelector('#book-list');

console.log('The parent Node is: ', bookli.parentNode);
console.log('The parent Element is: ', bookli.parentElement.parentElement);

console.log(bookli.childNodes);
console.log(bookli.children);

/**********************************************
 *                  Tutorial 8
 **********************************************/

console.log('The next sibling elements are: ', bookli.nextSibling);
console.log('The next sibling elements are: ', bookli.nextElementSibling);

console.log('The previous sibling elements are: ', bookli.previousSibling);
console.log('The previous sibling elements are: ', bookli.previousElementSibling);

bookli.previousElementSibling.querySelector('p').innerHTML += '<br> <p>Too cool to be mean!</p>'