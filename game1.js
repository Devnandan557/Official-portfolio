    dateValue = new Date();
    dateValue.setHours(0);
    dateValue.setMinutes(0);
    dateValue.setSeconds(0,0);
    setInterval(function(){
        document.getElementById('h').innerHTML = dateValue.getHours();
        document.getElementById('m').innerHTML = dateValue.getMinutes();
        document.getElementById('s').innerHTML = dateValue.getSeconds();
        dateValue.setTime(dateValue.getTime() + 1000);
    },1000);

    //if(cardsWon.length === cardArray.length/2){
      //  alert("congrats you completed this game in"+dateValue.getHours(),"+",dateValue.getMinutes(),"+",dateValue.getSeconds());
        // document.getElementById('final').textContent = dateValue;    
    //}
    function myfun(){
        var h = document.getElementById('final');
        h.insertAdjacentHTML("afterbegin",
        `<input type='text' value='name'><br>        
        `) 
        
    }
    h.innerHTML = dateValue;
    
    
    