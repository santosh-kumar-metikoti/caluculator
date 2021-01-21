        function display(val) 
        { 
           document.getElementById("result").value+=val 
        } 

        function solve() 
        { 
            let a = document.getElementById("result").value 
            let b = eval(a) 
            document.getElementById("result").value = b 
        } 

        function clr() 
        {  
          document.getElementById("result").value = "" 
        } 

        function isInputNumber(evt){

            var ch = String.fromCharCode(evt.which);

            if(!(/[0-9]/.test(ch)))
            {
                evt.preventDefault();
            }

        } 
