// code your solution here
function saturdayFun(fun = "roller-skate"  ){
    return `This Saturday, I want to ${fun}!`
}
console.log(saturdayFun("bathe my dog"))

function mondayWork(schedule = "go to the office"){
    return `This Monday, I will ${schedule}.`
}
console.log(mondayWork("work from home"))

// function wrapAdjective(adjective = "*"){
//     // let result = wrapAdjective(adjective)
//     let emphatic ="a hard worker"
//     return `You are ${adjective}${emphatic}${adjective}!`
// }

function wrapAdjective(special = "*"){
    function emphatic(comp = "a hard worker"){
        let result = `${special}${comp}${special}`
        return `You are ${result}!`

    }
    return emphatic
}
console.log(wrapAdjective('*'))
