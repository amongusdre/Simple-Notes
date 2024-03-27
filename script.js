// Definindo um array vazio para armazenar as notas
let notas = [];

// Função para exibir as notas na página
function exibirNotas() {
    const notasDiv = document.getElementById('notas');
    notasDiv.innerHTML = '';

    notas.forEach((nota, index) => {
        const notaDiv = document.createElement('div');
        notaDiv.classList.add('nota');
        notaDiv.innerHTML = `
            <h2>${nota.titulo}</h2>
            <p>${nota.conteudo}</p>
			${nota.imagem ? `<img src="${nota.imagem}" alt="Imagem da Nota">` : ''}
            <button onclick="editarNota(${index})">Editar</button>
            <button onclick="excluirNota(${index})">Excluir</button>
        `;
        notasDiv.appendChild(notaDiv);
    });
}

// Função para adicionar uma nova nota
function adicionarNota() {
    const titulo = prompt('Digite o título da nota:');
    const conteudo = prompt('Digite o conteúdo da nota:');
	if (titulo.trim() === '' || conteudo.trim() === '') {
        alert('O título e o conteúdo da nota não podem estar vazios.');
        return;
	}
	const nota = { titulo, conteudo }; const incluirImagem = confirm('Deseja incluir uma imagem?');
    let imagem = '';
    if (incluirImagem) {
        imagem = prompt('Digite a URL da imagem:');
    }
    notas.push(nota);
	exibirNotas();
}

// Função para editar uma nota existente
function editarNota(index) {
    const novoTitulo = prompt('Digite o novo título da nota:');
    const novoConteudo = prompt('Digite o novo conteúdo da nota:');
	 if (novoTitulo.trim() === '' || novoConteudo.trim() === '') {
	     alert('O título e o conteúdo da nota não podem estar vazios.');
        return;
	 } 
	const incluirImagem = confirm('Deseja incluir uma imagem?');
    let novoImagem = '';
    if (incluirImagem) {
        novoImagem = prompt('Digite a nova URL da imagem:');
    }
    notas[index].titulo = novoTitulo;
    notas[index].conteudo = novoConteudo;
	notas[index].imagem = novoImagem;
	exibirNotas();
}

// Função para excluir uma nota
function excluirNota(index) {
    notas.splice(index, 1);
    exibirNotas();
}

// Exibir as notas inicialmente
exibirNotas();
