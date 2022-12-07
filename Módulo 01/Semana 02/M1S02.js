idade = prompt('Digite a idade');

if (idade <= 15) {
  alert('Jovens');
} else if (idade > 16 && idade < 64) {
  alert('Adultos');
} else if (idade > 65) {
  alert('Idosos');
}
