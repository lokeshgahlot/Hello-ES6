{
  // var evens = [2, 4, 6, 8];
  /*
    var odds = evens.map(v => v + 1);
    var nums = evens.map((v, i) => v + i);
    var pairs = evens.map(v => ({even: v, odd: v + 1}));*/

  // var k = c=>(p + 1);

  /*class Animal {
      constructor() {
        console.log('Animal class');
      }
  };

  class Cat extends Animal {
      constructor() {
        super();
        console.log('Cat class');
      }
    }

  new Cat();*/

  /*  let test;

    nums.forEach(v => {
      if (v % 5 === 0)
        fives.push(v);
    });

    var k = c=>(c + 1);

    console.log('odds = ', odds);
    console.log('nums = ', nums);
    console.log('pairs = ', pairs);

    var t = function(t, a = 12) {

    }

    class Animal {
      constructor() {
        console.log('Animal class');
      }
    };

    class Cat extends Animal {
      constructor() {
        super();
        console.log('Cats class');
      }
    }

    new Cat();
*/

  /*  let theProtoObj = {};
    let handler = {};

    var obj = {
      // __proto__
      __proto__: theProtoObj,
      // Shorthand for ‘handler: handler’
      handler,
      // Methods
      toString() {
        // Super calls
        return "d " + super.toString();
      },
      // Computed (dynamic) property names
      [ 'prop_' +(() => 42)() ]: 42
    };

    console.dir(obj);*/
  /* var name = "Bob", time = "today";
   let t = `Hello ${name}, how are you ${time}?`

   console.log('t = ', t);

   name = 'Kaleem';
   console.log('t = ', t);*/

  function g({type: t, name: x}) {
    console.log(x);
    console.log(t);
  }
  g({name: 'Kaleem', type:'A' })

}
