 const fetch = require('node-fetch');

 const getRepos = (url) => {
   return fetch(url)
     .then(response => response.json())
     .then((data) => {
       return data.map((repo) => repo.name)
     });
 }

 test('', (done) => {
   getRepos('https://api.github.com/users/tryber/repos').then(result => {
     expect(result).toContain('sd-01-week4-5-project-todo-list' && 'sd-01-week4-5-project-meme-generator');
   })
   done();
 })