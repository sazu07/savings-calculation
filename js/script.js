
function addExpance(){
    const income= document.getElementById('income').value;
    const totalExpance=document.getElementById('total-expense');
    const food=document.getElementById('food').value;
    const rent= document.getElementById('rent').value;
    const cloth=document.getElementById('clothes').value;
    const expances= parseFloat(food)+parseFloat(rent)+parseFloat(cloth);
    totalExpance.innerText=expances;
    const balanceField= document.getElementById('balance');
    const balance= income-expances;
    balanceField.innerText=balance
  
}



function calculateSavings(){

 const balanceAmountField=document.getElementById('balance');
 const balanceAmount=parseFloat(balanceAmountField.innerText);
 const saves=document.getElementById('save').value;
 const saveBalance= (balanceAmount * parseFloat(saves))/100
 const saveAmount =document.getElementById('saving-amount');
 saveAmount.innerText = saveBalance;
  const remainBalance= balanceAmount-saveBalance
  const fainalBalance=document.querySelector(".remaining-balance");
  fainalBalance.innerText=remainBalance;
  
 
 
 


}



document.getElementById('calculate-btn').addEventListener('click', function(){
    addExpance();
})