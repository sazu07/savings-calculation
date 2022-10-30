
function addExpance(){
    const incomeField= document.getElementById('income');
    const income= parseFloat(incomeField.value);
    const foodField=document.getElementById('food');
    const foodExpance=parseFloat(foodField.value);
    const rentField= document.getElementById('rent');
    const rentExpance= parseFloat(rentField.value);
    const clothField=document.getElementById('clothes');
    const clothExpance=parseFloat(clothField.value);
    const totalExpance=document.getElementById('total-expense');
    const expances= foodExpance+rentExpance+clothExpance;
    totalExpance.innerText=expances;
    const balanceField= document.getElementById('balance');
    const balance= income-expances;
    balanceField.innerText=balance



   
}

function calculateSavings(){

 const balanceAmountField=document.getElementById('balance');
 const balanceAmount=parseFloat(balanceAmountField.innerText);
 console.log(balanceAmount)
 const saveField=document.getElementById('save');
 const saveAmountBalance =parseFloat(saveField.value);
 console.log(saveAmountBalance)
 
 const saveBalance= (balanceAmount * saveAmountBalance)/100
 const totalSave=parseFloat(saveBalance)
 console.log(totalSave)
 const saveAmount =document.getElementById('saving-amount');
 saveAmount.innerText = totalSave;
  const remainBalance= balanceAmount-totalSave
  console.log(remainBalance)
  const fainalBalance=document.querySelector(".remaining-balance");
  fainalBalance.innerText=remainBalance;
  
 
 
 


}



document.getElementById('calculate-btn').addEventListener('click', function(){
    addExpance();
})