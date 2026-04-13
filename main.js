{
  class User {
    name;
    #score;

    constructor(name, score) {
      this.name = name;
      this.#score = score;
    }

    get score() {
      return this.#score;
    }

    isValueValid(newValue) {
      return newValue < 0 || newValue > 100 ? false : true;
    }

    set score(newValue) {
      if (this.isValueValid(newValue) === false) {
        console.log('Invalid value!');
        return;
      }
      this.#score = newValue;
    }
  }

  const user = new User('Taro', 70);
  user.score = 99999;
  console.log(user.score);
  console.log(user.isValueValid(50));
}
