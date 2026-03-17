// Criando o vetor vazio
        let numeros = [];

        // Função para atualizar a lista na tela
        function atualizarLista() {
            const listaDiv = document.getElementById('listaValores');
            const infoDiv = document.getElementById('info');
            
            // Limpa a lista atual
            listaDiv.innerHTML = '';
            
            // Verifica se o vetor está vazio
            if (numeros.length === 0) {
                listaDiv.innerHTML = '<div class="vazio">Nenhum valor cadastrado</div>';
                infoDiv.innerHTML = 'Total de elementos: 0';
                return;
            }
            
            // Percorre o vetor e cria um item para cada número
            for (let i = 0; i < numeros.length; i++) {
                const item = document.createElement('div');
                item.className = 'item-lista';
                
                item.innerHTML = `
                    <span class="item-valor">${numeros[i]}</span>
                    <span class="item-indice">Posição [${i}]</span>
                `;
                
                listaDiv.appendChild(item);
            }
            
            // Atualiza a informação de total
            infoDiv.innerHTML = `Total de elementos: ${numeros.length}`;
            
            // Mostra o vetor no console
            console.log('Vetor atual:', numeros);
        }

        // Função para adicionar número (push)
        function adicionarNumero() {
            // Pega o valor do input
            const input = document.getElementById('valor');
            const valor = parseFloat(input.value);
            
            // Valida se é um número
            if (isNaN(valor)) {
                alert('Por favor, digite um número válido!');
                input.focus();
                return;
            }
            
            // Adiciona ao vetor usando push
            numeros.push(valor);
            
            // Limpa o input
            input.value = '';
            input.focus();
            
            // Atualiza a lista
            atualizarLista();
        }

        // Função para remover o último número (pop)
        function removerNumero() {
            if (numeros.length === 0) {
                alert('Não há números para remover!');
                return;
            }
            
            // Remove o último usando pop
            const removido = numeros.pop();
            
            // Atualiza a lista
            atualizarLista();
            
            alert(`Número ${removido} removido!`);
        }

        // Função para limpar toda a lista
        function limparLista() {
            if (numeros.length === 0) {
                alert('A lista já está vazia!');
                return;
            }
            
            if (confirm('Deseja realmente limpar todos os números?')) {
                // Limpa o vetor
                numeros = [];
                
                // Atualiza a lista
                atualizarLista();
            }
        }

        // Inicializa a lista
        atualizarLista();