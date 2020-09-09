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

        * s.length = quantos caracteres a string tem
        * s.toUpperCase() = todos os caracteres em maiusculo
        * s.toLowerCase() = todos os caracteres em minusculo
        * 
*/