const { search, url } = require('pull-flickr')({ api_key: 'ca43d47b18b91ff639c9628f9cf828cd' });
const { pull, map, log, drain, take, collect, onEnd } = require('pull-stream');
const fromPromise = require('pull-promise');
const { event } = require('pull-event');

function main() {
  const { resultsContainer, searchContainer, searchInput } = initUI();

  pull(
    event({ target: searchInput, event: 'change' }),
    map(event => event.target.value),
    drain(searchTerm => searchFor(searchTerm))
  );

  function searchFor(term) {
    searchContainer.classList.add('loading');
    resultsContainer.innerHTML = '';

    pull(
      search(term),
      map(result => url('small square', result)),
      take(200),
      map(url => loadAndAddImage(url)),
      // drain(promise => console.log(promise))
      collect((err, promises) => {
        console.log(arguments);
        Promise.all(promises).then(() => {
          searchContainer.classList.remove('loading');
        });
      })
    );
  }

  function loadAndAddImage(url) {
    return new Promise(resolve => {
      const image = document.createElement('img');
      image.src = url;
      image.onload = () => {
        resultsContainer.appendChild(image);
        resolve();
      }
    });
  }

  searchInput.focus();
}

function initUI() {
  return {
    resultsContainer: document.body.querySelector('.results'),
    searchContainer: document.body.querySelector('.search'),
    searchInput: document.body.querySelector('.search input')
  };
}

window.addEventListener('DOMContentLoaded', () => main());
