// code your solution here

//1
function saturdayFun(word="roller-skate"){
    return `This Saturday, I want to ${word}!`

};

saturdayFun();
saturdayFun("watching movie");

//2
function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`

};

mondayWork();
mondayWork("study lesson");

//3
function wrapAdjective(adj="%"){
    return function(message="a dedicated programmer"){
        return `You are ${adj}${message}${adj}!`
    }

};

wrapAdjective();

