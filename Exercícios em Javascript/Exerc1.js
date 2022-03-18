let sinal = 'amarelo';
let paridade = x % 2 === 0 ? 'par' : 'ímpar';
switch(sinal){
    case 'verde' :
        console.log('pode passar');
        break;
    case 'amarelo' :
        console.log('esperar');
        break;
    case 'vermelho' :
        console.log('não pode passar');
        break;
    default:
        console.log('sinal inválido');
}
