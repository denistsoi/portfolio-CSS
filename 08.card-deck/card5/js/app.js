$(document).ready(function(){
  $('.card').slice(0,13).addClass("club");
  $('.card').slice(26,39).addClass("spade");
    //var random = Math.ceil(Math.random()*52);
    var random = Math.ceil(Math.random()*13);
    var rank = random%13;
    //var suit = random%4;

    if(rank%13==1){
     rank = "A";
    } else if (rank%13===11){
     rank = "J";
    } else if (rank%13===12){
      rank = "Q";
    } else if (rank%13===0){
      rank = "K";
    } else {
      rank = rank%13;
    }

  // if (suit%4==0){
//     suit = "hearts";
//     } else if (suit%4==1){
//     suit = "clubs";
//     } else if (suit%4==2){
//     suit = "diamonds";
//     } else {
//     suit = "spades";
//     }
//     var match1 = rank+" "+suit;

//    $("h1").text(match1);
      $("h1").text(rank);

  $(".table").mousemove(function(event){
    var position = $(this).position();

    console.log(event.pageX-position.left-40);
  });
});

