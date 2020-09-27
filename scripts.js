function Fighter(name, minPower, maxPower, special, type, health, image) {
  this.name = name;
  this.minPower = minPower;
  this.maxPower = maxPower;
  this.special = special;
  this.type = type;
  this.health = health;
  this.image = image;
  this.attack = function () {
    return Math.floor(
      Math.random() * (this.maxPower - this.minPower + 1) + this.minPower
    );
  };
  this.defense = function () {
    return Math.floor(
      Math.random() * (this.maxPower - this.minPower + 1) + this.minPower
    );
  };
  this.saber = (color) => {
    this.color = color;
    const green = "#00c851";
    const red = "#ff4444";
    color = type === "Jedi" ? green : red; //ternary operator! if type = jedi give green; else red
  };
}

const Gameboard = {
  availableFighters: [
    (Yoda = new Fighter(
      "Yoda",
      90,
      99,
      100,
      "Jedi",
      100,
      "https://purepng.com/public/uploads/large/purepng.com-star-wars-yodastar-warsspace-opera-franchisefilm-star-warswarsstar-1701527826271vzua4.png"
    )),
    (Mase = new Fighter(
      "Mase Windu",
      90,
      99,
      100,
      "Jedi",
      100,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcanbdi-cf1c078d-7155-4415-94a5-3e1506858a39.png/v1/fill/w_803,h_995,strp/star_wars_revenge_of_the_sith_mace_windu_png_by_metropolis_hero1125_dcanbdi-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMSIsInBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGNhbmJkaS1jZjFjMDc4ZC03MTU1LTQ0MTUtOTRhNS0zZTE1MDY4NThhMzkucG5nIiwid2lkdGgiOiI8PTgxNiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.bZ9GtZnIFyY5U6_evDZhDoFgtzN7fO0Kx1Jyq-PCHMk"
    )),
    (Quigon = new Fighter(
      "Qui Gon",
      90,
      99,
      100,
      "Jedi",
      100,
      "https://vignette.wikia.nocookie.net/the-beaver-run-wars/images/a/ad/Qui-Gon_Jinn.png/revision/latest?cb=20160216022027"
    )),
    (Mal = new Fighter(
      "Darth Mal",
      90,
      99,
      100,
      "Sith",
      100,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dc99z5g-36e48bef-22af-4b6d-b1f3-aa5793ece176.png/v1/fill/w_797,h_1002,strp/star_wars_the_phantom_menace_darth_maul_png_by_metropolis_hero1125_dc99z5g-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxOCIsInBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGM5OXo1Zy0zNmU0OGJlZi0yMmFmLTRiNmQtYjFmMy1hYTU3OTNlY2UxNzYucG5nIiwid2lkdGgiOiI8PTgxMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5jTFQDl55OfEa8beUOvpg5KE6mvYYs-SaTC2V76BUFY"
    )),
    (Vader = new Fighter(
      "Vader",
      90,
      99,
      100,
      "Sith",
      100,
      "https://i1.wp.com/freepngimages.com/wp-content/uploads/2015/11/darth-vader-transparent-image.png?fit=608%2C514"
    )),
    (Sidious = new Fighter(
      "Sidious",
      90,
      99,
      100,
      "Sith",
      100,
      "https://vignette.wikia.nocookie.net/vsbattles/images/6/64/Darth_Sidious_Render.png/revision/latest?cb=20170810182252"
    )),
  ],
  currentFighters: [],
  player1Health: 100,
  player2Health: 100,
  listFighters: function () {
    this.availableFighters.map((fighter) => {
      const fighterNameBtn = $("<button class='btn my-1 fighter-button'>");
      fighterNameBtn.text(`${fighter.name}`);
      $("#fighters-to-choose").append(fighterNameBtn);
    });
  },
  gameInit: function () {
    if (this.currentFighters.length === 2) {
      $("#choose-title").css("visibility", "hidden"); //leaves the space 'occupied', but empty
      const player1 = $("#player-1image");
      const player2 = $("#player-2image");
      player1.html(`
                <h3 class="card-header text-center">${
                  this.currentFighters[0].name
                }</h3>
                <img class="fighter-img img-fluid" src="${
                  this.currentFighters[0].image
                }"/>
                <h3 class="affiliation text-center">${
                  this.currentFighters[0].type
                }</h3>
                <p class="text-center">
                    <button class="btn mx-1 fighter-button" onclick="${Gameboard.fight()}">ATTACK</button>
                </p>
            `);
      player2.html(`
                <h3 class="card-header text-center">${this.currentFighters[1].name}</h3>
                <img class="fighter-img img-fluid" src="${this.currentFighters[1].image}"/>
                <h3 class="affiliation text-center">${this.currentFighters[1].type}</h3>
            `);
    }
    if (this.currentFighters.length > 2) {
      console.log("You can't add a third fighter!");
      this.currentFighters.pop(this.currentFighters[2]);
    }
  },
  choosePlayer: document.addEventListener("click", (e) => {
    for (let i = 0; i < Gameboard.availableFighters.length; i++) {
      if (e.target.innerText === Gameboard.availableFighters[i].name) {
        Gameboard.currentFighters.push(Gameboard.availableFighters[i]);
      }
    }
    Gameboard.gameInit();
    console.log(Gameboard.currentFighters);
  }),
  fight: function () {
    let subp1Health = Math.ceil(this.currentFighters[1].defense() * 0.1);
    let subp2Health = Math.ceil(this.currentFighters[0].defense() * 0.1);
    if (this.currentFighters[0].attack() > this.currentFighters[1].defense()) {
      console.log("player 2 got hit");
      console.log((this.player2Health -= subp2Health));
      this.shrinkHealthBar();
      this.pickWinner();
    } else if (
      this.currentFighters[1].attack() > this.currentFighters[0].defense()
    ) {
      console.log("player 1 got hit");
      console.log((this.player1Health -= subp1Health));
      this.shrinkHealthBar();
      this.pickWinner();
    } else {
      console.log("tie");
    }
  },
  shrinkHealthBar: function () {
    $("#player1-bar").css({
      width: `${this.player1Health}%`,
      "background-color": `${this.currentFighters[0].saber()}`,
      "box-shadow": `1px 0px 5px 3px ${this.currentFighters[0].saber()}`,
    });
    $("#player2-bar").css({
      width: `${this.player2Health}%`,
      "background-color": `${this.currentFighters[1].saber()}`,
      "box-shadow": `-1px 0px 5px 3px ${this.currentFighters[1].saber()}`,
    });
  },
  pickWinner: function () {
    if (this.player1Health <= 0) {
      Gameboard.gameOver("Player 2 won :(");
      $("#versus-board").css("margin-left", "25%");
    }
    if (this.player2Health <= 0) {
      Gameboard.gameOver("You won!");
      $("#versus-board").css("margin-left", "25%");
    }
  },
  gameOver: function (str) {
    $("#versus-board").html(`
    <div>
      <h1 class="mr-3 text-center">${str}</h1>
      <p class="text-center">
        <button class="btn btn-block" id="game-over-btn">PLAY AGAIN?</button>
      </p>
    </div>`);
  },
  restart: document.addEventListener("click", function (e) {
    if (e.target.innerText === "PLAY AGAIN?") {
      location.reload();
    }
  }),
};
Gameboard.listFighters();
