 // 5 Task //

    var person = {
        name : "john" ,
        lastname : "doe",
        age : 50,
        eyecolour : "blue"
    };
    console.log(person.eyecolour)
// 4 task //
 let names = ['name', 25, 50, 'age', 'surname' , [50,500] ];
 console.log(names[5][1]);

// task 6//
var dates = [11,27,8,31,9,24,30];
for (let i = 0; i< dates.length; i++) {
    console.log(dates[i]);
}
// 1 task //
 let cars = ['audi', 'bmw', 'lexus', 'volkswagen', 'porsche'];
 var x = 1;
 while (x<cars.length){
     console.log(cars[x]);
     x++;
 }

//  task 2 // 

var saxeli = ['mariami', 'nata', 'kristina', 'ana', 'gio'];
for (let y =0; y <saxeli.length; y++) if (saxeli[y].length > 3) {
    console.log (saxeli[y]);
}

// task 3 //

let NumbersMassive = [2,3,55,109,708,48,11,79];
for (let n = 0; n < NumbersMassive.length; n++) {
    if (NumbersMassive[n] % 2 == 0) {
        console.log(NumbersMassive[n]);
    } 
}
// 3.2 // 

for (let n = 0; n < NumbersMassive.length; n++) {
    if (NumbersMassive[n] % 2 == 1) {
        console.log(NumbersMassive[n]);
    } 
}
// task 7 //
var massive = [5,25,89,120,36];
massive.push('javascript', 'python');
console.log(massive); 
massive.unshift('html','css');
console.log(massive);
console.log(massive.length);
massive.shift();
massive.pop();
console.log(massive);

// task 8 // 

var fruits = ['ბანანი', 'ფორთოხალი', 'მსხალი'];
console.log(fruits.length);
fruits.push('ვაშლი', 'ანანასი');
fruits.unshift('საზამთო');
console.log(fruits.length);
fruits.splice(2,0,'მანგო');
console.log(fruits);
fruits.pop();
fruits.shift();
console.log(fruits.length);

// task 9 //
 let CarsMassive =['audi','bmw','lexus','volkswagen','ferrary','bently'];
 for(z=2;z<CarsMassive.length;z++){
     console.log(CarsMassive[z]);
 }
 let NewMassive = CarsMassive.slice(1,4);
 console.log(NewMassive);

// task 10 //

let massive10 =['dato','mariami', 'irakli', 'nini','nika'];
if (massive10.length==5 && massive10[4]=='nika'){
    console.log('მასივის რაოდენობა:5, ბოლო ელემენტია ნიკა')
} else {
    console.log('რაღაც შეგეშალა მარიამ')
}

// 10.2 //

let massive11 = ['sandro', 'giga','kristina', 'nini'];
if (massive11.length==7 || massive11[0]=='sandro'){
    console.log('მასივში ელემენტების რაოდენობა :7, პირველი ელემენტია სანდრო')
}



