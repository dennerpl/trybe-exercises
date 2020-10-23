const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      };

      fetch(API_URL, myObject)
      .then(response => response.json())
      .then(data => {
          const joke = data.joke
          const container = document.getElementById('jokeContainer')
          container.innerHTML = joke
      });
};

window.onload = () => fetchJoke();