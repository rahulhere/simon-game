var pattern = "";
var arry = [];
var i;

var audioGreen = new Audio("sounds/green.mp3");
var audioBlue = new Audio("sounds/blue.mp3");
var audioRed = new Audio("sounds/red.mp3");
var audioYellow = new Audio("sounds/yellow.mp3");
var audioWrong = new Audio("sounds/wrong.mp3");

audioGreen.load();
audioBlue.load();
audioRed.load();
audioYellow.load();
audioWrong.load();


$("h1").on("click", headingStarter);

function beginGame() {

  $("h1").off("click");
  createPattern();
  showPattern();
}

function createPattern() {
  this.pattern += " " + (Math.floor(Math.random() * 4) + 1);
  this.arry = pattern.split(" ");
}

function showPattern() {
  var i = 0;
  for (; i < arry.length; i++) {
    switch (arry[i]) {
      case "1":
        setTimeout(function(i) {
          $(".one").addClass("anim").delay(100).queue(function() {
            $(this).removeClass("anim").dequeue();
          });
          audioGreen.play();
        }, 700 * i);
        break;
      case "2":
        setTimeout(function(i) {
          $(".two").addClass("anim").delay(100).queue(function() {
            $(this).removeClass("anim").dequeue();
          });
          audioRed.play();
        }, 700 * i);
        break;
      case "3":
        setTimeout(function(i) {
          $(".three").addClass("anim").delay(100).queue(function() {
            $(this).removeClass("anim").dequeue();
          });
          audioYellow.play();
        }, 700 * i);
        break;
      case "4":
        setTimeout(function(i) {
          $(".four").addClass("anim").delay(100).queue(function() {
            $(this).removeClass("anim").dequeue();
          });
          audioBlue.play();
        }, 700 * i);
        break;
    }

  }

  setTimeout(function() {
    recordPattern();
  }, (700 * (i - 1) + 300));

}

function recordPattern() {

  this.i = 1;
  console.log("begun" + i + "---" + arry);

  $(".one").on("click", function() {
    $(".one").addClass("anim").delay(100).queue(function() {
      $(this).removeClass("anim").dequeue();
    });
    if (arry[i] !== ("" + 1)) {
      audioWrong.play();
      gameOver();
      return;
    }
    audioGreen.play();
    i++;
    check();
  });

  $(".two").on("click", function() {
    $(".two").addClass("anim").delay(100).queue(function() {
      $(this).removeClass("anim").dequeue();
    });
    if (arry[i] !== ("" + 2)) {
      audioWrong.play();
      gameOver();
      return;
    }
    audioRed.play();
    i++;
    check();
  });

  $(".three").on("click", function() {
    $(".three").addClass("anim").delay(100).queue(function() {
      $(this).removeClass("anim").dequeue();
    });
    if (arry[i] !== ("" + 3)) {
      audioWrong.play();
      gameOver();
      return;
    }
    audioYellow.play();
    i++;
    check();
  });

  $(".four").on("click", function() {
    $(".four").addClass("anim").delay(100).queue(function() {
      $(this).removeClass("anim").dequeue();
    });
    if (arry[i] !== ("" + 4)) {
      audioWrong.play();
      gameOver();
      return;
    }
    audioBlue.play();
    i++;
    check();
  });

}

function check() {
  if (i === arry.length) {
    showAnimatedMesssage("Level " + arry.length);
    setTimeout(function() {
      disableButtons();
      beginGame();
    }, 2000);
  }
}

function showAnimatedMesssage(message){
  $(".message").text(message);

  $(".content").addClass("blur-element");
  $(".message-container").fadeIn(1000, function() {
    $(".message-container").fadeOut(1000, function() {
      $(".content").removeClass("blur-element");
    });
  });

  // will be in action for 2 sec so be sure to use timeout for functions called after it.

}

function disableButtons() {
  $(".one").off("click");
  $(".two").off("click");
  $(".three").off("click");
  $(".four").off("click");
}

function gameOver() {

  disableButtons();
  pattern = "";
  arry = [];

showAnimatedMesssage("Game Over!");
setTimeout(function() {
  $("h1").fadeOut(300).fadeIn(500);
  setTimeout(function() {
    $("h1").text("Press here to play again!");
  }, 300);

  $("h1").on("click", headingStarter);
}, 2000);

}

function headingStarter() {
showAnimatedMesssage("Level 1");
  setTimeout(function() {
    $("h1").addClass("headingAnim").delay(100).queue(function() {
      $(this).removeClass("headingAnim").dequeue();
      $("h1").fadeOut(300).fadeIn(500);
      setTimeout(function() {
        $("h1").text("Game is on Baby!");
        beginGame();
      }, 300);
    });
  }, 2000);
}
