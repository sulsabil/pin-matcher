// get pin
function getPin(){
    var getPin = Math.random()*10000;
    var pinNumber = (getPin + '').split('.')[0];
    if(pinNumber.length === 4){
        return pinNumber;
    }
    else{
        return getPin();
    }
    
}
 //display generate pin
    document.getElementById("generate-pin").addEventListener('click',function(){
        var pin = document.getElementById("pin");
        pin.value = getPin();
    });

    document.getElementById("digit-container").addEventListener("click", function(event){
        const digit = event.target.innerText;
        if(isNaN(digit)){
            //handle back
            if(digit === 'B'){
                var show = document.getElementById("show").value;
              var  newShow = show.slice(0,-1);
              document.getElementById("show").value = newShow;
   
            }
            //handle clear
          if(digit === 'C'){
            var show = document.getElementById("show");
            show.value = '';
          }

        }else{
            var show = document.getElementById("show");
            show.value = show.value + digit;
        }

    })

   //verify pin 
   
document.getElementById("submit").addEventListener('click', function(){
    verify();
});


   function verify(){
    var pin = document.getElementById("pin").value;
    var pinInput = document.getElementById("show").value;
    if(pin === pinInput){
        pinMatch('block','none');
    }
    else{
       pinMatch('none','block'); 
       document.getElementById("try").style.display = "block";
        var tryOutNumber = Number(document.getElementById("tryOutNumber").innerText);
        var tryOutLimit = tryOutNumber - 1;

        if (tryOutNumber > 0){
            document.getElementById("tryOutNumber").innerText = tryOutLimit;
        }
        else {
            document.getElementById("try").style.display = "none";
            document.getElementById("try").innerText = "sorry! try again after some time ";

        }
    }
   }


function pinMatch(correctStatus , incorrectStatus){
    const correct = document.getElementById("correct");
        correct.style.display = correctStatus;
        const incorrect = document.getElementById("incorrect");
        incorrect.style.display = incorrectStatus;
        
}

