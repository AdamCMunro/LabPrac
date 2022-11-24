function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

document.getElementById('searchButton').addEventListener('click', movieSearch)

function movieSearch() {
  document.getElementById('Movies').innerHTML = "";

  input = document.getElementById('input').value;
  console.log(input);
  const searched = input.toString().split(" ");
  var searchTerm = searched[0];
  for (let i = 1; i < searched.length; i++) {
    var searchTerm = searchTerm + "+" + searched[i];
  }

  const div = document.getElementById('Movies');
  var url = 'https://www.omdbapi.com/?s=' + searchTerm + '&apikey=848329f5';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let movies = data.Search;
      return movies.map(function (movies) {
        var img = createNode('img');
        var h5 = createNode('h5');
        var p = createNode('p');
        var column = createNode('div');
        var card = createNode('div');
        var button = createNode('a');

        card.classList.add('card');
        card.classList.add('h-100');
        card.classList.add('mt-2');

        var cardBody = createNode('div');

        cardBody.classList.add('card-body');
        cardBody.classList.add('d-flex');
        cardBody.classList.add('flex-column');
        column.classList.add('col-4');
        img.src = movies.Poster;
        img.classList.add('card-img-top');
        h5.innerHTML = movies.Title + " (" + movies.Year + ")";
        h5.classList.add('card-title');
        p.innerHTML = movies.Type + " IMDB: " + movies.imdbID;
        p.classList.add('card-text');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('align-self-end');
        button.classList.add('mt-auto');
        button.href = ('singleMovie.html?' + movies.imdbID);
        button.innerHTML = ('More Info');

        append(card, img);
        append(cardBody, h5);
        append(cardBody, h5);
        append(cardBody, p);
        append(cardBody, button);
        append(card, cardBody);

        append(column, card);
        append(div, column);

        const movieUrl = "https://www.omdbapi.com/?i=" + movies.imdbID + "&apikey=848329f5";
        console.log(movieUrl);

      })
    })
    .catch(function (error) {
      console.log(error);
    });
};

