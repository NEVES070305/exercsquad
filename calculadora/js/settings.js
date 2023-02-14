var salario-bruto = Number(window.document.getElementById("#salario-bruto")); //adquire o valor do salario digitado
var desconto-irrf//desconto sem considerar a quantidade de dependentes 
var dependentes = Number(window.document.getElementById("#dependentes")); //recebe a quantia de pessoas dependentes
var soma-dependentes = 0;//quanto à menos de desconto a depender dos dependentes

//IRRF
//Calculo IRRF
switch (true) {
    case salario-bruto.toFixed(2).replace(',','.')<1903.98:
        desconto-irrf = 0;
        soma-dependentes = dependentes*0;
        break;
    case 1903.98<salario-bruto.toFixed(2).replace(',','.')<=2826.65:
        desconto-irrf = 7.5/100 * salario-bruto.toFixed(2).replace(',','.');
        soma-dependentes = dependentes*134.08;
        break;
    case 2826.65<salario-bruto.toFixed(2).replace(',','.')<=3751.05:
        desconto-irrf = 15/100 * salario-bruto.toFixed(2).replace(',','.');
        soma-dependentes = dependentes*335.03;
        break;
    case 3751.05<salario-bruto.toFixed(2).replace(',','.')<=4664.68:
        desconto-irrf = 22.5/100 * salario-bruto.toFixed(2).replace(',','.');
        soma-dependentes = dependentes*602.96;
        break;
    case 4664.68<salario-bruto.toFixed(2).replace(',','.'):
        desconto-irrf = 27.5/100 * salario-bruto.toFixed(2).replace(',','.');
        soma-dependentes = dependentes*869.36;
        break;
    default:
        break;
}

var irrf = Number(desconto-irrf) -  Number.parseFloat(soma-dependentes); //desconto ou abono do irrf
var irrf-vdd


if (irrf<0) {
    irrf-vdd = 0
} else{
    irrf-vdd = irrf
}

//variáveis globais necessárias para serem apresentadas na tabela
var vale-transporte 
var INSS 

//Para simplificação, aqui a variáveis que pegam os elementos da tabela a serem substituidos:
var substitui-salario = window.document.getElementById("#sal") //adiciona o valor a tabela
var substitui-INSS = window.document.getElementById("");
var substitui-irrf = window.document.getElementById(""); 
var substitui-vale-transporte = window.document.getElementById("");
var substitui-salario-liquido = window.document.getElementById("");

//Cálculo INSS
switch (true) {
    case salario-bruto<=1302.00:
        INSS = salario-bruto*7.5/100
        break;
    case 1302.00<salario-bruto<2571.30:
        INSS = salario-bruto*9/100
        break;
    case 2571.30<=salario-bruto<=3856.94:
        INSS = salario-bruto*12/100
        break;
    case 3856.95<=salario-bruto<=7507.49:
        INSS = salario-bruto*14/100
        break;
            
    default:
        INSS = 7507.49*14/100
        break;
}

if (condition) {
    0.06*salario-bruto = vale-transporte
}

//Cáculo do salário líquido
var salario-liquido = Number(salario-bruto) - Number(INSS) - Number(vale-transporte) - Number(irrf-vdd)


//Visualização na tabela
substitui-salario.innerHTML = `${salario-bruto.toFixed(2).replace('.',',')}`
substitui-INSS.textContent = `${INSS.toFixed(2).replace('.',',')}`
substitui-irrf.textContent.textContent = `${irrf-vdd.toFixed(2).replace('.',',')}`
substitui-vale-transporte.textContent = `${vale-transporte.toFixed(2).replace('.',',')}`
substitui-salario-liquido.textContent = `${salario-liquido.toFixed(2).replace('.',',')}`