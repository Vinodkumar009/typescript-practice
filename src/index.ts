import * as _ from 'lodash';

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let sampleArray:number[]=[1,2,3];
let samArra1:Array<any>=[1,2,2,"asdad","asdsd"];
let samArry2:[string,number]
samArry2=["sdfsdf",2]; // called as tuple ,which allows fixed type and order which u declared

//console.log(`${decimal}:${hex}:${binary};${octal}`);
//console.log(samArry2[0].substring(1));
enum Color {Red=5, Green, Blue}
let c: Color = Color.Green;
let unusable: void = undefined;
console.log(c);

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
let strLength1: number = (<string>someValue).length;

const kitty = {
    name: "Aurora",
    numLives: 5,
}

kitty.name = "vinod"
console.log(kitty);

//Destructuring of arrays
// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// f([1, 2]);

let [first, ...rest] = [1, 2, 3, 4];
console.log(first);

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

let { a, ...passthrough } = o;
console.log(passthrough);

//default value declaration
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { 
        super(name); 
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping after watch..");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

var samp_Array = [1,2,3,4,5];
var reveraedarray = _.reverse(samp_Array);
//console.log(reveraedarray);

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);