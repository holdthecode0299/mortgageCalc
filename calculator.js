// p = Amount Borrowed 
// r = Interest Rate (%)
// n term = Years (months)

function calculateMortgage(p, r, n) {

    // convert percentage to decimal 
    r = percentToDecimal(r);

    // converty years to months 
    n = yearstoMonths(n);

    const monthlyPayments = ((r * p) / (1 - (Math.pow((1 + r), (-n)))));

    // const monthlyPayments = ((6.5/100/12 * 200000) / (1 - Math.pow((1 + (6.5/100/12)), (-30*12))));

    return parseFloat(monthlyPayments.toFixed(2));
} 

// convert percent to decimal
function percentToDecimal (percent) {
    return (percent/12)/100;
}

function yearstoMonths(year) {
    return year * 12;
}

function postPayments(payment) {
    const total = document.getElementById("outMonthly");

    total.innerText = "$" + payment;
}

const btn = document.getElementById("btnCalculate");
btn.onclick = function() {
    event.preventDefault()
    const cost = document.getElementById("inCost").value;

    if (cost == "") {
        alert ("Enter property cost")
    }
    if (cost <= 0) {
        alert ("Invalid cost");
        return false;
    }

    const downPayment = document.getElementById("inDown").value;
    const interest = document.getElementById("inAPR").value;
    const term = document.getElementById("inPeriod").value;

    const amountBorrowed = cost - downPayment; 
    const monthlyPayments = calculateMortgage(amountBorrowed, interest, term);

    postPayments(monthlyPayments);
};