var number1 = parseInt(prompt("Birinci ədədi daxil edin:"));
var number2 = parseInt(prompt("İkinci ədədi daxil edin:"));

var hasil = 1;
var cem = 0;

for (let i = number1; i <= number2; i++) {
  if (i % 19 === 0) {
    hasil *= i;
    cem += i;
  }
}

if (hasil !== 1) {
  alert(`Ədədlərin hasili: ${hasil}. Ədədlərin cəmi: ${cem}.`);
} else {
  alert("Bu ədədlər arasında 19-ə tam bölünən ədəd yoxdur.");
}
