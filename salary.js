// Function to calculate PAYE 
function calculatePAYE(salary) {
    let tax = 0;
    if (salary <= 24000) {
        tax = 0.1 * salary;
    }else if (salary <= 32333) {
        tax = 2400 + (0.25 * (salary - 24000));
    }else if (salary <= 40417) {
        tax = 5308 + (0.3 * (salary - 32333));
    }else if (salary <= 57167) {
        tax = 8508 + (0.3 * (salary - 40417));
    }else if (salary <= 68200) {
        tax = 13608 + (0.3 * (salary - 57167));
    }else {
        tax = 19008 + (0.3 * (salary - 68200));
    }
    return tax;
}

// Function to calculate NHIF deductions
function calculateNHIF(salary) {
    let nhif = 0;
    if (salary < 6000) {
        nhif = 150;
    } else if (salary <= 8000) {
        nhif = 300;
    } else if (salary <= 12000) {
        nhif = 400;
    } else if (salary <= 15000) {
        nhif = 500;
    } else if (salary <= 20000) {
        nhif = 600;
    } else if (salary <= 25000) {
        nhif = 750;
    } else if (salary <= 30000) {
        nhif = 850;
    } else if (salary <= 35000) {
        nhif = 900;
    } else if (salary <= 40000) {
        nhif = 950;
    } else if (salary <= 45000) {
        nhif = 1000;
    } else if (salary <= 50000) {
        nhif = 1100;
    } else if (salary <= 60000) {
        nhif = 1200;
    } else if (salary <= 70000) {
        nhif = 1300;
    } else if (salary <= 80000) {
        nhif = 1400;
    } else if (salary <= 90000) {
        nhif = 1500;
    } else if (salary <= 100000) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}

// Function to calculate net salary
function calculateNSSF(salary) {
    let nssf = 0;
    if (salry <= 6000) {
        nssf = 0.06 * salary;
    }else if (salary <= 18000) {
        nssf =360;
    }else {
        nssf = 720;
    }
    return nssf;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const PAYE = calculatePAYE(grossSalary);
    const NHIF = calculateNHIF(grossSalary);
    const NSSF = calculateNSSF(grossSalary);
    const deductions = PAYE + NHIF + NSSF;
    const netSalary = grossSalary - deductions;
    return netSalary;
}
