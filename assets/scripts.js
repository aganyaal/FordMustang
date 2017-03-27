//Match Sim
function simMatch(){
 var goals = 0;
 goals = 1 + Math.floor(Math.random()*6);
 return goals;
};

//Progress bar
function move() {
  var elem = document.getElementById("myBar");
  var width = 10;
  var id = setInterval(frame, 1000);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}


    function Manager(name,team,wins,draws,losses) {
      this.name=name;
      this.team=team;
      this.wins=wins;
      this.draws=draws;
      this.losses=losses;
    }


    // Teams constructor
    function Teams(name, nickname, homeTown, stadium, stadiumCapacity, est) {
      this.name = name;
      this.nickname = nickname;
      this.homeTown = homeTown;
      this.stadium = stadium;
      this.stadiumCapacity = stadiumCapacity;
      this.est = est;
      this.players = [];
    }

    // Player constructor
    function Player(firstName, lastName, shirtNumber, rating, position) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.shirtNumber = shirtNumber;
      this.rating = rating;
      this.position = position;
    }

    //The teams.
    var Liverfools = new Teams("Liverfools", "LVP", "Nairobi", "Anfeeld", "50000", "1900");
    var Mansixty = new Teams("Mansixty", "MCI", "Bombolulu", "Mancheter", "150000", "1950");
    var Borneye = new Teams("Borneye", "BNE", "Tomerlane", "Goodinson", "60000", "1905");
    var Centresborough = new Teams("Centresborough", "CBR", "Shiretown", "Riverside", "70000", "1890");
    var Moonderland = new Teams("Moonderland", "MND", "Fjorm", "Despot", "50000", "1907");
    var Chiniventus = new Teams("Chiniventus", "CHV", "Roma", "Kasarani", "150000", "1889");
    var WorldXI = new Teams("WorldXI", "WXI", "Geneva", "Geneva", "100000", "1923");
    var Fakemadrid = new Teams("Fakemadrid", "FMD", "Madrida", "CampOld", "90000", "1925");
    var Barceloaner = new Teams("Barceloaner", "BCL", "Switzerland", "Barnabeu", "160000", "1911");
    var Arsefourl = new Teams("Arsefourl", "ARS", "Fordsdale", "A-mirets", "30000", "1914");

    // The players.(11 per team)
    var Player1 = new Player("Abdul", "Faruk", "01", 77, "GK");
    var Player2 = new Player("Barry", "Arreola", "10", 77, "DEF");
    var Player3 = new Player("Adrian", "Armstead", "09", 73, "DEF");
    var Player4 = new Player("Boris", "Acosta", "08", 77, "DEF");
    var Player5 = new Player("Bryant", "Easley", "07", 75, "DEF");
    var Player6 = new Player("Carlo", "Escobar", "06", 84, "DEF");
    var Player7 = new Player("Cole", "Finnegan", "05", 72, "MID");
    var Player8 = new Player("Clarence", "Fitzgerald", "04", 75, "MID");
    var Player9 = new Player("Gerardo", "Giles", "03", 59, "MID");
    var Player10 = new Player("Deangelo", "Gallardo", "02", 87, "ATT");
    var Player11 = new Player("Donald", "Green", "11", 83, "ATT");
    var Player12 = new Player("Donovan", "Hay", "01", 59, "GK");
    var Player13 = new Player("Quintin", "Hollis", "10", 79, "DEF");
    var Player14 = new Player("Mckinley", "Holiday", "09", 81, "DEF");
    var Player15 = new Player("Grover", "Isaacs", "08", 77, "DEF");
    var Player16 = new Player("Hyman", "Ivory", "07", 65, "MID");
    var Player17 = new Player("Maximo", "Jessup", "06", 81, "MID");
    var Player18 = new Player("Edmund", "Jordon", "05", 79, "MID");
    var Player19 = new Player("Esteban", "Kasper", "04", 77, "MID");
    var Player20 = new Player("Mohamed", "Ali", "03", 65, "MID");
    var Player21 = new Player("John", "Knoll", "02", 77, "ATT");
    var Player22 = new Player("Emmett", "Lockhart", "11", 72, "ATT");
    var Player23 = new Player("John", "Livingston", "01", 83, "GK");
    var Player24 = new Player("Lai", "Chang", "10", 80, "DEF");
    var Player25 = new Player("Harvey", "Doe", "09", 79, "DEF");
    var Player26 = new Player("John", "Melvin", "08", 77, "DEF");
    var Player27 = new Player("Hilario", "Jesus", "07", 84, "DEF");
    var Player28 = new Player("John", "Mcclendon", "06", 77, "MID");
    var Player29 = new Player("Hugh", "Norman", "05", 77, "MID");
    var Player30 = new Player("Emmanuel", "Nettles", "04", 77, "MID");
    var Player31 = new Player("Eli", "Neal", "03", 77, "MID");
    var Player32 = new Player("Federico", "Ortega", "02", 82, "ATT");
    var Player33 = new Player("John", "Oshea", "11", 83, "ATT");
    var Player34 = new Player("Francisco", "Olivares", "01", 83, "GK");
    var Player35 = new Player("Omar", "Salim", "10", 83, "DEF");
    var Player36 = new Player("Otto", "Pacheco", "09", 82, "DEF");
    var Player37 = new Player("John", "Polanco", "08", 77, "DEF");
    var Player38 = new Player("Jeffrey", "Perales", "07", 77, "DEF");
    var Player39 = new Player("Jere", "Reno", "06", 80, "MID");
    var Player40 = new Player("Jonas", "Quintero", "05", 81, "MID");
    var Player41 = new Player("Jorge", "Quick", "04", 84, "MID");
    var Player42 = new Player("JohMackn", "Ricci", "03", 78, "MID");
    var Player43 = new Player("Mack", "Romano", "02", 59, "MID");
    var Player44 = new Player("John", "Romano", "11", 78, "ATT");
    var Player45 = new Player("Morton", "Shea", "01", 72, "GK");
    var Player46 = new Player("Maynard", "Taft", "10", 89, "DEF");
    var Player47 = new Player("Rickey", "Salgado", "09", 79, "DEF");
    var Player48 = new Player("Ulysses", "Salazar", "08", 59, "DEF");
    var Player49 = new Player("Romeo", "Thorton", "07", 83, "DEF");
    var Player50 = new Player("Riley", "Travis", "06", 84, "DEF");
    var Player51 = new Player("John", "Trejo", "05", 87, "MID");
    var Player52 = new Player("Valentine", "Tanner", "04", 72, "MID");
    var Player53 = new Player("John", "Talley", "03", 79, "MID");
    var Player54 = new Player("Vito", "Corleone", "02", 77, "ATT");
    var Player55 = new Player("Kerry", "Upton", "11", 77, "ATT");
    var Player56 = new Player("John", "Urban", "01", 83, "GK");
    var Player57 = new Player("JoKerryhn", "Uribe", '10', 73, "DEF");
    var Player58 = new Player("Kieth", "Varner", "09", 77, "DEF");
    var Player59 = new Player("Garry", "Neville", "08", 77, "DEF");
    var Player60 = new Player("Norris", "Vela", "07", 89, "MID");
    var Player61 = new Player("John", "Van", "06", 80, "MID");
    var Player62 = new Player("Noble", "Ventura", "05", 77, "MID");
    var Player63 = new Player("Zachary", "Vickers", "04", 75, "MID");
    var Player64 = new Player("Wesley", "Voss", "03", 75, "ATT");
    var Player65 = new Player("John", "Vue", "02", 77, "ATT");
    var Player66 = new Player("Wilfredo", "Olivas", "11", 77, "ATT");
    var Player67 = new Player("John", "Willingham", "01", 84, "GK");
    var Player68 = new Player("Wyatt", "Young", "10", 75, "DEF");
    var Player69 = new Player("Wilton", "Xiong", "09", 79, "DEF");
    var Player70 = new Player("Wendell", "Yoder", "08", 83, "DEF");
    var Player71 = new Player("Irvin", "Zimmerman", "07", 73, "DEF");
    var Player72 = new Player("Issac", "Ziegler", "06", 77, "MID");
    var Player73 = new Player("Lesley", "Merritt", "05", 84, "MID");
    var Player74 = new Player("John", "Messina", "04", 77, "MID");
    var Player75 = new Player("Louie", "Madsen", "03", 77, "MID");
    var Player76 = new Player("John", "Michaels", "02", 89, "ATT");
    var Player77 = new Player("Lincoln", "Devore", "11", 87, "ATT");
    var Player78 = new Player("Leandro", "Doyle", "01", 77, "GK");
    var Player79 = new Player("John", "Draper", "10", 72, "DEF");
    var Player80 = new Player("Earl", "Howland", "09", 81, "DEF");
    var Player81 = new Player("Eugenio", "Hernandez", 08, "65", "DEF");
    var Player82 = new Player("Emmett", "Hanes", "07", 65, "MID");
    var Player83 = new Player("John", "Howard", "06", 77, "MID");
    var Player84 = new Player("Damien", "Hoyle", "05", 77, "MID");
    var Player85 = new Player("John", "Hammond", "04", 77, "MID");
    var Player86 = new Player("Demarcus", "Hoskins", "03", 65, "MID");
    var Player87 = new Player("Ezra", "Mijrimba", "02", 59, "ATT");
    var Player88 = new Player("Guy", "Eller", "11", 80, "ATT");
    var Player89 = new Player("John", "Escamilla", "01", 77, "GK");
    var Player90 = new Player("JoGuyn", "Emanuel", "10", 77, "DEF");
    var Player91 = new Player("Donovan", "Emery", "09", 79, "DEF");
    var Player92 = new Player("Darell", "Espinosa", "08", 59, "DEF");
    var Player93 = new Player("Kristopher", "Plunkett", "07", 83, "DEF");
    var Player94 = new Player("King", "Paine", "06", 77, "MID");
    var Player95 = new Player("Jeremy", "Perales", "05", 82, "MID");
    var Player96 = new Player("Jordon", "Palmer", "04", 72, "MID");
    var Player97 = new Player("Kyle", "Mccarty", "03", 84, "MID");
    var Player98 = new Player("Jordon", "Macklin", "02", 81, "ATT");
    var Player99 = new Player("John", "Metz", "11", 78, "ATT");
    var Player100 = new Player("Preston", "Mccloskey", "01", 77, "GK");
    var Player101 = new Player("Leroy", "Macias", "10", 77, "DEF");
    var Player102 = new Player("Peter", "Merrill", "09", 77, "DEF");
    var Player103 = new Player("Omer", "Epps", "08", 80, "DEF");
    var Player104 = new Player("John", "Mahoney", "07", 78, "DEF");
    var Player105 = new Player("Victor", "Oswald", "06", 77, "MID");
    var Player106 = new Player("Shannon", "Osorio", "05", 78, "MID");
    var Player107 = new Player("Tomas", "Oates", "04", 75, "MID");
    var Player108 = new Player("John", "Osborn", "03", 77, "ATT");
    var Player109 = new Player("Rob", "Reyna", "02", 82, "ATT");
    var Player110 = new Player("Roy", "Doe", "11", 77, "ATT");

    // Adding players to teams
    Liverfools.players.push(Player1, Player2, Player3, Player4, Player5, Player6, Player7, Player8, Player9, Player10, Player11);
    Mansixty.players.push(Player12, Player13, Player14, Player15, Player16, Player17, Player18, Player19, Player20, Player21, Player22);
    Borneye.players.push(Player23, Player24, Player25, Player26, Player27, Player28, Player29, Player30, Player31, Player32, Player33);
    Centresborough.players.push(Player34, Player35, Player36, Player37, Player38, Player39, Player40, Player41, Player42, Player43, Player44);
    Moonderland.players.push(Player45, Player46, Player47, Player48, Player49, Player50, Player51, Player52, Player53, Player54, Player55);
    Chiniventus.players.push(Player56, Player57, Player58, Player59, Player60, Player61, Player62, Player63, Player64, Player65, Player66);
    WorldXI.players.push(Player67, Player68, Player69, Player70, Player71, Player72, Player73, Player74, Player75, Player76, Player77);
    Fakemadrid.players.push(Player78, Player79, Player80, Player81, Player82, Player83, Player84, Player85, Player86, Player87, Player88);
    Barceloaner.players.push(Player89, Player90, Player91, Player92, Player93, Player94, Player95, Player96, Player97, Player98, Player99);
    Arsefourl.players.push(Player100, Player101, Player102, Player103, Player104, Player105, Player106, Player107, Player108, Player109, Player110);


$(document).ready(function () {
  $("#form-login").submit(function (event) {
    event.preventDefault();
    $("#login").fadeOut(2000);
    $("#pickTeam").delay(1000).fadeIn(2000);
  });
  $("#liverfools").click(function () {
    $("#team-name").text(Liverfools.name);
    $("#nickname").text(Liverfools.nickname);
    $("#home-town").text(Liverfools.homeTown);
    $("#stadium").text(Liverfools.stadium);
    $("#capacity").text(Liverfools.stadiumCapacity);
    $("#established").text(Liverfools.est);
    $("#join").show();
    $("#join").click(function () {
      $("#managername").text($("#Name").val());
      var user = new Manager($("#Name").val(),Liverfools,0,0,0);
      $("#pickTeam").fadeOut(2000);
      $(".content").delay(2000).fadeIn(2000);
      $("#intro1").delay(3000).fadeIn(2000);
      $("#intro1").delay(1000).fadeOut(2000);
      $("#intro2").delay(9000).fadeIn(2000);
      $("#intro2").delay(2000).fadeOut(2000);
      $("#intro3").delay(15000).fadeIn(2000);
      $("#intro3").delay(2000).fadeOut(2000);
      $("#intro4").delay(18000).fadeIn(2000);
      $("#intro4").delay(6000).fadeOut(2000);
      $("#intro5").delay(28000).fadeIn(2000);
      $("#intro5").delay(5000).fadeOut(2000);
      $("#home").delay(37000).fadeIn(2000);
      $("#myName").text(user.name);
      $("#teamName").text(user.team.name);
      for (var i = 0; i <11; i++) {
        $("#lineup").append("<li>"+user.team.players[i].firstName+" "+user.team.players[i].lastName+"</li>")
        }
    });
  });

  $("#arsefourl").click(function () {
    $("#team-name").text(Arsefourl.name);
    $("#nickname").text(Arsefourl.nickname);
    $("#home-town").text(Arsefourl.homeTown);
    $("#stadium").text(Arsefourl.stadium);
    $("#capacity").text(Arsefourl.stadiumCapacity);
    $("#established").text(Arsefourl.est);
    $("#join").show();
    $("#join").click(function () {
      $("#managername").text($("#Name").val());
      var user = new Manager($("#Name").val(),Arsefourl,0,0,0);
      $("#pickTeam").fadeOut(2000);
      $(".content").delay(2000).fadeIn(2000);
      $("#intro1").delay(3000).fadeIn(2000);
      $("#intro1").delay(1000).fadeOut(2000);
      $("#intro2").delay(9000).fadeIn(2000);
      $("#intro2").delay(2000).fadeOut(2000);
      $("#intro3").delay(15000).fadeIn(2000);
      $("#intro3").delay(2000).fadeOut(2000);
      $("#intro4").delay(18000).fadeIn(2000);
      $("#intro4").delay(6000).fadeOut(2000);
      $("#intro5").delay(28000).fadeIn(2000);
      $("#intro5").delay(5000).fadeOut(2000);
      $("#home").delay(37000).fadeIn(2000);
      $("#myName").text(user.name);
      $("#teamName").text(user.team.name);
      for (var i = 0; i <11; i++) {
        $("#lineup").append("<li>"+user.team.players[i].firstName+" "+user.team.players[i].lastName+"</li>")
        }
    });
  });
  $("#mansixty").click(function () {
    $("#team-name").text(Mansixty.name);
    $("#nickname").text(Mansixty.nickname);
    $("#home-town").text(Mansixty.homeTown);
    $("#stadium").text(Mansixty.stadium);
    $("#capacity").text(Mansixty.stadiumCapacity);
    $("#established").text(Mansixty.est);
    $("#join").show();
    $("#join").click(function () {
      $("#managername").text($("#Name").val());
      var user = new Manager($("#Name").val(),Mansixty,0,0,0);
      $("#pickTeam").fadeOut(2000);
      $(".content").delay(2000).fadeIn(2000);
      $("#intro1").delay(3000).fadeIn(2000);
      $("#intro1").delay(1000).fadeOut(2000);
      $("#intro2").delay(9000).fadeIn(2000);
      $("#intro2").delay(2000).fadeOut(2000);
      $("#intro3").delay(15000).fadeIn(2000);
      $("#intro3").delay(2000).fadeOut(2000);
      $("#intro4").delay(18000).fadeIn(2000);
      $("#intro4").delay(6000).fadeOut(2000);
      $("#intro5").delay(28000).fadeIn(2000);
      $("#intro5").delay(5000).fadeOut(2000);
      $("#home").delay(37000).fadeIn(2000);
      $("#myName").text(user.name);
      $("#teamName").text(user.team.name);
      for (var i = 0; i <11; i++) {
        $("#lineup").append("<li>"+user.team.players[i].firstName+" "+user.team.players[i].lastName+"</li>")
        }
    });
  });
  $("#borneye").click(function () {
    $("#team-name").text(Borneye.name);
    $("#nickname").text(Borneye.nickname);
    $("#home-town").text(Borneye.homeTown);
    $("#stadium").text(Borneye.stadium);
    $("#capacity").text(Borneye.stadiumCapacity);
    $("#established").text(Borneye.est);
    $("#join").show();
    $("#join").click(function () {
      $("#managername").text($("#Name").val());
      var user = new Manager($("#Name").val(),Borneye,0,0,0);
      $("#pickTeam").fadeOut(2000);
      $(".content").delay(2000).fadeIn(2000);
      $("#intro1").delay(3000).fadeIn(2000);
      $("#intro1").delay(1000).fadeOut(2000);
      $("#intro2").delay(9000).fadeIn(2000);
      $("#intro2").delay(2000).fadeOut(2000);
      $("#intro3").delay(15000).fadeIn(2000);
      $("#intro3").delay(2000).fadeOut(2000);
      $("#intro4").delay(18000).fadeIn(2000);
      $("#intro4").delay(6000).fadeOut(2000);
      $("#intro5").delay(28000).fadeIn(2000);
      $("#intro5").delay(5000).fadeOut(2000);
      $("#home").delay(37000).fadeIn(2000);
      $("#myName").text(user.name);
      $("#teamName").text(user.team.name);
      for (var i = 0; i <11; i++) {
        $("#lineup").append("<li>"+user.team.players[i].firstName+" "+user.team.players[i].lastName+"</li>")
        }
    });
  });
  $("#centresborough").click(function () {
    $("#team-name").text(Centresborough.name);
    $("#nickname").text(Centresborough.nickname);
    $("#home-town").text(Centresborough.homeTown);
    $("#stadium").text(Centresborough.stadium);
    $("#capacity").text(Centresborough.stadiumCapacity);
    $("#established").text(Centresborough.est);
    $("#join").show();
    $("#join").click(function () {
      $("#managername").text($("#Name").val());
      var user = new Manager($("#Name").val(),Centresborough,0,0,0);
      $("#pickTeam").fadeOut(2000);
      $(".content").delay(2000).fadeIn(2000);
      $("#intro1").delay(3000).fadeIn(2000);
      $("#intro1").delay(1000).fadeOut(2000);
      $("#intro2").delay(9000).fadeIn(2000);
      $("#intro2").delay(2000).fadeOut(2000);
      $("#intro3").delay(15000).fadeIn(2000);
      $("#intro3").delay(2000).fadeOut(2000);
      $("#intro4").delay(18000).fadeIn(2000);
      $("#intro4").delay(6000).fadeOut(2000);
      $("#intro5").delay(28000).fadeIn(2000);
      $("#intro5").delay(5000).fadeOut(2000);
      $("#home").delay(37000).fadeIn(2000);
      $("#myName").text(user.name);
      $("#teamName").text(user.team.name);
      for (var i = 0; i <11; i++) {
        $("#lineup").append("<li>"+user.team.players[i].firstName+" "+user.team.players[i].lastName+"</li>")
        }
    });
  });  // $(".content")
  $("#moonderland").click(function () {
    $("#team-name").text(Moonderland.name);
    $("#nickname").text(Moonderland.nickname);
    $("#home-town").text(Moonderland.homeTown);
    $("#stadium").text(Moonderland.stadium);
    $("#capacity").text(Moonderland.stadiumCapacity);
    $("#established").text(Moonderland.est);
    $("#join").show();
    $("#join").click(function () {
      $("#managername").text($("#Name").val());
      var user = new Manager($("#Name").val(),Moonderland,0,0,0);
      $("#pickTeam").fadeOut(2000);
      $(".content").delay(2000).fadeIn(2000);
      $("#intro1").delay(3000).fadeIn(2000);
      $("#intro1").delay(1000).fadeOut(2000);
      $("#intro2").delay(9000).fadeIn(2000);
      $("#intro2").delay(2000).fadeOut(2000);
      $("#intro3").delay(15000).fadeIn(2000);
      $("#intro3").delay(2000).fadeOut(2000);
      $("#intro4").delay(18000).fadeIn(2000);
      $("#intro4").delay(6000).fadeOut(2000);
      $("#intro5").delay(28000).fadeIn(2000);
      $("#intro5").delay(5000).fadeOut(2000);
      $("#home").delay(37000).fadeIn(2000);
      $("#myName").text(user.name);
      $("#teamName").text(user.team.name);
      for (var i = 0; i <11; i++) {
        $("#lineup").append("<li>"+user.team.players[i].firstName+" "+user.team.players[i].lastName+"</li>")
        }
    });
  });
  $("#chiniventus").click(function () {
    $("#team-name").text(Chiniventus.name);
    $("#nickname").text(Chiniventus.nickname);
    $("#home-town").text(Chiniventus.homeTown);
    $("#stadium").text(Chiniventus.stadium);
    $("#capacity").text(Chiniventus.stadiumCapacity);
    $("#established").text(Chiniventus.est);
    $("#join").show();
    $("#join").click(function () {
      $("#managername").text($("#Name").val());
      var user = new Manager($("#Name").val(),Chiniventus,0,0,0);
      $("#pickTeam").fadeOut(2000);
      $(".content").delay(2000).fadeIn(2000);
      $("#intro1").delay(3000).fadeIn(2000);
      $("#intro1").delay(1000).fadeOut(2000);
      $("#intro2").delay(9000).fadeIn(2000);
      $("#intro2").delay(2000).fadeOut(2000);
      $("#intro3").delay(15000).fadeIn(2000);
      $("#intro3").delay(2000).fadeOut(2000);
      $("#intro4").delay(18000).fadeIn(2000);
      $("#intro4").delay(6000).fadeOut(2000);
      $("#intro5").delay(28000).fadeIn(2000);
      $("#intro5").delay(5000).fadeOut(2000);
      $("#home").delay(37000).fadeIn(2000);
      $("#myName").text(user.name);
      $("#teamName").text(user.team.name);
      for (var i = 0; i <11; i++) {
        $("#lineup").append("<li>"+user.team.players[i].firstName+" "+user.team.players[i].lastName+"</li>")
        }
    });
  });
  $("#worldxi").click(function () {
    $("#team-name").text(WorldXI.name);
    $("#nickname").text(WorldXI.nickname);
    $("#home-town").text(WorldXI.homeTown);
    $("#stadium").text(WorldXI.stadium);
    $("#capacity").text(WorldXI.stadiumCapacity);
    $("#established").text(WorldXI.est);
    $("#join").show();
    $("#join").click(function () {
      $("#managername").text($("#Name").val());
      var user = new Manager($("#Name").val(),WorldXI,0,0,0);
      $("#pickTeam").fadeOut(2000);
      $(".content").delay(2000).fadeIn(2000);
      $("#intro1").delay(3000).fadeIn(2000);
      $("#intro1").delay(1000).fadeOut(2000);
      $("#intro2").delay(9000).fadeIn(2000);
      $("#intro2").delay(2000).fadeOut(2000);
      $("#intro3").delay(15000).fadeIn(2000);
      $("#intro3").delay(2000).fadeOut(2000);
      $("#intro4").delay(18000).fadeIn(2000);
      $("#intro4").delay(6000).fadeOut(2000);
      $("#intro5").delay(28000).fadeIn(2000);
      $("#intro5").delay(5000).fadeOut(2000);
      $("#home").delay(37000).fadeIn(2000);
      $("#myName").text(user.name);
      $("#teamName").text(user.team.name);
      for (var i = 0; i <11; i++) {
        $("#lineup").append("<li>"+user.team.players[i].firstName+" "+user.team.players[i].lastName+"</li>")
        }
    });
  });
  $("#fakemadrid").click(function () {
    $("#team-name").text(Fakemadrid.name);
    $("#nickname").text(Fakemadrid.nickname);
    $("#home-town").text(Fakemadrid.homeTown);
    $("#stadium").text(Fakemadrid.stadium);
    $("#capacity").text(Fakemadrid.stadiumCapacity);
    $("#established").text(Fakemadrid.est);
    $("#join").show();
    $("#join").click(function () {
      $("#managername").text($("#Name").val());
      var user = new Manager($("#Name").val(),Fakemadrid,0,0,0);
      $("#pickTeam").fadeOut(2000);
      $(".content").delay(2000).fadeIn(2000);
      $("#intro1").delay(3000).fadeIn(2000);
      $("#intro1").delay(1000).fadeOut(2000);
      $("#intro2").delay(9000).fadeIn(2000);
      $("#intro2").delay(2000).fadeOut(2000);
      $("#intro3").delay(15000).fadeIn(2000);
      $("#intro3").delay(2000).fadeOut(2000);
      $("#intro4").delay(18000).fadeIn(2000);
      $("#intro4").delay(6000).fadeOut(2000);
      $("#intro5").delay(28000).fadeIn(2000);
      $("#intro5").delay(5000).fadeOut(2000);
      $("#home").delay(37000).fadeIn(2000);
      $("#myName").text(user.name);
      $("#teamName").text(user.team.name);
      for (var i = 0; i <11; i++) {
        $("#lineup").append("<li>"+user.team.players[i].firstName+" "+user.team.players[i].lastName+"</li>")
        }
    });
  });
  $("#barceloaner").click(function () {
    $("#team-name").text(Barceloaner.name);
    $("#nickname").text(Barceloaner.nickname);
    $("#home-town").text(Barceloaner.homeTown);
    $("#stadium").text(Barceloaner.stadium);
    $("#capacity").text(Barceloaner.stadiumCapacity);
    $("#established").text(Barceloaner.est);
    $("#join").show();
    $("#join").click(function () {
      $("#managername").text($("#Name").val());
      var user = new Manager($("#Name").val(),Barceloaner,0,0,0);
      $("#pickTeam").fadeOut(2000);
      $(".content").delay(2000).fadeIn(2000);
      $("#intro1").delay(3000).fadeIn(2000);
      $("#intro1").delay(1000).fadeOut(2000);
      $("#intro2").delay(9000).fadeIn(2000);
      $("#intro2").delay(2000).fadeOut(2000);
      $("#intro3").delay(15000).fadeIn(2000);
      $("#intro3").delay(2000).fadeOut(2000);
      $("#intro4").delay(18000).fadeIn(2000);
      $("#intro4").delay(6000).fadeOut(2000);
      $("#intro5").delay(28000).fadeIn(2000);
      $("#intro5").delay(5000).fadeOut(2000);
      $("#home").delay(37000).fadeIn(2000);
      $("#myName").text(user.name);
      $("#teamName").text(user.team.name);
      for (var i = 0; i <11; i++) {
        $("#lineup").append("<li>"+user.team.players[i].firstName+" "+user.team.players[i].lastName+"</li>")
        }
    });
  });
  $(".Sim1").click(function () {
    $(".Sim1").hide();
    $("#wk1").fadeOut(1000);
    $("#wk1").delay(90000).fadeIn(2000);
    $("#wk1").delay(4000).fadeOut(2000);
    $("#wk2").delay(98000).fadeIn(2000);
    $(".Sim2").delay(98000).fadeIn(2000);
    $(".score1").text(simMatch());
    $(".score2").text(simMatch());
    $(".score3").text(simMatch());
    $(".score4").text(simMatch());
    $(".score5").text(simMatch());
    $(".score6").text(simMatch());
    $(".score7").text(simMatch());
    $(".score8").text(simMatch());
    $(".score9").text(simMatch());
    $(".score10").text(simMatch());
  });
  $(".Sim2").click(function () {
    $(".Sim2").hide();
    $("#wk2").fadeOut(1000);
    $("#wk2").delay(90000).fadeIn(2000);
    $("#wk2").delay(4000).fadeOut(2000);
    $("#wk3").delay(98000).fadeIn(2000);
    $(".Sim3").delay(98000).fadeIn(2000);
    $(".score1").text(simMatch());
    $(".score2").text(simMatch());
    $(".score3").text(simMatch());
    $(".score4").text(simMatch());
    $(".score5").text(simMatch());
    $(".score6").text(simMatch());
    $(".score7").text(simMatch());
    $(".score8").text(simMatch());
    $(".score9").text(simMatch());
    $(".score10").text(simMatch());
  });
  $(".Sim3").click(function () {
    $(".Sim3").hide();
    $("#wk3").fadeOut(1000);
    $("#wk3").delay(90000).fadeIn(2000);
    $("#wk3").delay(4000).fadeOut(2000);
    $("#wk4").delay(98000).fadeIn(2000);
    $(".Sim4").delay(98000).fadeIn(2000);
    $(".score1").text(simMatch());
    $(".score2").text(simMatch());
    $(".score3").text(simMatch());
    $(".score4").text(simMatch());
    $(".score5").text(simMatch());
    $(".score6").text(simMatch());
    $(".score7").text(simMatch());
    $(".score8").text(simMatch());
    $(".score9").text(simMatch());
    $(".score10").text(simMatch());
  });
  $(".Sim4").click(function () {
    $(".Sim4").hide();
    $("#wk4").fadeOut(1000);
    $("#wk4").delay(90000).fadeIn(2000);
    $("#wk4").delay(4000).fadeOut(2000);
    $("#wk5").delay(98000).fadeIn(2000);
    $(".Sim5").delay(98000).fadeIn(2000);
    $(".score1").text(simMatch());
    $(".score2").text(simMatch());
    $(".score3").text(simMatch());
    $(".score4").text(simMatch());
    $(".score5").text(simMatch());
    $(".score6").text(simMatch());
    $(".score7").text(simMatch());
    $(".score8").text(simMatch());
    $(".score9").text(simMatch());
    $(".score10").text(simMatch());
  });
  $(".Sim5").click(function () {
    $(".Sim5").hide();
    $("#wk5").fadeOut(1000);
    $("#wk5").delay(90000).fadeIn(2000);
    $("#wk5").delay(4000).fadeOut(2000);
    $("#wk6").delay(98000).fadeIn(2000);
    $(".Sim6").delay(98000).fadeIn(2000);
    $(".score1").text(simMatch());
    $(".score2").text(simMatch());
    $(".score3").text(simMatch());
    $(".score4").text(simMatch());
    $(".score5").text(simMatch());
    $(".score6").text(simMatch());
    $(".score7").text(simMatch());
    $(".score8").text(simMatch());
    $(".score9").text(simMatch());
    $(".score10").text(simMatch());
  });
  $(".Sim6").click(function () {
    $(".Sim6").hide();
    $("#wk6").fadeOut(1000);
    $("#wk6").delay(90000).fadeIn(2000);
    $("#wk6").delay(4000).fadeOut(2000);
    $("#wk7").delay(98000).fadeIn(2000);
    $(".Sim7").delay(98000).fadeIn(2000);
    $(".score1").text(simMatch());
    $(".score2").text(simMatch());
    $(".score3").text(simMatch());
    $(".score4").text(simMatch());
    $(".score5").text(simMatch());
    $(".score6").text(simMatch());
    $(".score7").text(simMatch());
    $(".score8").text(simMatch());
    $(".score9").text(simMatch());
    $(".score10").text(simMatch());
  });
  $(".Sim7").click(function () {
    $(".Sim7").hide();
    $("#wk7").fadeOut(1000);
    $("#wk7").delay(90000).fadeIn(2000);
    $("#wk7").delay(4000).fadeOut(2000);
    $("#wk8").delay(98000).fadeIn(2000);
    $(".Sim8").delay(98000).fadeIn(2000);
    $(".score1").text(simMatch());
    $(".score2").text(simMatch());
    $(".score3").text(simMatch());
    $(".score4").text(simMatch());
    $(".score5").text(simMatch());
    $(".score6").text(simMatch());
    $(".score7").text(simMatch());
    $(".score8").text(simMatch());
    $(".score9").text(simMatch());
    $(".score10").text(simMatch());
  });
  $(".Sim8").click(function () {
    $(".Sim8").hide();
    $("#wk8").fadeOut(1000);
    $("#wk8").delay(90000).fadeIn(2000);
    $("#wk8").delay(4000).fadeOut(2000);
    $("#wk9").delay(98000).fadeIn(2000);
    $(".Sim9").delay(98000).fadeIn(2000);
    $(".score1").text(simMatch());
    $(".score2").text(simMatch());
    $(".score3").text(simMatch());
    $(".score4").text(simMatch());
    $(".score5").text(simMatch());
    $(".score6").text(simMatch());
    $(".score7").text(simMatch());
    $(".score8").text(simMatch());
    $(".score9").text(simMatch());
    $(".score10").text(simMatch());
  });
  $(".Sim9").click(function () {
    $(".Sim9").hide();
    $("#wk9").fadeOut(1000);
    $("#wk9").delay(90000).fadeIn(2000);
    $(".score1").text(simMatch());
    $(".score2").text(simMatch());
    $(".score3").text(simMatch());
    $(".score4").text(simMatch());
    $(".score5").text(simMatch());
    $(".score6").text(simMatch());
    $(".score7").text(simMatch());
    $(".score8").text(simMatch());
    $(".score9").text(simMatch());
    $(".score10").text(simMatch());
  });
});
