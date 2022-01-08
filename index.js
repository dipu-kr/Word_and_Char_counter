
        var text = document.getElementById("text");
        var mybtn = document.getElementById("btn");

    
        text.addEventListener('input', function(){
            let val = this.value;
            let char = val.length;
            document.getElementById("char").innerHTML = char;
        });
        text.addEventListener('input', function(){
            let val = this.value;
            let getval = val.trim()
            let result = val.split(" ");
            let result1 = result.filter((ele) =>{
                if(ele != " "){
                    return ele;
                }
            })
            document.getElementById("word").innerHTML = result1.length;
        })
        // **************** button *************
        function myBtn(){
            document.getElementById("text").value ="";
            document.getElementById("word").innerHTML = 0;
            document.getElementById("char").innerHTML = 0;
        }
        
    