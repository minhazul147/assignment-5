// Donate Now button
document.getElementById('btn-donate').addEventListener('click', function(){
    console.log('btn clicked')

    const donateAmount = getInputFieldvalueById('input-addmoney');
    console.log('add Money', donateAmount)

    if(donateAmount === Number){

        const balance = getTextFieldValueById('account-balance');
        console.log(balance, donateAmount)
        
    }
  if(isNaN(donateAmount) || donateAmount <=0){
    alert('Something wrong')
  }
})

document.getElementById('btn-donate').addEventListener('click', function(){

})