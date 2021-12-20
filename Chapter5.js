/* Flattening
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays. */

let arr =[[1,2,3], [4,5], [6]]

let newArr = arr.reduce((a,b) => a.concat(b))

/* Your own loop
Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping. */

function loop(value, test, update, body){
    if (test(value) == false){
        return false
    }
    body(value)
    value = update(value)
    loop(value, test, update, body)
}

loop(3, n => n > 0, n => n - 1, console.log);

/* Everything
Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. */

function every(arr, test){
    for(i=0; i<arr.length; i++){
        if(test(arr[i]) == false){
            return false
        }
    }
    return true
}

