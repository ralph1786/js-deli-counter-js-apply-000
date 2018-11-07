//Following empty array represents the number of customers when deli opens.
let ralphDeliLine = [];

function takeANumber(ralphDeliLine, number){
    //Following line will add customer to end of array using the push method.
    for(let i=1; i < 99; i++){
      return `Welcome, you are number ${i}`;
    }
  ralphDeliLine.push(number);
  return `Welcome, you are number ${number}`;
}

function nowServing(ralphDeliLine){
  if(ralphDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    //Used shift to remove and then return the first item in array.
    return `Currently serving ${ralphDeliLine.shift()}.`
  }
}

function currentLine(ralphDeliLine){
  let customerLine = [];
  for(let i = 0; i < ralphDeliLine.length; i++){
    customerLine.push(' '+ [i + 1] +'. ' + ralphDeliLine[i]);
  }if(ralphDeliLine.length === 0){
    return 'The line is currently empty.'
  }else {
    return 'The line is currently:' + customerLine;
  }
}

//console.log(currentLine(["Michael", "Sarah", "Jonathan"]))
//console.log(currentLine(["Alex", "Tom", "Avery"]))



