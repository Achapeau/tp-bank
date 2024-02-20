document.addEventListener('DOMContentLoaded', () => {
  const accountCreationForm = document.getElementById('accountCreationForm');
  const withdrawForm = document.getElementById('withdrawForm');
  const agiosCalculator = document.getElementById('agiosCalculator');
  let balance = 0; // Solde du compte
  let overdraftLimit = 0; // Limite de découvert autorisé

  accountCreationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const overdraftOption = document.getElementById('overdraftOption').value.toLowerCase();
      const overdraftAmount = parseInt(document.getElementById('overdraftAmountForm').value, 10);
      const initialDeposit = parseInt(document.getElementById('initialDeposit').value, 10);

      if (overdraftOption === 'oui' && overdraftAmount >= 100 && overdraftAmount <= 2000) {
          overdraftLimit = overdraftAmount;
      }

      if (initialDeposit >= 500) {
          balance = initialDeposit;
          alert(`Compte créé avec succès. Solde: ${balance} €. Découvert autorisé: ${overdraftLimit} €`);
      } else {
          alert('Le montant initial doit être au moins de 500 €.');
      }
  });

document.getElementById("withdrawBtn").addEventListener("click", function() {
    const authorizedOverdraft = parseFloat(document.getElementById("authorizedOverdraft").value);
    let currentBalance = parseFloat(document.getElementById("currentBalance").value);
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    
    // Vérification si le solde permet le retrait
    if (currentBalance - withdrawAmount >= -authorizedOverdraft) {
        currentBalance -= withdrawAmount; // Mise à jour du solde après retrait
        document.getElementById("result").innerHTML = `Nouveau solde : ${currentBalance} €<br>Montant du découvert : ${authorizedOverdraft} €`;
    } else {
        document.getElementById("result").innerHTML = "Solde insuffisant";
    }
});


 document.getElementById("calculateButton").addEventListener("click", calcul);

function calcul() {
    var overdraftAmount = parseFloat(document.getElementById('overdraftAmount').value);
    var overdraftTime = parseFloat(document.getElementById('overdraftTime').value);
    var authorizedOverdraftCeiling = parseFloat(document.getElementById('authorizedOverdraftCeiling').value);
    var authorizedOverdraftRate = parseFloat(document.getElementById('authorizedOverdraftRate').value);
    var ratesbeyondCeiling = parseFloat(document.getElementById('ratesbeyondCeiling').value);

    var interestWithinCeiling = 0;
    var interestBeyondCeiling = 0;

    if (overdraftAmount <= authorizedOverdraftCeiling) {
        interestWithinCeiling = (overdraftAmount * overdraftTime * (authorizedOverdraftRate / 100)) / 365;
    } else {
        interestWithinCeiling = (authorizedOverdraftCeiling * overdraftTime * (authorizedOverdraftRate / 100)) / 365;
        interestBeyondCeiling = ((overdraftAmount - authorizedOverdraftCeiling) * overdraftTime * (ratesbeyondCeiling / 100)) / 365;
    }

    var totalInterest = interestWithinCeiling + interestBeyondCeiling;
    var totalAmount = totalInterest.toFixed(2);

    document.getElementById('totalAmount').innerHTML = totalAmount + " €";
}})
