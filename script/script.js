// === ÁREA DO ALUNO === //

//Limpeza de cadastro
function limparCadastro() {
    const nome = document.getElementById('inputNome').value;
    const processado = nome.trim().split(" ")[0].toLowerCase();
    document.getElementById('resultadoNome').innerText = processado;
  }

  //Validação de email
  function validarEmail() {
    const email = document.getElementById('inputEmail').value;
    const ehValido = email.endsWith("@gmail.com");
    document.getElementById('resultadoEmail').innerText = ehValido ? "Válido (Gmail)" : "Inválido";
  }

  //Mascarar cartão
  function mascararCartao() {
    const num = document.getElementById('inputCartao').value;
    const mascarado = num.slice(-4).padStart(16, "*");
    document.getElementById('resultadoCartao').innerText = mascarado;
  }

  //Localizar usuário
  function localizarUsuario() {
    const str = "admin:felipe:gerente";
    const primeiro = str.indexOf(":");
    const ultimo = str.lastIndexOf(":");
    document.getElementById('resultadoLocalizacao').innerText = `Primeiro: ${primeiro}, Último: ${ultimo}`;
  }

//Gerador de slug
  function gerarSlug() {
    const titulo = document.getElementById('inputTitulo').value;
    const slug = titulo.toLowerCase().split(" ").join("-");
    document.getElementById('resultadoSlug').innerText = slug;
  }

  //Censura
  function censurarFrase() {
    const frase = document.getElementById('inputFrase').value;
    const novaFrase = frase.replace("erro", "sucesso");
    document.getElementById('resultadoCensura').innerText = novaFrase;
  }

  //Extração de domínio
  function extrairDominio() {
    const url = "https://google.com";
    const dominio = url.slice(8, 14);
    document.getElementById('resultadoDominio').innerText = dominio;
  }

  //Contagem de caracteres
  function validarSMS() {
    const sms = document.getElementById('inputSMS').value;
    const excessivo = sms.length > 160;
    document.getElementById('resultadoSMS').innerText = excessivo ? "Mensagem muito longa!" : "Tamanho permitido.";
  }

  //Formatação de CPF
  function formatarCPF() {
    const cpf = document.getElementById('inputCPF').value;
    if (cpf.length === 11) {
      const formatado = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
      document.getElementById('resultadoCPF').innerText = formatado;
    } else {
      alert("Digite 11 números");
    }
  }

  //Repetição de alerta
  function repetirAlerta() {
    const texto = document.getElementById('inputAlerta').value;
    const vezes = document.getElementById('inputRepeticoes').value;
    document.getElementById('resultadoRepeticao').innerText = texto.repeat(Number(vezes));
  }

//Bloco 2

//Sorteio de aluno
function sortearAluno() {
    const sorteio = Math.floor(Math.random() * 30) + 1;
    document.getElementById('resultadoSorteio').innerText = sorteio;
}

//Arredondamento de nota
function arredondarNota() {
    const nota = document.getElementById('inputNota').value;
    const resultado = Math.ceil(nota); // Math.ceil arredonda sempre para cima
    document.getElementById('resultadoNota').innerText = resultado;
}

//Simulador de dados
function lancarDado() {
    const dado = Math.floor(Math.random() * 6) + 1;
    document.getElementById('resultadoDado').innerText = dado;
}

//Preço psicologico
function precoPsicologico() {
    const preco = document.getElementById('inputPreco').value;
    const resultado = Math.trunc(preco); // Remove as casas decimais sem arredondar
    document.getElementById('resultadoPreco').innerText = resultado;
}

//Calculo de raiz
function calcularRaiz() {
    const num = document.getElementById('inputRaiz').value;
    const resultado = Math.sqrt(num);
    document.getElementById('resultadoRaiz').innerText = resultado;
}

//Hipotenusa
function calcularHipotenusa() {
    const resultado = Math.hypot(3, 4);
    document.getElementById('resultadoHipotenusa').innerText = resultado;
}

//Menor valor
function encontrarMenor() {
    const precos = [50, 20, 100, 80];
    const menor = Math.min(...precos); 
    document.getElementById('resultadoMenor').innerText = menor;
}

//Potência de servidor 
function calcularPotencia() {
    const resultado = Math.pow(2, 10);
    document.getElementById('resultadoPotencia').innerText = resultado;
}

//Conversor de temperatura
function converterTemperatura() {
    const c = document.getElementById('inputCelsius').value;
    const f = (c * 9/5) + 32;
    const resultado = Math.round(f); // Arredonda para o inteiro mais próximo
    document.getElementById('resultadoFahrenheit').innerText = resultado + "°F";
}

//Verificador de sinal
function verificarSinal() {
    const num = document.getElementById('inputSinal').value;
    const sinal = Math.sign(num); 
    let mensagem = "";
    
    if (sinal === 1) mensagem = "Positivo";
    else if (sinal === -1) mensagem = "Negativo";
    else mensagem = "Zero";
    
    document.getElementById('resultadoSinal').innerText = mensagem;
}

//Relógio Simples
function exibirRelogio() {
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    const formatado = `${hora}:${minuto}`;
    console.log(formatado);
    document.getElementById('resultadoRelogio').innerText = formatado;
}

//Contagem Regressiva para o Ano Novo
function contagemAnoNovo() {
    const hoje = new Date();
    const proximoAno = hoje.getFullYear() + 1;
    const anoNovo = new Date(proximoAno, 0, 1); // Meses no JS começam em 0 (Janeiro)
    
    const diferencaMs = anoNovo - hoje; // Diferença em milissegundos
    const diasFaltam = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
    
    document.getElementById('resultadoAnoNovo').innerText = `Faltam ${diasFaltam} dias para ${proximoAno}!`;
}

//Dia da Semana
function verDiaSemana() {
    const dataInput = document.getElementById('inputDataSemana').value;
    if (!dataInput) return alert("Selecione uma data!");
    
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const data = new Date(dataInput + "T00:00:00"); // Adicionado horário para evitar fuso horário errado
    const diaNome = dias[data.getDay()];
    
    document.getElementById('resultadoSemana').innerText = diaNome;
}

//Vencimento de Boleto
function calcularVencimento() {
    const dataCompra = document.getElementById('inputDataCompra').value;
    if (!dataCompra) return alert("Selecione a data da compra!");
    
    let data = new Date(dataCompra + "T00:00:00");
    data.setDate(data.getDate() + 3); // Soma 3 dias
    
    const formatada = data.toLocaleDateString('pt-BR');
    document.getElementById('resultadoVencimento').innerText = formatada;
}

//Validador de Maioridade
function validarMaioridade() {
    const nascimentoInput = document.getElementById('inputNascimento').value;
    if (!nascimentoInput) return alert("Selecione o nascimento!");
    
    const hoje = new Date();
    const nascimento = new Date(nascimentoInput + "T00:00:00");
    
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    
    //não fez aniversario aidna
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    
    const maior = idade >= 18 ? "Maior de idade" : "Menor de idade";
    document.getElementById('resultadoMaioridade').innerText = `${idade} anos (${maior})`;
}

//Timestamp de Log
function gerarTimestamp() {
    const stamp = Date.now();
    document.getElementById('resultadoLog').innerText = stamp;
}

//Bloco 4

//Refatoração
function calcularIdade(anoNascimento, anoAtual) {
    const idade = anoAtual - anoNascimento;
    return idade;
}

function executarRefat() {
    const resultado = calcularIdade(1995, 2026);
    document.getElementById('resultadoRefat').innerText = `Idade: ${resultado} anos`;
}

//Motor de Busca de Clientes
function buscarClientes() {
    const nomes = ["Felipe", "Ana Maria", "João Silva", "Maria Eduarda"];
    const termo = document.getElementById('inputBusca').value.toLowerCase();
    
    // Filtra nomes que com o termo digitado
    const filtrados = nomes.filter(nome => 
        nome.toLowerCase().includes(termo)
    );
    
    document.getElementById('resultadoBusca').innerText = filtrados.join(", ") || "Nenhum encontrado";
}

//Simulador de Financiamento
function simularFinanciamento() {
    const nomeBruto = document.getElementById('inputNomeFinanc').value;
    const valorTotal = parseFloat(document.getElementById('inputValorTotal').value);
    
    if(!nomeBruto || isNaN(valorTotal)) return alert("Preencha os dados!");

    const nomeLimpo = nomeBruto.trim().toUpperCase();
    const idAleatorio = Math.floor(Math.random() * 10000);
    const parcela = Math.ceil(valorTotal / 12);

    const objetoFinanciamento = {
        id: idAleatorio,
        cliente: nomeLimpo,
        valorParcela: parcela,
        totalParcelas: 12
    };

    document.getElementById('resultadoFinanc').innerText = JSON.stringify(objetoFinanciamento, null, 2);
}

//Formatador de Moeda Internacional
function formatarMoeda() {
    const valor = document.getElementById('inputMoeda').value;

    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    
    document.getElementById('resultadoMoeda').innerText = formatador.format(valor);
}