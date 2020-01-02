class LunchBox {
  constructor({owner, madeOf, shape, color}) {
    this.owner = owner;
    this.material = madeOf;
    this.shape = shape;
    this.color = color;
    this.handle = true;
    this.snacks = [];
    this.healthySnacks = [];

  }

  acquireSnack(snack) {
    // I want to take the snackObject and push it into this.snacks array.
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }

  findHealthySnacks() {
    //return an array with any healthy Snack.healthy objects in it
    var healthySnacks = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].healthy === true) {
        healthySnacks.push(this.snacks[i])
        }
      }
      return healthySnacks
    }
  }


module.exports = LunchBox;
