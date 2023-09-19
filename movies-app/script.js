"use strict";

$('.movie-form').on('submit', function(evt){
  evt.preventDefault();
  const title = $('#title-input').val()
  const rating = $('#rating-input').val()


  $('.movie-list')
    .append(
      `<div class="movie"> Title: ${title} Rating: ${rating}
        <button class="remove-button">Remove</button>
       </div>`)

  $('#title-input').val('');
  $('#rating-input').val('');

  $('.movie').on('click','.remove-button', function(evt){
    $(evt.target).parent().remove()
  })
})

$('#sort-order').on('change', function(){
  const currentSort = $('#sort-order').val();
  //console.log(currentSort)
  const movieList = $.makeArray($('.movie'));
  console.log(movieList);
  if(currentSort === "movieRating"){
    movieList.sort();
  }
})



