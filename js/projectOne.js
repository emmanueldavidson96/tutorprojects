// Salary Calculation For Workers
const btnOperator = document.getElementById("calculateBtn");

// A function that helps you calculate user remainder salary
function calculateEmployeeSalary(salary, billOne, billTwo, billThree, employeeName){
    // process one: get the remainder from the salary after taking out the bills from the initial salary
    const calculatedAmount = salary - (billOne + billTwo + billThree);
    // grab the employees tag from the input tag that corresponds to it
    
    // output the calculated salary inside the total_salary_after_calculation p tag
    document.getElementById("total_salary_after_calculation").innerHTML = employeeName + ", Your remainder salary is " + calculatedAmount;
}

btnOperator.addEventListener("click", () => {
    const salary = (document.getElementById("salary").value);
    const billOne = parseFloat(document.getElementById("billOne").value);
    const billTwo = parseFloat(document.getElementById("billTwo").value);
    const billThree = parseFloat(document.getElementById("billThree").value);
    const employeeName = document.getElementById("employeeName").value;

    calculateEmployeeSalary(salary, billOne, billTwo, billThree, employeeName);
    
})


