function mostra(){
    const txtIdade = document.querySelector("#txtIdade").value

    if (txtIdade >18) {
    document.write("Idade Maior que 18")
    }else if(txtIdade == 18){
    document.write("Idade igual a 18")
    }else{
    document.write("Menor que 18")
    }
}