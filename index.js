const carReport = {
     cars: [{
        id: 1,
        name: 'Ford',
        color: 'white',
        isDamaged: false
    },
    {
        id: 2,
        name: 'Suzuki',
        color: 'green',
        isDamaged: false
    },
    {
        id: 3,
        name: 'BMW',
        color: 'black',
        isDamaged: true
    }
    ],
    owners: [
        {
            id: 1,
            name: 'Jonas'
        },
        {
            id: 2,
            name: 'Ona'
        },
        {
            id: 3,
            name: 'Petras'
            }
    ]
};


console.log(carReport);
console.log("-- FOR LOOP --");
console.log('-- ES5 --') 
// ES5 Loop
for (let i = 0; i < carReport.cars.length; i++){
        console.log(carReport.cars[i].name)
    }
console.log('-- ES6 --')    
// ES6 Loop
for (let {name} of carReport.cars) {
        console.log(name);
      }
