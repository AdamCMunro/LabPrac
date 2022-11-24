function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const div = document.getElementById('SMovie');
const currentUrl = window.location.search;
var searchString = currentUrl.split('?');
searchString = searchString[1]
url = "https://www.omdbapi.com/?i=" + searchString + "&apikey=848329f5";
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        var col1 = createNode('div');
        var col2 = createNode('div');
        var h1 = createNode('h1');
        var h2 = createNode('h2');
        var p = createNode('p');
        var ul = createNode('ul');
        var li1 = createNode('li');
        var li2 = createNode('li');
        var li3 = createNode('li');
        var img = createNode('img');
        var button = createNode('a');

        ul.classList.add('list-unstyled');
        col1.classList.add('col-4');
        col1.classList.add('mt-4');
        col2.classList.add('mt-4');
        col2.classList.add('col-8');
        button.classList.add('btn');
        button.classList.add('btn-secondary');
        img.classList.add('img-fluid');

        h1.innerHTML = (data.Title);
        h2.innerHTML = (data.Released);
        p.innerHTML = (data.Plot);
        li3.innerHTML = ('<strong>Rating:</strong> ' + data.imdbRating);
        li1.innerHTML = ('<strong>Starring:</strong> ' + data.Actors);
        li2.innerHTML = ('<strong>Director:</strong> ' + data.Director);
        img.src = data.Poster;
        button.href = ('week9.html');
        button.innerHTML = ('Go Back');

        append(col1, img);
        append(col2, h1);
        append(col2, h2);
        append(col2, p);
        append(col2, ul);
        append(col2, button);
        append(ul, li1);
        append(ul, li2);
        append(ul, li3);
        append(div, col1);
        append(div, col2);
    })
    .catch(function (error) {
        console.log(error);
    });