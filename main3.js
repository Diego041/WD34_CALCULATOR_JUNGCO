let massFrom = document.getElementById('massFrom');
let massTo = document.getElementById('massTo');
let inputed = document.getElementById('inputed');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
btn.addEventListener('click', function(){
    //gram to gram
    if(massFrom.selectedIndex == 1 && massTo.selectedIndex == 1){
        let g = inputed.value;
        result.style.display="block";
        result.innerHTML = g + " g";
      }
      //gram to kilogram
    else if(massFrom.selectedIndex == 1 && massTo.selectedIndex == 2){
      let x = inputed.value/1000;
      result.style.display="block";
      result.innerHTML = x + " kg";
    }
     //gram to pounds
    else if(massFrom.selectedIndex == 1 && massTo.selectedIndex == 3){
        let y = inputed.value/453.6;
      result.style.display="block";
      result.innerHTML = y + " pounds";
    }
    //kilogram to grams
    else if(massFrom.selectedIndex == 2 && massTo.selectedIndex == 1){
        let kg = inputed.value * 1000;
        result.style.display="block";
        result.innerHTML = kg + " g";
      }
      //kilogram to kilogram
    else if(massFrom.selectedIndex == 2 && massTo.selectedIndex == 2){
      let k = inputed.value;
      result.style.display="block";
      result.innerHTML = k + " kg";
    }
    //kilogram to pounds
    else if(massFrom.selectedIndex == 2 && massTo.selectedIndex == 3){
      let p = inputed.value*2.205;
      result.style.display="block";
      result.innerHTML = p + " pounds";
    }
    // pounds to grams
    else if(massFrom.selectedIndex == 3 && massTo.selectedIndex == 1){
        let kg = inputed.value * 1000000;
        result.style.display="block";
        result.innerHTML = kg + " g";
      }
      //pounds to kilogram
    else if(massFrom.selectedIndex == 3 && massTo.selectedIndex == 2){
      let k = inputed.value /2.205;
      result.style.display="block";
      result.innerHTML = k + " kg";
    }
    //pounds to pounds
    else if(massFrom.selectedIndex == 3 && massTo.selectedIndex == 3){
      let p = inputed.value;
      result.style.display="block";
      result.innerHTML = p + " pounds";
    }
    
})