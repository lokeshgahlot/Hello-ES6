;(function() {
  class Animal {
    constructor() {
      console.log('Animal class');
    }
  };

  class Cat extends Animal {
    constructor() {
      super();
      console.log('Cat class');
    }
    someMethod() {
      console.log('some-method');
    }
  }

  let cat = new Cat();
  cat.someMethod();
})();
