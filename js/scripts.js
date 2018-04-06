//business logic//
var player1 = ""
var player2 = ""

var throwdice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
Player.prototype.rollone = function() {
  if (this.roll == 1) {
    this.tempscore = 0;
    alert("sorry" + this.playerName + "you rolled a one it,s your partners turn");
  } else {
    this.tempscore += this.roll;
  }
}
//hold//
Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  //this.changeturn();
  alert(this.playerName + ",next player");
}

Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert(this.playerName + "you won!!");
  }
}
Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName = "";
}
var clearValues = function() {
  $("#player1").val("");
  $("#player2").val("");
}

//user int//
$(document).ready(function() {

  $("#begin").click(function(event) {
    event.preventDefault();
    player1 = new Player(true);
    player2 = new Player(false);
    $("#player-player").show();
    $("#players").hide();
    var player1Name = $("#player1name").val();
    $("#player1").text(player1Name);

    var player2Name = $("#player2name").val();
    $("#player2").text(player2Name);

    player1.playername = player1Name;
    player2.playername = player2Name;
  });
  $("#button#newGame").click(function(event) {
    $("#player-player").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $(".round-trial-1").empty();
    $(".total-1").empty();
    $("..diceroll-1").empty();
    $(".round-trial-2").empty();
    $(".total-2").empty();
    $(".diceroll-2").empty();

    // $(".intro-menu")
  });

  $("button#play1").click(function(event) {
    player1.roll = throwdice();
    $(".diceroll-1").text(player1.roll);
    player1.rollone();
    $(".round-trial-1").text(player1.tempscore);
  });
  $("button#play2").click(function(event) {
    player2.roll = throwdice();
    $(".diceroll-2").text(player2.roll);
    player2.rollone();
    $(".round-trial-2").text(player2.tempscore);
  });
  $("button#play1-hold").click(function(event) {
    $(".total-1").text(player1.totalscore)
    $(".round-trial-1").empty();
    $(".diceroll-1").empty();
  });
  $("button#play2-hold").click(function(event) {
    $(".total-2").text(player2.totalscore)
    $(".round-trial-2").empty();
    $(".diceroll-2").empty();
  });
});
