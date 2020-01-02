function createAddEvent(){
    document.querySelector(".getInput button").addEventListener("click", function(e){
        let val = document.querySelector(".getInput input").value;
        console.log(val)
        document.querySelector(".getInput input").value = "";
        if(val.trim != "")
            addToDos();
    });
}

function addToDos(){
    
}

(function(){

})();