const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //verificar se estão preenchidos
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1)
        
        let classificacao = ''; //mensagem referente ao calculo.
        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }else if(valorIMC >= 18.5 && valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns!!'
        }else if(valorIMC >=25 && valorIMC <30){
            classificacao = 'levemente acima do peso.'
        }else if(valorIMC >= 30 && valorIMC <35 ){
            classificacao = 'obesidade grau 1'
        }else if(valorIMC >=35 && valorIMC <41){
            classificacao = 'obesidade grau 2.'
        }else{
            classificacao = 'obesidade grau 3. CUIDADO!!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
    }else{
        resultado.textContent = 'Preencha todos os campos!!'
    }
}
//Qunado o usuario clicar, vai executar a função imc
calcular.addEventListener('click', imc)