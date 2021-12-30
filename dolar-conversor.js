

//lógica pro cálculo
function convert(){
    let input = Number(document.querySelector('input#input-value').value)
    let output = document.querySelector('input#output-value')
    let radios = document.getElementsByName('radio')
    let check = ""
    let exchange_rate = Number(document.querySelector('input#exchange').value)

    for(let i=0 ; i < radios.length; i++){
        if(radios[i].checked == true){
        check = radios[i].value 
        }
    }
    if(check==""){
        window.alert("Select a valid conversor!")
    }
    else if(check == "Real>Dolar"){
        output.value = convert1(input, exchange_rate)
    }
    else if(check == "Dolar>Real"){
        output.value = convert2(input,exchange_rate)
    } 
}

function convert1(a,b){
    return a/b
    
}

function convert2(a,b){
    return a*b

}

