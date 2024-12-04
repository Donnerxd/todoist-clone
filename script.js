document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar-items a"); // Seleciona todos os links da sidebar
    const sections = document.querySelectorAll(".tab"); // Seleciona todas as seções de conteúdo
  
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link
  
        // Remove a classe 'active' de todas as seções
        sections.forEach((section) => {
          section.classList.remove("active");
        });
  
        // Remove a classe 'active' de todos os links, se necessário
        links.forEach((l) => l.classList.remove("active"));
  
        // Identifica o ID alvo a partir do atributo href do link
        const targetId = link.getAttribute("href").substring(1); // Remove o '#' do ID
        const targetSection = document.getElementById(targetId);
  
        // Adiciona a classe 'active' à seção alvo
        if (targetSection) {
          targetSection.classList.add("active");
        }
  
        // Opcional: Adiciona 'active' ao link atual para destacar
        link.classList.add("active");
      });
    });
  });
// Mostra o campo de tarefa ao clicar no button
document.getElementById('adicionarTarefaBtn').onclick = function() {
    document.getElementById('campoTarefa').style.display = 'block';
}

// Ação para salvar a tarefa
document.getElementById('salvarTarefa').onclick = function() {
    const tarefa = document.getElementById('novaTarefa').value;
    if(tarefa) {
        alert('Tarefa adicionada: ' + tarefa); // Alerta ao adicionar tarefa
        document.getElementById('novaTarefa').value = ''; // Limpa o campo
        document.getElementById('campoTarefa').style.display = 'none'; // Esconde o campo novamente
        const novoItem = document.createElement('li'); // Cria um novo item na lista
        novoItem.textContent = tarefa; // -- //
        document.getElementById('listaTarefas').appendChild(novoItem); // Adiciona o item à lista
    } else {
        alert('Por favor, digite uma tarefa');
    }
};
//


  