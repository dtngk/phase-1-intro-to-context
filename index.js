// Your code here
function createEmployeeRecord(empArray){

    const employeeArray = {
        firstName: empArray[0],
        familyName: empArray[1],
        title: empArray[2],
        payPerHour: empArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

    return employeeArray;
}

function createEmployeeRecords(empArray){

    const employeeRecords = [];

    for (let i = 0; i < empArray.length; i++){
        employeeRecords.push(createEmployeeRecord(empArray[i]));
    }    

    return employeeRecords;
}

function createTimeInEvent(empObj, timeStamp){
    const time = timeStamp.split(' ');
    const timeCard = {
        type: "TimeIn",
        hour: parseInt(time[1]),
        date: time[0],  
    }    

    empObj.timeInEvents.push(timeCard);

    return empObj;
}

function createTimeOutEvent(empObj, timeStamp){
    const time = timeStamp.split(' ');
    const timeCard = {
         type: "TimeOut",
         hour: parseInt(time[1]),
         date: time[0],  
    }    
 
    empObj.timeOutEvents.push(timeCard);
 
    return empObj;
}

function hoursWorkedOnDate(empObj, date){

    for (let i = 0; i < empObj.timeOutEvents.length; i++){
        if (empObj.timeOutEvents[i].date === date){
            return ((empObj.timeOutEvents[i].hour - empObj.timeInEvents[i].hour)/100);
        }
    }

    return null;
}

function wagesEarnedOnDate(empObj, timeStamp){
    const hours = hoursWorkedOnDate(empObj, timeStamp);
    
    return (hours * empObj.payPerHour);
}

function allWagesFor(empObj){
    let total = 0;

    for(let i = 0; i < empObj.timeOutEvents.length; i++){
        total += (((empObj.timeOutEvents[i].hour - empObj.timeInEvents[i].hour)/100) * empObj.payPerHour)
    }

    return total;
}

function calculatePayroll(empObj){
    let total = 0;

    for (let index = 0; index < empObj.length; index++){
        for(let i = 0; i < empObj[index].timeOutEvents.length; i++){
            total += (((empObj[index].timeOutEvents[i].hour - empObj[index].timeInEvents[i].hour)/100) * empObj[index].payPerHour)
        }
    }
    return total;

}
