# Be Safe

## Índice


* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Descrição do produto](#2-descrição-do-produto)
* [3. Scripts / Arquivos](#3-scripts-/-arquivos)
* [4. Tecnologias Envolvidas](#4-tecnologias-envolvidas)


***

## 1. Resumo do projeto

  Be safe foi desenvolvido para usuários de internet de modo geral, mas pensado principalmente nos usuários de redes sociais e aplicativos de mensagens/conversas. Nos dias atuais a internet e as suas facilidades então muito presentes no nosso cotidiano, ficamos praticamente o dia inteiro online, e certas atividades que estávamos acostumados a fazer pessoalmente, começaram a serem feitas online. Esse é o caso de compras pela internet, não compras que realizamos através de lojas virtuais, mas sim as que fazemos atráves das redes sociais. Nos últimos tempos cresceu um mercado nos aplicativos de redes sociais, onde as lojas expõem seus produtos, e assim conseguimos comprar mandando mensagens, e muitas vezes nesssas mensagens colocamos nossos dados pessoais. Porém uns dos crimes cibernéticos que tem se tornado cada vez mais comum é o roubo de informações confidenciais, temos um exemplo recente de troca de mensagens entre políticos que foram hackeadas e divulgadas na imprensa. Isso nos mostra quão frágil é a nossa segurança virtual, e pensando nisso o Be safe veio para trazer um pouco mais de segurança, fazendo com que seja possível enviar e receber mensagens cifradas, apenas colocando no site do Be safe a mensagem e escolhendo a chave de cifragem e/ou decrifragem.


## 2. Descrição do produto

  Be safe utiliza o método de cifra de César para cifrar e decrifragar as mensagens, esse método se baseia na substituição de letras, portanto com uma chave de deslocamento, que é um número fixo de posições que usamos para substituir cada letra, conseguimos cifrar/decifrar uma mensagem. A seguir temos uma descrição do produto:

**1.** O funcionamento é bem intuitivo, na primeira página mostramos uma breve apresentação sobre o Be safe e um botão (input type button) para iniciar;
**2.** Quando clicamos no botão "iniciar" aparece um nova tela com um formulário (form) para realizarmos a cifragem ou decrifragem; 
**3.** No campo (textarea) em que está incrito "Digite a mensagem", digitamos a mensagem;
**4.** Em seguida no campo "Chave" (input type number) escolhemos a chave de deslocamento, nesse campo é aceito somente números positivos de 1 a 33;
**5.** Após esses passos clicamos no botão (input type button) de crifragem se queremos crifrar a mensagem ou no botão (input type button) de decrifragem se queremos decifrar a mensagem. O resultado dessa operação aparece no campo (textarea readonly) que está em cinza.
**6.** O botão (input type button) "Limpar" serve para limpar as informações na página.

**Obs.: O programa não aceita caracteres especiais, "ç" e números.**


## 3. Scripts / Arquivos

* `REAME.md`;
* `src/index.html`;
* `src/cipher.js`: Funções e objeto para realizar a cifragem e decifragem;
  - cipher.encode(offset, string);
  - cipher.decode(offset, string);
* `src/index.js`: Funções e manipulação do DOM;
* `src/imagem`;
* `test/cipher.spec.js`: Arquivo de testes;

## 4. Tecnologias envolvidas

 Para este projeto foi utilizado HTML, CSS e Javascript.


