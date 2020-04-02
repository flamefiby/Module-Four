// JavaScript Document

// set the json url
let url = 'https://flamefiby.github.io/Module-Four/package.json';
// select section
let section = document.querySelector('section');

// using fetch to get the json file in the network
fetch(url).then(function(response){
    // return the json data
    return response.json();
    }).then(function(products) {
        // using a for loop to attend each product in the json file
        for (let i = 0; i < products.strangeProducts.length; i++) {

            //build HTML elements
            let article = document.createElement('article');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let p1 = document.createElement('p1');
            let p2 = document.createElement('p2');
            let ul = document.createElement('ul');
            // set the img source and name
            img.setAttribute('src',
                'https://flamefiby.github.io/Module-Four/img/' + products.strangeProducts[i].image);
            img.setAttribute('alt', products.strangeProducts[i].image);
            // given the name, price, and details to each product
            h2.textContent = products.strangeProducts[i].name;
            p1.textContent = 'Price, ' + products.strangeProducts[i].price;
            p2.textContent = 'details, ' + products.strangeProducts[i].details;
            // append each product
            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p1);
            article.appendChild(p2);
            section.appendChild(article);

        }
});















