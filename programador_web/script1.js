
const calcularRaiz = (numero) => Math.sqrt(numero);
const calcularCubo = (numero) => numero * numero * numero;
const calcularQuadrado = (numero) => numero * numero;
const operacoes = ["Quadrado", "Cubo", "Raiz"];
const listaOperacoes = document.getElementById("listaOperacoes");
operacoes.forEach(op => {
    const li = document.createElement("li");
    li.textContent = op;
    listaOperacoes.appendChild(li);
});
document.getElementById('numeroForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const operacaoSelecionada = document.getElementById('operacao').value;
    const numero = parseFloat(document.getElementById('numero').value);
    const resultadoOperacao = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultadoOperacao.textContent = "Digite um número válido!";
        return;
    }

    let resultado;

    switch (operacaoSelecionada) {
        case "quadrado":
            resultado = calcularQuadrado(numero);
            break;
        case "cubo":
            resultado = calcularCubo(numero);
            break;
        case "raiz":
            if (numero < 0) {
                resultadoOperacao.textContent = "Não é possível calcular raiz de número negativo!";
                return;
            }
            resultado = calcularRaiz(numero);
            break;
        default:
            resultadoOperacao.textContent = "Escolha uma operação válida!";
            return;
    }

    resultadoOperacao.textContent = `Resultado da operação (${operacaoSelecionada}): ${resultado}`;
});