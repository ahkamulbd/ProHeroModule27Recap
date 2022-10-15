//console.log('This is deposit');

document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('Deposit Button Clicked');

    const inputDepositField = document.getElementById('user-deposit');
    const inputDepositValueString = inputDepositField.value;
    const inputDepositValue = parseFloat(inputDepositValueString);
    // console.log(inputDepositValue);
    // console.log(typeof (inputDepositValue));
    // console.log(typeof (inputDepositValueString));

    const existingDepositValue = document.getElementById('deposit-total');
    const presentDepositValueString = existingDepositValue.innerText;
    const presentDepositValue = parseFloat(presentDepositValueString);
    //console.log(presentDepositValue);

    const gotDepositValue = presentDepositValue + inputDepositValue;

    existingDepositValue.innerText = gotDepositValue;

    const existingBalanceValue = document.getElementById('balance-total');
    const presentBalanceValueString = existingBalanceValue.innerText;
    const presentBalanceValue = parseFloat(presentBalanceValueString);
    //console.log(presentBalanceValue);

    const totalBalanceValue = presentBalanceValue + inputDepositValue;

    existingBalanceValue.innerText = totalBalanceValue;

    inputDepositField.value = '';
})