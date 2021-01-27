const loginBtn = document.getElementById('login');
const depositBtn = document.getElementById('deposit');
const withdrawBtn = document.getElementById('withdraw');

loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    const transactionArea = document.getElementById('transaction-area');
    loginArea.style.display = 'none';
    transactionArea.style.display = 'block';
})

depositBtn.addEventListener('click', function () {
    const depositNumber = getInputNumber('depositAmount');

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = '';
})

withdrawBtn.addEventListener('click', function () {
    const withdrawNumber = getInputNumber('withdrawAmount');
    const current = parseFloat(document.getElementById('currentBalance').innerText);

    updateSpanText('currentWithdraw', withdrawNumber);
    document.getElementById('currentBalance').innerText = current - withdrawNumber;

    document.getElementById('withdrawAmount').value = '';
})

function getInputNumber(id) {
    return parseFloat(document.getElementById(id).value);
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}