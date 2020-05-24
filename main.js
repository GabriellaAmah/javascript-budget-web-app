//DOM elements

let inputedBudget = document.getElementById('budgetAmount');
let insertBudgetButton = document.getElementById('insertBudget');
let budjectText = document.getElementById('budgetText');
let budgetArea = document.getElementById('section1')
let currentBalance = document.getElementById('currentBalance');
let currentExpenses = document.getElementById('currentExpenses');
let feedback = document.getElementById('feedback');
let feedbackBudget = document.getElementById('feedback2')
let expenseText = document.getElementById('expenditureText');
let expenseAmount = document.getElementById('expenditureAmount');
let expenseButton = document.getElementById('expenseButtton');
let expenseArea = document.getElementById('section4');
let resetButton = document.getElementById('reset');



// array of expenses
let arr = [];

//random colors
let colors = ['#ccffcc', '#ff99cc', '#e6ffe6', '#ffb3b3', '#e0ccff', '#d9d9d9']

//function to return random colours
function randomColors(){
    let random;
    for(let i = 0; i < colors.length; i++){
        random = Math.floor(Math.random() * colors.length);
    }

    return colors[random]
}

//function to display alert

function danger(err){
    return   err.hidden = false;   
}

//function to calculate current balance

function currentIncome(){
    let accumulative = arr.reduce((a, b) => a + b)

    currentExpenses.textContent = accumulative;

    let balance = budjectText.textContent - currentExpenses.textContent

   return  currentBalance.textContent =  balance;

}

//function to include budget amaount
insertBudgetButton.addEventListener('click', function(){
    if(inputedBudget.value === ''){
        return ''
    }else{
         budjectText.textContent = inputedBudget.value;
         currentBalance.textContent = inputedBudget.value;
    }

    return (inputedBudget.value = '',
    budgetArea.hidden = true)
})

expenseButton.addEventListener('click', function(){

    if(expenseText.value == '' || expenseAmount.value == ''){
       setInterval(danger(feedback), 1000)
       setTimeout(() => feedback.hidden = true, 3000)
      // setTimeout(clearInterval(timer), 5000)
    }else if(currentBalance.textContent <= 0){
        setInterval(danger(feedbackBudget), 1000)
        setTimeout(() => feedbackBudget.hidden = true, 3000)
    }
    else{

        expenseArea.hidden = false;
        
        let div = document.createElement('div')
        div.className = 'card4'
        div.innerHTML = `<p>${expenseText.value}</p> 
        <p>${expenseAmount.value}</p> `
        expenseArea.appendChild(div);
        div.style.backgroundColor = randomColors()

        
        arr.push(+expenseAmount.value)

        expenseText.value = '';
        expenseAmount.value = '';

        currentIncome()

        
    }


});













