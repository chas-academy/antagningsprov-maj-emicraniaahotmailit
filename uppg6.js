console.clear();

function uppg6() {
  // Skapa en array med namn som du döper till names
  // Loopa igenom arrayen och skriv ut alla namn i konsolen

  const names = ["Anton", "Eva", "Marcus", "Lisa"];
  for (const name of names) {
    console.log(name);
  }
}

uppg6();
module.exports = { uppg6 };
