/*
<input type="number" id="overdraftAmount" name="overdraftAmount" value=1320.00>
        
<p>Durée du découvert :</p>
<input type="number" id="overdraftTime" name="overdraftTime" value=45.00>

<p>Plafond du découvert autorisé :</p>
<input type="number" id="authorizedOverdraftCeiling" name="authorizedOverdraftCeiling" value=1320.00>

<p>Taux de découvert autorisé :</p>
<input type="number" id="authorizedOverdraftRate" name="authorizedOverdraftRate" value=10.00>

<p>Taux au-delà du plafond</p>
<input type="number" id="ratesbeyondCeiling" name="ratesbeyondCeiling" value=10.00>

<h3>Taux au-delà du plafond</h3>
<div id="totalAmount" name="totalAmount">
*/

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