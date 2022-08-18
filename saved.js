document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newdepositValue = depositField.value;

    

    

    const depositChange = document.getElementById('deposit-ammount');
    const prevdepositamount = depositChange.innerText;
    
    const currentDepositTotal = parseFloat(newdepositValue) + parseFloat(prevdepositamount);
    depositChange.innerText = currentDepositTotal;

    const totalAmountevent = document.getElementById('total-amount');
    const prevtotalAmount = totalAmountevent.innerText;
    const currenttotalAmountevent = parseFloat(prevtotalAmount) + parseFloat(newdepositValue);
    totalAmountevent.innerText = currenttotalAmountevent;
    depositField.value = '';
    
})
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawValue = withdrawField.value;

    const withdrawChange = document.getElementById('withdraw-ammount');
    const prevwithdrawamount = withdrawChange.innerText;
    
    const currentwithdrawTotal = parseFloat(newwithdrawValue) + parseFloat(prevwithdrawamount);
    withdrawChange.innerText = currentwithdrawTotal;

    //Total
    const totalAmountevent = document.getElementById('total-amount');
    const prevtotalAmount = totalAmountevent.innerText;
    const currenttotalAmountevent = parseFloat(prevtotalAmount) - parseFloat(newwithdrawValue);
    totalAmountevent.innerText = currenttotalAmountevent;

    withdrawField.value = '';
})