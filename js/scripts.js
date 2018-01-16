$(document).ready(function(){
  $("#arrayForm").submit(function (event){

    var favorites = [$("input#food").val(), $("input#book").val(), $("input#color").val(), $("input#animal").val(), $("input#language").val()];

    console.log(favorites);

    var someFavorites = [];
    someFavorites.push(favorites[2],favorites[1],favorites[3]);
    console.log(someFavorites);

      someFavorites.forEach(function(favorite) {
        $("#list").append("<li>" + favorite + "</li>");
      });
    // $("#list").append("<li>" + someFavorites[0] + "</li>");
    // $("#list").append("<li>" + someFavorites[1] + "</li>");
    // $("#list").append("<li>" + someFavorites[2] + "</li>");

  event.preventDefault();
  });
});
