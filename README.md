# Javascript Action Map

O conceito de mapa de ações é uma forma de implementar o padrão de design chamado "Strategy" (Estratégia). Esse padrão permite que um conjunto de algoritmos seja encapsulado e torna esses algoritmos intercambiáveis. No contexto de substituir vários blocos `if` por um objeto, você cria um mapa que associa diferentes condições a funções específicas, proporcionando uma abordagem mais flexível e legível para o código.

No exemplo fornecido:

```javascript
const actions = {
    'option1': () => {
        // faça algo para a opção 1
    },
    'option2': () => {
        // faça algo para a opção 2
    },
    'option3': () => {
        // faça algo para a opção 3
    },
    'default': () => {
        // ação padrão se nenhuma condição for atendida
    }
};
```

- `actions` é o objeto que atua como o mapa de ações. As chaves são as diferentes condições que você estava verificando nos blocos `if`, e os valores são funções associadas a essas condições.

- Quando você recebe uma entrada (por exemplo, `input`) na função `processInput`, em vez de usar vários blocos `if`, você consulta o mapa `actions` para determinar qual ação executar:

```javascript
function processInput(input) {
    // Verifica se a opção existe no objeto de ações, se não, usa a ação padrão
    const selectedAction = actions[input] || actions['default'];
    selectedAction();
}
```

Essa abordagem tem várias vantagens:

1. **Legibilidade:** O código se torna mais claro e fácil de entender, já que as condições e ações associadas são declaradas de forma explícita no mapa.

2. **Manutenção:** Adicionar ou remover condições se torna mais simples, pois você só precisa atualizar o objeto `actions` e não mexer na lógica da função principal.

3. **Extensibilidade:** Pode facilmente estender o mapa com novas condições e ações sem afetar o restante do código.

4. **Reusabilidade:** As funções associadas a cada condição podem ser reutilizadas em outros contextos, se necessário.

Em resumo, o mapa de ações é uma técnica que melhora a organização e a flexibilidade do código, especialmente quando você tem múltiplas condições que podem ser mapeadas para diferentes ações.
