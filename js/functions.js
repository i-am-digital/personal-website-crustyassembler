function setTitle() {
  url = window.location.pathname;
  if(url === '/')
    url = url + 'index.html';
  fn = capitalise(
    url.substr(url.lastIndexOf('/') + 1, url.lastIndexOf('.') - 1)
  );
  document.title = document.title + ' || ' + fn;
}

function capitalise(str) {
  if(str.split(' ').length > 1) {
    str = str.split(' ');
    for(var i in str) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    str = str.join(' ');
  } else {
    str = str[0].toUpperCase() + str.substr(1); 
  }
  return str;
}

$(document).ready(function() {
  setTitle();
});
