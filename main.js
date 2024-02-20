const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log("*** Algorithme lancé ***");
  console.log("Bienvenue chez GTM Bank");
  
  readline.question("Voulez-vous avoir un découvert (o/n) ? ", function(isOverdraft) {
    let overdraftAmount = 0;
    let sold = 0;
  
    if (isOverdraft.toLowerCase() === 'o') {
      askOverdraftAmount();
    } else {
      askInitialDeposit();
    }
  
    function askOverdraftAmount() {
      readline.question("Entrez le montant du découvert autorisé entre 100 et 2000 €: ", function(amount) {
        amount = parseInt(amount);
        if (amount >= 100 && amount <= 2000) {
          overdraftAmount = amount;
          askInitialDeposit();
        } else {
          console.log("Le montant doit être entre 100 et 2000 €.");
          askOverdraftAmount();
        }
      });
    }
  
    function askInitialDeposit() {
      readline.question("Entrez le montant à transférer pour l'ouverture du compte (minimum de 500 €): ", function(deposit) {
        deposit = parseInt(deposit);
        if (deposit >= 500) {
          sold = deposit;
          console.log(`Solde (€): ${deposit}`);
          console.log(`Découvert (€): ${overdraftAmount}`);
          console.log("*** Algorithme terminé ***");
          readline.close();
        } else {
          console.log("Le montant initial doit être au moins de 500 €.");
          askInitialDeposit();
        }
      });
    }

    function askWithdraw() {
      readline.question(`Saisissez le montant de votre retrait`), function(withdraw) {
        withdraw = parseInt(withdraw)
        if (overdraftAmount === 0) {
          if( sold < withdraw) {
            console.log(`Vous ne pouvez pas retirer plus que votre solde: ${sold} €`);
          }
        }
      }
    }

  });
