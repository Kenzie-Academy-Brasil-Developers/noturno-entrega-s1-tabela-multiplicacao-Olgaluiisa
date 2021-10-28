function tabelaMultiply() { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x = [];
    for (let i = 0; i <= 10; i++) {
        x[i] = [];
        for (let j = 0; j <= 10; j++) {
        x[i][j] = i * j 
        }
    }
   
    console.table(x)
}
console.log(tabelaMultiply());