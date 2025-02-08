var resultElement=document.getElementById("result")
var input1=document.getElementById("inp1")
var input2=document.getElementById("inp2")

function displayAdd(){
var value1=Number(input1.value);
var value2=Number(input2.value);
var addation=value1+value2;
    resultElement.innerHTML=addation;
     input1.value="null";
     input2.value="null";
    
}

function displaySub(){
    var value1=Number(input1.value);
    var value2=Number(input2.value);
    var subtruction=value1-value2;
    resultElement.innerHTML=subtruction;
     input1.value="null";
     input2.value="null";
    
    }

    function displayMul(){
        var value1=Number(input1.value);
        var value2=Number(input2.value);
        var multiblication=value1*value2;
        resultElement.innerHTML=multiblication;
         input1.value="null";
         input2.value="null";        
        }


        function displayDiv(){
            var value1=Number(input1.value);
            var value2=Number(input2.value);
            var division=value1/value2;
            resultElement.innerHTML=division;
             input1.value="null";
             input2.value="null";            
            }

