// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "1234 This House",
}

function updateEmployeeWithKeyAndValue(emp, key, value) {
    const newEmp = { ...emp };

    newEmp[key] = value;

    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
    emp[key] = value;

    return emp;
}

function deleteFromEmployeeByKey(emp, key) {
    const newDelEmp = { ...emp };

    delete newDelEmp[key];

    return newDelEmp;
}

function destructivelyDeleteFromEmployeeByKey(emp, key) {
    delete emp[key];

    return emp;
}



