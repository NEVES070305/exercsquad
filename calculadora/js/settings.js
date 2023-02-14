var salario_bruto = Number(window.document.getElementById("#salario-bruto")); //adquire o valor do salario digitado
var desconto_irrf//desconto sem considerar a quantidade de dependentes 
var dependentes = Number(window.document.getElementById("#dependentes")); //recebe a quantia de pessoas dependentes
var soma_dependentes = 0;//quanto à menos de desconto a depender dos dependentes

var bt = document.getElementById('#button')
//bt.addEventListener('click', mostrar)

//IRRF
//Calculo IRRF
function mostrar(){
    switch (true) {
    case salario_bruto.toFixed(2).replace(',','.')<1903.98:
        desconto_irrf = 0;
        soma_dependentes = dependentes*0;
        break;
    case 1903.98<salario_bruto.toFixed(2).replace(',','.')<=2826.65:
        desconto_irrf = 7.5/100 * salario_bruto.toFixed(2).replace(',','.');
        soma_dependentes = dependentes*134.08;
        break;
    case 2826.65<salario_bruto.toFixed(2).replace(',','.')<=3751.05:
        desconto_irrf = 15/100 * salario_bruto.toFixed(2).replace(',','.');
        soma_dependentes = dependentes*335.03;
        break;
    case 3751.05<salario_bruto.toFixed(2).replace(',','.')<=4664.68:
        desconto_irrf = 22.5/100 * salario_bruto.toFixed(2).replace(',','.');
        soma_dependentes = dependentes*602.96;
        break;
    case 4664.68<salario_bruto.toFixed(2).replace(',','.'):
        desconto_desconto_irrf = 27.5/100 * salario_bruto.toFixed(2).replace(',','.');
        soma_dependentes = dependentes*869.36;
        break;
    default:
        break;
    }

    var desconto_irrf = Number(desconto_desconto_irrf) -  Number.parseFloat(soma_dependentes); //desconto ou abono do irrf
    var desconto_irrf_vdd


    if (desconto_irrf<0) {
        desconto_irrf_vdd = 0
    } else{
        desconto_irrf_vdd = desconto_irrf
    }

    //variáveis globais necessárias para serem apresentadas na tabela
    var vale_transporte 
    var INSS 

    //Para simplificação, aqui a variáveis que pegam os elementos da tabela a serem substituidos:
    var substitui_salario = window.document.getElementById("#sal") //adiciona o valor a tabela
    var substitui_INSS = window.document.getElementById("#inss");
    var substitui_desconto_irrf = window.document.getElementById("#irrf"); 
    var substitui_vale_transporte = window.document.getElementById("#vale");
    var substitui_salario_liquido = window.document.getElementById("#saliquido");

    //Cálculo INSS
    switch (true) {
        case salario_bruto<=1302.00:
            INSS = salario_bruto*7.5/100
            break;
        case 1302.00<salario_bruto<2571.30:
            INSS = salario_bruto*9/100
            break;
        case 2571.30<=salario_bruto<=3856.94:
            INSS = salario_bruto*12/100
            break;
        case 3856.95<=salario_bruto<=7507.49:
            INSS = salario_bruto*14/100
            break;
                
        default:
            INSS = 7507.49*14/100
            break;
    }

    /*if (condition) {
        0.06*salario-bruto = vale-transporte
    }*/

    //Cáculo do salário líquido
    var salario_liquido = Number(salario_bruto) - Number(INSS) - Number(vale_transporte) - Number(desconto_irrf_vdd)


    //Visualização na tabela
    substitui_salario.innerHTML = `${salario_bruto.toFixed(2).replace('.',',')}`
    substitui_INSS.textContent = `${INSS.toFixed(2).replace('.',',')}`
    substitui_desconto_irrf.textContent = `${desconto_irrf_vdd.toFixed(2).replace('.',',')}`
    substitui_vale_transporte.textContent = `${vale_transporte.toFixed(2).replace('.',',')}`
    substitui_salario_liquido.textContent = `${salario_liquido.toFixed(2).replace('.',',')}`
}