function berechneBMI() {
  const groesse = parseFloat(document.getElementById("groesse").value) / 100;
  const gewicht = parseFloat(document.getElementById("gewicht").value);
  const bmi = gewicht / (groesse * groesse);

  let tipp = "";

  if (bmi < 18.5) {
    tipp = "Du bist untergewichtig – achte auf eine gesunde Zunahme 🍌";
  } else if (bmi < 25) {
    tipp = "Top! Du hast Normalgewicht 👏";
  } else if (bmi < 30) {
    tipp = "Leichtes Übergewicht – du bist auf einem guten Weg 💪";
  } else {
    tipp = "Starkes Übergewicht – FormlyFit hilft dir beim Start 🚀";
  }

  document.getElementById("bmiAusgabe").innerHTML = `Dein BMI: ${bmi.toFixed(1)}<br>${tipp}`;
}
