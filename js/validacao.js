function validacao(){

    let nome=document.getElementById("i_nome");
    let sobrenome=document.getElementById("i_sobrenome");
    let data=document.getElementById("i_data");
    let senha=document.getElementById("i_senha");

    input_style(nome);
    input_style(sobrenome);
    input_style(data);
    input_style(senha);

}

function input_style(input){

    if(!input.checkValidity()){
        input.style.border = "2px solid red";
        input.style.backgroundColor = "#fdc1c1";
    }else{
        input.style.border = "1px solid gray";
        input.style.backgroundColor = "white";
    }

    return input.style.border;
}