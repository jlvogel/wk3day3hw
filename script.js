// Static Methods and Properties

// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.

// log the properties and test the methods (don't instantiate)


// Thinking about a governor's properties:
// the particular state the governor is in.
// the political party the governor is of.

// Thinking about a governor's methods:
// signing legislation
// vetoing legislation
// preparing state budget
// administernig state budget
// implementing state laws

// Ok, but after some research on static properties and methods,
// these are properties and methods that are particular to the class
// itself, not on any instance.  static properties and methods, are
// not available to instances of the class.

// So we need to think about what is particular to the class Governor as a whole, that wouldn't be applicable to a particular governor of a particular state.  

// hmmmmmmmmmmmmmmmm

// .... after some more researching on static methods and properties
// need to review a little more.

// how about a static property for political party that only
// allows a governor to have possiblity of Republican, Democrat, Independent,
// Libertarian, Green, or other?

// I'm not sure if that's a good example or not right now
// But a method to COMPARE governor's might be a good reason to define
// a static method for a class.

// We could compare the election dates of governors, for example.
// To answer a question of how much longer a certain governor has held
// office than other one, for example.

// Another thing we could compare is the GENERAL location that
// a governor is located in.  Obviously they are located in different states
// but 2 governors might be in the Southwest, or one might be in the North, and
// another might be in the Southeast. or Midwest.

// so a region compare method.  - great we thought of one method for a governor
// class....

// a party member method might be another good class method.
// we could list all governors in certain regions.  or list governors 
// that are only Democrat

// I believe these would be considered utility purposes.  Something
// I have found to be a common purpose for static methods.

// ok now for static properties, one reason for this would
// be for a property that would be common in ALL instances.
// I suppose one property common to all governors is that the country they
// serve is the USA.  so the country could be a static property?

// but a static property is one that is not available to a particular instance.

// BUT it looks like a static property / method could be used in the CREATION
// of an instance?  (I think).  

"use strict";  // throws an error if you try to assign a different
               // value to property whose writable property is set to false

class Governor {
  static country = "USA";
  constructor (state) {
    // "use strict";                 
    this.country = Governor.country;
    Object.defineProperty(this, 'country', {
       value: Governor.country, // ensure's every governor instance
                                // country is USA
       writable: false,         // ensures the country cannot change
    });
    this.state = state;
  }
}
const joshShapiro = new Governor('Pennsylvania')
console.log(joshShapiro.country);

// joshShapiro.country = "Nigeria"; // will not work
// joshShapiro['country'] = "Nigeria"; // also does not work
console.log(joshShapiro)
joshShapiro.state = "New Mexico" // this is ok
console.log(joshShapiro)


// why does assigning a value not throw an error than?
// after more research realize that 'use strict'; might
// then throw an error?  try it!

// it works!  "use strict";