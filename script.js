const loanAmountEl=document.getElementById('loan-amount');
const interestRateEl=document.getElementById('interest-rate');
const monthsToPayEl=document.getElementById('months-to-pay');
const paymentEl=document.getElementById('payment');


function calculateLoan(params) {
 
 interest=loanAmountEl.value*interestRateEl.value*0.01/monthsToPayEl.value;

 monthlyPayment=(loanAmountEl.value/monthsToPayEl.value+interest).toFixed(2)

 paymentEl.innerHTML=`Montly Payment:${monthlyPayment}`
}