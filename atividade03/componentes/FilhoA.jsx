/*- Implemente um componente Pai.jsx que tem três componentes internos: FilhoA,
FilhoB e FilhoC.
O componente pai tem também tem três variáveis de estado: maior, menor e média.
O componente pai deve passar aos filhos, via props, um mesmo vetor de inteiros de
tamanho 5.
Cada filho deverá ter um botão que ao ser pressionado irá fazer um cálculo sobre o
vetor: o FilhoA deverá calcular o maior elemento do vetor, o FilhoB deverá calcular o
menor elemento do vetor e o FilhoC deverá calcular a média aritmética dos
elementos do vetor.
Cada filho também deverá receber do pai, via props, uma referência de uma função
de comunicação Filho-Pai (baixo pra cima). Ou seja, toda vez que o botão de um
filho for pressionado e o seu cálculo específico for realizado, é através desta função
de comunicação Filho-Pai que o filho irá retornar o resultado ao Pai.jsx.
A função de comunicação Filho-Pai em Pai.jsx deverá atualizar o valor de sua
variável de estado correspondente, via set (média, maior e menor). Todas essas
variáveis de estado de Pai.jsx devem ser exibidas em tela (JSX).
*/

