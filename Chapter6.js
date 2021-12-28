/* Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0). */ 

class Vec {
    constructor(x,y){
      this.x = x;
      this.y = y;
    }
    plus(vec){
      this.x += vec.x;
      this.y += vec.y;
    }
    minus(vec){
      this.x -= vec.x;
      this.y -= vec.y;
    }
    get length(){
      return Math.sqrt((this.x*this.x)+(this.y*this.y))
    }
}

/* Groups
The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it. */ 

class Group{
  constructor(){
    this.group = [];
  }
  add (value){
    if (this.group.indexOf(value) === -1){
      this.group.push(value);
    } else {
      console.log('Element already exists')
    }
  }
  delete (value){
    if(this.group.indexOf(value) > -1){
      this.group.splice(this.group.indexOf(value), 1)
    }
  }
  static from(element){
    let group = []
    for(let i=0;i<element.length;i++){
      group.push(element[i])
    }
    return group
  }

}

let grupo = new Group
grupo.add(1)
grupo.add('hola')
grupo.delete(1)
let grupo2 = Group.from([10,30])
console.log(grupo)
console.log(grupo2)

/* Borrowing a method
Earlier in the chapter I mentioned that an object’s hasOwnProperty can be used as a more robust alternative to the in operator when you want to ignore the prototype’s properties. But what if your map needs to include the word "hasOwnProperty"? You won’t be able to call that method anymore because the object’s own property hides the method value.

Can you think of a way to call hasOwnProperty on an object that has its own property by that name? */

let map = {one: true, two: true, hasOwnProperty: true};

