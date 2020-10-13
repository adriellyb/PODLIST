/* Aula 5 -Tipos de Dados (Data Types):

    Os mais usados são:
 
    NUMBER: todo tipo de numeros (inteiros, decimais, positivos e negativos)
    Ex.: 3, 4 , 67, -180, 5.28, 9.0, -3.14, -18.73

        Dentro de NUMBER temos dois valores internos importantes:

        * NaN (Not a Number)
        * Infinity

    STRING: cadeia de caracteres
    Ex.: 'adrielly', "curso de javasript", '3.14', `balbino`
    
    BOOLEAN: valores de true ou false

    Também temos outros tipos como: 

    * Null
    * Undefined
    * Object
    * Function

 */

/* Aula 6 - Tratamento de Dados

    (number + number) = soma
    (string + string) = concatenacao
        
    Obs.: O COMANDO PROMPT SEMPRE TRANSFORMA A INFORMACAO NUMA STRING

    * Number.parseInt() ou Number.parseFloat() = converte os dados para numer (inteiro ou float)
    * Number() = fica a criterio do js o tipo de conversao int ou float

    Para converter um dado de outro tipo para string:
        * String(variavel)
        * variavel.toString()
        * 
    Placeholder: ${} = concatena a string de uma maneira mais fácil

    // EXEMPLO:

        > nome = 'Adrielly'
        'Adrielly'
        > idade = 25
        25
        > nota = 10
        10
        > `A aluna ${nome} tem ${idade} anos e tirou nota ${nota}` //USANDO CRASE
        'A aluna Adrielly tem 25 anos e tirou nota 10'

    Comandos de manipulação de strings:

        * var.length = quantos caracteres a string tem
        * var.toUpperCase() = todos os caracteres em maiusculo
        * var.toLowerCase() = todos os caracteres em minusculo
    
    Mexendo com valores numericos:

        * var.toFixed(2) = numero com 2 casas decimais  //string
            > var n1 = 1545.5
            undefined
            > n1
            1545.5
            > n1.toFixed(2)
            '1545.50'

        * var.toFixed(2).replace('.', ',') = substitui o ponto por virgula
            > n1.toFixed(2).replace('.',',')
            '1545,50'
        
        * var.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}) = localiza a string em português com um atributo de valor monetário em reais (moeda brasileira)
            > n1.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
            'R$ 1,545.50'
*/

/* Aula 7 - Operadores - Parte 1
    5 + 2 = 7
    5 - 2 = 3
    5 * 2 = 10
    5 / 2 = 2.5
    5 % 2 = 1
    5 ** 2 = 25

*/