let hPoints = document.getElementById("h-score")
let gPoints = document.getElementById("g-score")

let hScore = 0
let gScore = 0
function add1h(){
  hScore +=1 
  hPoints.textContent = hScore
}
function add2h(){
  hScore +=2 
  hPoints.textContent = hScore
}
function add3h(){
  hScore +=3 
  hPoints.textContent = hScore
}

function add1g(){
  gScore +=1 
  gPoints.textContent = gScore
}
function add2g(){
  gScore +=2 
  gPoints.textContent = gScore
}
function add3g(){
  gScore +=3 
  gPoints.textContent = gScore
}

let hFoulBoard = document.getElementById("hfoulboard")
let gFoulBoard = document.getElementById("gfoulboard")

let hFoul = 0
let gFoul = 0
function addhFoul(){
  hFoul += 1
  hFoulBoard.textContent = hFoul
}
function addgFoul(){
  gFoul += 1
  gFoulBoard.textContent = gFoul
}

let nextPeriod = document.getElementById("period-board")
let previousPeriod = document.getElementById("period-board")
let actualPeriod = 1 
function nextQuater(){
  actualPeriod += 1
  nextPeriod.textContent = actualPeriod
}
function previousQuater(){
  actualPeriod -= 1
  previousPeriod.textContent = actualPeriod
}

function reset(){
  hPoints.textContent = 0
  hScore = 0 
  gPoints.textContent = 0
  gScore = 0
  nextPeriod.textContent = 1
  previousPeriod.textContent = 1
  actualPeriod = 1
  hFoulBoard.textContent = 0
  hFoul = 0
  gFoulBoard.textContent = 0
  gFoul = 0
}
