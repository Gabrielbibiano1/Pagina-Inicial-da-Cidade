let anoNascimento = "1996";
let anoAtual = "2022";
let idade = anoAtual - anoNascimento - 1;

if (anoNascimento == "" && anoAtual == "" || anoNascimento == "" && anoAtual >= 1 || anoNascimento >= 1 && anoAtual == ""){
    console.log("Calcule colocando datas.");
}
if (anoNascimento == 0 && anoAtual == 0 || idade == 0){
    console.log("É necessário ter datas para se calcular.");
}
if (anoNascimento >= 1){
    if (idade >= 65){
        console.log("Você tem aproximadamente");
        console.log(idade);
        console.log("ano(s).");
        console.log("Você é idoso.");
    }
    else if (idade >= 18 && idade <= 64){
        console.log("Você tem aproximadamente");
        console.log(idade);
        console.log("ano(s).");
        console.log("Você é maior de idade.");
    }
    else if (idade == 17){
        console.log("Você tem aproximadamente");
        console.log(idade);
        console.log("ano(s).");
        console.log("Você está prestes a virar adulto.");
        alert("É hora de se alistar!");
    }
    else if (idade >= 1 && idade <= 16){
        console.log("Você tem aproximadamente");
        console.log(idade);
        console.log("ano(s).");
        console.log("Você é menor de idade.");
    }
    else if (idade < 0){
        console.log("Não é possível calcular números negativos.");
    }
    else{
        console.log("Fim");
    }
}