var katzDeliLine = []
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  var number = katzDeliLine.indexOf(name) + 1
  return(`Welcome, ${name}. You are number ${number} in line.`)
}

function nowServing(katzDeliLine){

    if (katzDeliLine.length===0){
    return('There is nobody waiting to be served!')
  }
    else if(katzDeliLine.length>=1){
    var currentpes
    return("Currently serving "+katzDeliLine.pop(katzDeliLine[0])+".")

    }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
  return("The line is currently empty.")
  }
}
