console.clear();

function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  const persons = [
    { name: "Marcus", age: 56 },
    { name: "Alice", age: 12 },
    { name: "Erik", age: 29 },
    { name: "Eva", age: 45 },
    { name: "Johan", age: 9 },
  ];

  // skapa en fuktion som tar in en array som argument //In which order?
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  function CheckAge(people) {
    for (let person of people) {
      if (person.age > 30) {
        console.log(person.name);
      }
    }
  }

  // anropa funktionen och skicka med arrayen som argument

  CheckAge(persons);
}

uppg8();
module.exports = { uppg8 };
