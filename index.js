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



//2
// function mondayWork(work){
//     if(typeof work==="string"){
//         console.log(`This Monday, I will ${work}.`);
//     }
//     else if(typeof work==="undefined"){
//         let working="go to the office"
//         console.log(`This Monday, I will ${working}.`);
//     }
//     else{
//         let working="work from home"
//         console.log(`This Monday, I will ${working}.`);
//     }
// };

// mondayWork("study lesson");
// mondayWork();