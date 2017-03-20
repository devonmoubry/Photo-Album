function removeAllViews() {
  $('.home-view').remove();
  $('.album-view').remove();
  $('.photo-view').remove();
  $('body').css('background-color', 'white');
}

function renderHome() {
  removeAllViews();

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
  removeAllViews();

  var selectedAlbum = $.grep(albums, function(album, index) {
    return album['id'] == clickEvent.target.id
  })[0];
  //album-view container
  $('body').append('<div class="album-view"></div>');
  //insert album title
  $('.album-view').append('<h2>' + selectedAlbum['name'] + '</h2>');
  //left side navigation bar
  $('.album-view').append('<nav class="album-nav"></nav>');
  //unordered list
  $('.album-nav').append('<ul></ul>');
  //loop to build links in album-nav
  albums.forEach(function(album, index, array){
    if ( album['id'] === clickEvent.target.id ) {
      $('.album-nav ul').append('<li id=""><a href="#" class="selected" id="' +  album['id'] + '">' + album['name']+ '</a></li>');
    } else {
      $('.album-nav ul').append('<li id=""><a href="#" id="' +  album['id'] + '">' + album['name']+ '</a></li>');
    }
  });
  //adding listener to album nav links
  $('.album-nav a').on('click', renderAlbum);
  //album-contents container
  $('.album-view').append('<div class="album-contents"></div>');
  //insert unordered list into container
  $('.album-contents').append('<ul></ul>');
  //insert photos into album container
  selectedAlbum['photos'].forEach(function(element, index, array){
    $('.album-contents ul').append('<li><a id="' + element['id'] + '" href="#"><img src="' + element['url'] + '" alt="">' + element['name']+ '</a></li>');
  });
  $('.album-contents a').on('click', renderImage);
}

function findPhoto(photoId) {
  var selectedPhoto;
  albums.forEach(function (album, index, array){
    album['photos'].forEach(function(photo, index, array){
      if ( photo['id'] == photoId ) {
        selectedPhoto = photo;
      }
    });
  });
  return selectedPhoto;
}

function renderImage(clickEvent) {
  removeAllViews();
  $('body').css('background-color', 'black');
  var selectedPhoto = findPhoto(clickEvent.target.id);

  $('body').append('<div class="photo-view"></div>')
  $('.photo-view').append('<h2>' + selectedPhoto['name'] + '</h2>');
  $('.photo-view').append('<a id="' + selectedPhoto['album'] + '" href="#"> Back to ' + selectedPhoto['album'] + '</a>');
  $('.photo-view a').on('click', renderAlbum);
  $('.photo-view').append('<img src="' + selectedPhoto['url'] + '" alt="">')
}

renderHome();
