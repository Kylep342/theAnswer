(function theAnswer() {
  // custom regex beyond \W to avoid messing with hrefs in URLs
  const re = /([^a-zA-Z0-9_\/\?=])(Artificial Intelligence|AI|A\.I\.)([^a-zA-Z0-9_\/\?=])?/gi;
  document.body.innerHTML = document.body.innerHTML.replace(re, '$1Allen Iverson$3');
})()
