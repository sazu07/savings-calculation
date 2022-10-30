
function addExpance(){
   
    
    const food=document.getElementById('food').value;
    const rent= document.getElementById('rent').value;
    const cloth=document.getElementById('clothes').value;
    if(food<0 || food=='' ||  rent<0||rent==''|| cloth<0 || cloth==''){
        alert('input must be a posivet value')
        return;
    }
    
    const income= document.getElementById('income').value;
    const totalExpance=document.getElementById('total-expense');
    const expances= parseFloat(food)+parseFloat(rent)+parseFloat(cloth);
    if(income<expances){
        alert('Income must be greater than expense');
        return;
    }
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
document.getElementById('calculate-Savings').addEventListener('click', function(){
    calculateSavings();
})



document.getElementById('calculate-btn').addEventListener('click', function(){
    addExpance();
})