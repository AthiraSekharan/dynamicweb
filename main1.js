const calculate =document.querySelector('.calculate');
const resetbtn =document.querySelector('.reset');


calculate.addEventListener('click',(e)=>{
e.preventDefault();
let billAMt = document.getElementById('amount').value;
let percentage = document.getElementById('dpercentage').value;

let discountAmt = document.getElementById('discountamount');
let finalpay = document.getElementById('pay');


discountAmt.value = billAMt * percentage / 100;

finalpay.value = billAMt - discountAmt.value


})
resetbtn.addEventListener('click',()=>{
    window.location.reload();

})