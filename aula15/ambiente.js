let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

/*num.sort() é um comando que põe em ordem crescente os elementos 
O comando length mostra quantas posições tem o vetor
O comando `...... ${num[0]}` mostra o elemento na posição um
num.push(1) adiciona o valor um dentro do array "num"
*/