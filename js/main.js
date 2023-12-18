

// let listaPracownikow = `{

//     "employees": [
//         { "firstName": "Hans", "lastName": "Schmidt" },
//         { "firstName": "Jan", "lastName": "Nowak" },
//         { "firstName": "Marek", "lastName": "Kowalski" }
//     ]    
    
// }`;

// console.log(listaPracownikow.employees[0].firstName);

// for (let pracownik of listaPracownikow.employees) {
//     console.log(pracownik.lastName);
// }

// console.log(JSON.stringify(listaPracownikow));

// console.log(JSON.parse(listaPracownikow));


let  listaPracownikow = `{
    "pracownicy": [
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}`;

// for (let pracownik of listaPracownikow.pracownicy) {
//     console.log(pracownik);
// }

console.log(JSON.parse(listaPracownikow));




// console.log(pracownicy);


// console.log(listaPracownikow.pracownicy[0, 1, 2 ].firstName);
