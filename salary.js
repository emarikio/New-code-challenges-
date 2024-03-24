function calculateNetSalary(taxableIncome) {
    grossSalary = taxableIncome - (taxableIncome * taxRate)
    netSalary = grossSalary - (grossSalary * taxRate)
}
function calculateTaxRate(taxableIncome) {
    if (taxableIncome <= 250000) {
        taxRate = 0
    }else if (taxableIncome > 250000 && taxableIncome <= 500000) {
        taxRate = 5
    }else if (taxableIncome > 500000 && taxableIncome <= 1000000) {
        taxRate = 20
    }else if (taxableIncome > 1000000) {
        taxRate = 30
    }else{
        console.log("Invalid Taxable Income")
    }
}