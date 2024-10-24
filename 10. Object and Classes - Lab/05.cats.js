function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const el of arr) {
    let cat = el.split(' ');
    let catClass = new Cat(cat[0], cat[1]);
    catClass.meow();
  }
}

cats(['Mellow 2', 'Tom 5']);
