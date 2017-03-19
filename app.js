function renderHome() {
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

// albums.forEach(function( value, index, array){
//   $('.album-contents').prepend('<img src="" alt="">');
//   $('.album-contents').attr('alt', albums[index]['name'])
//   $('.album-contents img').attr('src', albums[index]['photos'][0]['url']);
// }, this);
//
// <div class="photo-view">
//
//   <nav class="photo-nav">
//
//   </nav>
//
//   <h3 id="photo-title"></h3>
//
//   <div class="photo-contents">
//
//   </div>
//
// </div>

//nav bar
// albums.forEach(function(value, key, array, argument) {
//     $('nav.album-nav').append('<a id="albumNav' + key + '" href="#"></a>');
//     $('nav.album-nav a#albumNav' + key).text(albums[key]['name']);
//   });
//
// //album view need to fix syntax
// albums.forEach(function(value, key, array, argument) {
//   $('.album-contents').append('<img id="img' + key + '" src="" alt="">');
//   $('.album-contents img#img' + key).attr('src', albums['photos']['url']); //why doesn't this work?
//   //$('.album-contents img').add(albums[key]['photos']['id']);
//   });
//
function renderAlbum(clickEvent) {
  $('.home-view').remove();
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
  //loop to build photos in album
  albums.forEach(function(element, index, array){
    $('ul').append('<li id=""><a href="#">' + element['name']+ '</a></li>');
  });
  $('.album-nav a').on('click', renderImage);

// //show album# selected in nav
// //display photo thumbnails "links" to photo view
// //forEach name generate a div with class-name album

//   <div class="album-contents">
//
//   </div>
//
//
}
// //for each album page 1,2,3,4,5,6
// //i need to create a left side nav bar album 1, album 2, album 3, album 4, album 5, album 6
// //title
// //populate 3 images with caption img photo 1, img photo 2, img photo 3
//
function renderImage(eventClick) {
  console.log('I rendered the image!');
}

renderHome();
