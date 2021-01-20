function display(val) 
        { 
           document.getElementById("result").value+=val 
        } 

        function solve() 
        { 
            let x = document.getElementById("result").value 
            let y = eval(x) 
            document.getElementById("result").value = y 
        } 

        function clr() 
        { 
            document.getElementById("result").value = "" 
        } 

        function isInputNumber(evt){

            var ch = String.fromCharCode(evt.which);

            if(!(/[0-9]/.test(ch))){
                evt.preventDefault();
            }

        } 
