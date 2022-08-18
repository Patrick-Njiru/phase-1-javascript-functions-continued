// code your solution here
function saturdayFun(activity) {
    if ( activity) {
        return `This Saturday, I want to ${activity}!`
    }
    else {
        return 'This Saturday, I want to roller-skate!'
    }
}

function mondayWork(activity) {
    if (activity) {
        return `This Monday, I will ${activity}.`
    }
    else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(initializer) {
   return function () {
    if (initializer === "||") {
        let result = '||a dedicated programmer||'
        let emphatic = `You are ${result}!`
        return emphatic
    }
    else if (initializer === '*') {
        let  result = '*a hard worker*'
        let emphatic = `You are ${result}!`
        return emphatic
    }
   }
}
console.log(wrapAdjective('*'));