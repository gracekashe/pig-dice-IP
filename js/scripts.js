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
Player.prototype.rollOne = function() {
  if (this.roll == 1) {
    this.tempscore = 0;
    alert("sorry" + this.playerName + ", you rolled a one it,s your partners turn");
  } else {
    this.tempscore = this.tempscore + this.roll;
  }
}
//hold//
Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;

  alert(this.playerName + ", next player");
  // this.changeturn();

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
  $("#p1").val("");
  $("#p2").val("");
}

//user int//
$(document).ready(function() {

  $("#begin").click(function(event) {
    event.preventDefault();
    player1 = new Player(true);
    player2 = new Player(false);
    $("#player-player").show();
    $(".players").hide();

    var player1Name = $("#p1").val();
    $("#player1name").text(player1Name);

    var player2Name = $("#p2").val();
    $("#player2name").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;
  });
  $("#button#newGame").click(function(event) {
    event.preventDefault();
    $("#player-player").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $(".round-trial-1").empty();
    $(".total-1").empty();
    $(".diceroll-1").empty();
    $(".round-trial-2").empty();
    $(".total-2").empty();
    $(".diceroll-2").empty();

    $("#players").show();
  });

  $("button#play1").click(function(event) {
    event.preventDefault();
    player1.roll = throwdice();
    $(".diceroll-1").text(player1.roll);
    player1.rollOne();
    $(".round-trial-1").text(player1.tempscore);
  });
  $("button#play2").click(function(event) {
    event.preventDefault();
    player2.roll = throwdice();
    $(".diceroll-2").text(player2.roll);
    player2.rollOne();
    $(".round-trial-2").text(player2.tempscore);
  });
  $("button#play1-hold").click(function(event) {
    event.preventDefault();
    player1.hold();
    $(".total-1").text(player1.totalscore)
    $(".round-trial-1").empty();
    $(".diceroll-1").empty();
    player1.winnerCheck();
  });
  $("button#play2-hold").click(function(event) {
    event.preventDefault();
    player2.hold();
    $(".total-2").text(player2.totalscore)
    $(".round-trial-2").empty();
    $(".diceroll-2").empty();
    player2.winnerCheck();
  });
});
