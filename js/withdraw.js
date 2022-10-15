//console.log('This is withdraw');

document.getElementById('btn-withdraw').addEventListener('click', function () {
    //console.log('Withdraw Button Clicked');

    const inputWithdrawField = document.getElementById('withdraw-field');
    const inputWithdrawValueString = inputWithdrawField.value;
    const inputWithdrawValue = parseFloat(inputWithdrawValueString);
    //console.log(inputWithdrawValue);

    const existingWithdrawValue = document.getElementById('withdraw-total');
    const presentWithdrawValueString = existingWithdrawValue.innerText;
    const presentWithdrawValue = parseFloat(presentWithdrawValueString);
    //console.log(presentWithdrawValue);

    const gotWithdrawValue = presentWithdrawValue + inputWithdrawValue;

    existingWithdrawValue.innerText = gotWithdrawValue;

    // const inputDepositField = document.getElementById('user-deposit');
    // const inputDepositValueString = inputDepositField.value;
    // const inputDepositValue = parseFloat(inputDepositValueString);

    const existingBalanceValue = document.getElementById('balance-total');
    const presentBalanceValueString = existingBalanceValue.innerText;
    const presentBalanceValue = parseFloat(presentBalanceValueString);

    //const totalBalanceValue = presentBalanceValue + inputDepositValue;

    const balanceAfterWithdraw = presentBalanceValue - inputWithdrawValue;

    existingBalanceValue.innerText = balanceAfterWithdraw;

    inputWithdrawField.value = '';
})