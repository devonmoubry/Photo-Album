function renderHome() {
  console.log('I rendered the home');
  //home-view container
  $('body').append('<div class="home-view"></div>');
  //heading My Albums
  $('.home-view').append('<h1>My Albums</h1>');
  //unordered list
  $('.home-view').append('<ul></ul>');
  //loop to put list items and onclick
  albums.forEach(function(element, index, array){
    $('ul').append('<li><a id="' + element['id'] + '" href="#"><img src="' + element['photos'][0]['url']+ '" alt="">' + element['name']+ '</a></li>');
  });
  $('.home-view a').on('click', renderAlbum);
}

function renderAlbum(clickEvent) {
  $('.home-view').remove();
  $('.album-view').remove();
  console.log('I rendered the album-view');
  // console.log(clickEvent);
  var selectedAlbum = $.grep(albums, function(album, index) {
    return album['id'] == clickEvent.target.id
  })[0];
  console.log(selectedAlbum);
  //album-view container
  $('body').append('<div class="album-view"></div>');
  //insert album title
  $('.album-view').append('<h2>' + selectedAlbum['name'] + '</h2>');
  //left side navigation bar
  $('.album-view').append('<nav class="album-nav"></nav>');
  //unordered list
  $('.album-nav').append('<ul></ul>');
  //loop to build links in album-nav
  albums.forEach(function(element, index, array){
    $('ul').append('<li id=""><a href="#" id="' +  element['id'] + '">' + element['name']+ '</a></li>');
  });
  //adding listener to album nav links
  $('.album-nav a').on('click', renderAlbum);
  //album-contents container
  $('.album-view').append('<div class="album-contents"></div>');
  //insert unordered list into container
  $('.album-contents').append('<ul></ul>');
  //insert photos into album container
  selectedAlbum['photos'].forEach(function(element, index, array){
    $('.album-contents').append('<li><a id="' + element['id'] + '" href="#"><img src="' + element['url'] + '" alt="">' + element['name']+ '</a></li>');
  });
}

function renderImage(eventClick) {
  console.log('I rendered the image!');
}

renderHome();
