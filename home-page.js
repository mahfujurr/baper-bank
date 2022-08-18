function getInputFieldValueBYId(inputFieldId){
        const inputField = document.getElementById(inputFieldId);
        const inputFieldIdstring = inputField.value;
        const inputFieldValue = parseFloat(inputFieldIdstring);
        inputField.value = '';
        return inputFieldValue;
    
}

function getElementValueById(elementId){
    const textelementId = document.getElementById(elementId);
    const elementIdString = textelementId.innerText;
    const value = parseFloat(elementIdString);
    return value;
}

function setTextElementById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueBYId('deposit-field');
    const prevDepositTotal = getElementValueById('deposit-amount');
    const newDepositTotal = newDepositAmount + prevDepositTotal;
    setTextElementById('deposit-amount', newDepositTotal);

    const prevtotalAmount = getElementValueById('total-amount');

    
    const newTotal = prevtotalAmount + newDepositAmount;

    setTextElementById('total-amount', newTotal);
    
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueBYId('withdraw-field');
    const prevDepositTotal = getElementValueById('withdraw-amount');
    const newDepositTotal = newDepositAmount + prevDepositTotal;
    setTextElementById('withdraw-amount', newDepositTotal);

    const prevtotalAmount = getElementValueById('total-amount');

    
    const newTotal = prevtotalAmount - newDepositAmount;

    setTextElementById('total-amount', newTotal);
    
})