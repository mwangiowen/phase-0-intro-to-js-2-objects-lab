// Write your solution in this file!
const employee = {
    name: 'John Dear',
    streetAddress: 'OBlock 63rd',
  };
  
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, 
      [key]: value, 
    };
  }
  
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee; 
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; 
    delete newEmployee[key]; 
    return newEmployee; 
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
  }
  
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
  console.log(updatedEmployee);
  
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm Street');
  console.log(destructivelyUpdatedEmployee);
  
  const employeeWithoutName = deleteFromEmployeeByKey(employee, 'name');
  console.log(employeeWithoutName);
  
  const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');