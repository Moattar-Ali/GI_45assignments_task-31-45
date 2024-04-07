//Question-31

let users = ["Admin","Eric","Harry", "John"];

if(users.length == 0){
console.log("We need to find some new users");
}
else{
 for(let user of users){
    if(user == "Admin"){
        console.log("Hello Admin! Would you like to check the status report?");
    }
    else {
        console.log(`hello ${user}! Thanks for logging in again.`)
    }
  }
}

users = [];

if(users.length == 0 ){
    console.log("We need to find some users");
}

//Question-32

let current_users = ["Admin","eric","harry","John","Jack","Jane"];
let new_users = ["eric","harry","Elisa","Maik","Jimmy"];

let current_users_lower = current_users.map(user => user.toLowerCase());

for (let new_user of new_users){
    if(current_users_lower.includes(new_user.toLowerCase())){
        console.log(`Sorry ${new_user}, that name is taken!`);
    }

else{
    console.log(`Yes! ${new_user} is still in available list!`);
}
}

//Question-33

let numbers = [1,2,3,4,5,6,7,8,9];

for(let number of numbers){
    if(number == 1){
        console.log(`${number}st`);
    }
    else if(number == 2){
        console.log(`${number}nd`);
    }
    else if(number == 3){
        console.log(`${number}rd`);
    }
    else{
        console.log(`${number}th`);
    }
    
}

//Question-34

let fav_pizza = ["pepperoni","chicken","veg"];

for(let pizza of fav_pizza){
    console.log(pizza);
}
console.log("\n");

for(let pizza of fav_pizza){
console.log(`I really like ${pizza} pizza!`);
}
console.log("\nI really love pizza!");

//Question-35

let animals = ["wolf","dog","horse"];
for(let animal of animals){
    console.log(animal);
}
console.log("\n");

for(let animal of animals){
    console.log(`A ${animal} is a faithful animal`);
}

console.log("\nAll of these are great animal");

//Question-36

function make_shirt(size : string, text: string ): void {
    console.log(`You ordered a ${size} shirt that says: ${text}`)
}

make_shirt('large', '"I love typescript"');
make_shirt('medium', '"I need a big one"');
make_shirt('small','"I love this shirt"');

//Question-37

function makeShirt(size : string = 'large', text : string = 'I love typescript'): void{
    console.log(`You have ordered a ${size} shirt that says: "${text}" `)
}

makeShirt();
makeShirt('medium')

makeShirt('small','i need a big shirt to wear');

//Question-38

function describe_city(city : string , country : string = "Pakistan") : void{
    console.log(`${city} is in ${country}`);
}

describe_city('Karachi');
describe_city('Islamabad');
describe_city('Lahore');
describe_city('Istanbol', 'Turkey');
describe_city('Tehran','Iran');

//Question-39

function city_country(city : string , country : string) : string{
    return `${city} , ${country}`;
}
let c1 = city_country("Mumbai", "India");
let c2 = city_country("London", "England");
let c3 = city_country("Tehran", "Iran");
let c4 = city_country("Beijing", "China");

    console.log(c1);
    console.log(c2);
    console.log(c3);
    console.log(c4);

//Question-40

function make_album(artist : string , title : string) : {artist : string , title : string}{
    let dictionaries = {
        artist : artist.charAt(0).toUpperCase() +artist.slice(1),
        title : title.charAt(0).toUpperCase() +title.slice(1)
    }
return dictionaries;
}

let album = make_album('Eric', 'The waves');
console.log(album);

album = make_album('Harry', 'light');
console.log(album);

album = make_album('Jerry', 'seenbreeze');
console.log(album);

//Question-41

function show_magician(magicians : string[]) : void{
    for(const magician of magicians ){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician : string[] = ["Tom","Marie","Annie"];
show_magician(magician);

//Question-42

let magicianNames = ["Tom","Marie","Annie"];

function show_the_magicians(greet : string){
    for(let item of magicianNames){
   
        console.log(greet, item);

    }
};

show_the_magicians("Hello, How Are You Dear ");
show_the_magicians("Hello, "); //to call 2nd time

//Question-43

let magicianNames2 = ["Tom","Marie","Annie"];

let magicianNamesCopy = [...magicianNames2];

function showTheMagicians(greet : string){
    let withGreetings = "";

    for(let item of magicianNamesCopy){
   withGreetings += `${greet} ${item}\n`;
    }

    return withGreetings;
};

let myGreetings = showTheMagicians("Hello");
let makeAnArray = myGreetings.split('\n');

console.log(makeAnArray);
console.log(magicianNames2); //for the original array

//Question-44

function sandwich(...items : string[]) : void {
    console.log("Sandwich order: ");

    for(let a = 0; a < items.length; a++){
        console.log(`-${items[a]}`);
    }
}

console.log("Enjoy Your Sandwich Dude!");

sandwich('capsicum','tomato','chicken');
sandwich('beef','cheese');
sandwich('garlic chicken','mayo sauce');

//Question-45

type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}
const myCar: car = createCar('mercedes','corolla',{color : "silver" , year : 2020})
console.log(myCar);












