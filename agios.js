document.getElementById("overdraftAmount").addEventListener("change", calcul);
document.getElementById("overdraftTime").addEventListener("change", calcul);
document.getElementById("authorizedOverdraftCeiling").addEventListener("change", calcul);
document.getElementById("authorizedOverdraftRate").addEventListener("change", calcul);
document.getElementById("ratesbeyondCeiling").addEventListener("change", calcul);
calcul();     

function calcul(){
    var overdraftAmount = document.getElementById('overdraftAmount').value;
    var overdraftTime = document.getElementById('overdraftTime').value;
    var authorizedOverdraftCeiling = document.getElementById('authorizedOverdraftCeiling').value;
    var authorizedOverdraftRate = document.getElementById('authorizedOverdraftRate').value;
    var ratesbeyondCeiling = document.getElementById('ratesbeyondCeiling').value;
    var totalAmount = document.getElementById('totalAmount');

    totalAmount = ((overdraftAmount * overdraftTime * (authorizedOverdraftRate/100)) / 365).toFixed(2);
    
    var div = document.getElementById('totalAmount');
    div.innerHTML = totalAmount + " €";
}