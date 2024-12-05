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
    document.getElementById('adicionarTarefaBtn').style.display = 'none';
}

// Para cancelar a tarefa
document.getElementById('cancelarTarefa').onclick = function() {
  document.getElementById('novaTarefa').value = '';
  document.getElementById('campoTarefa').style.display = 'none';
  document.getElementById('adicionarTarefaBtn').style.display = 'block';
}

// Ação para salvar a tarefa
document.getElementById('salvarTarefa').onclick = function() {
    const tarefa = document.getElementById('novaTarefa').value;
    if(tarefa) {
        document.getElementById('novaTarefa').value = ''; // Limpa o campo
        
        const novoItem = document.createElement('li');
        novoItem.innerHTML = `
            <input type="checkbox" class="tarefa-checkbox" />
            <span>${tarefa}</span>
            <div>
              <i class="fi fi-rr-alarm-clock"></i>
              <i class="fi fi-rr-menu-dots"></i>
            </div>
        `;
        // Adiciona o item à lista
        document.getElementById('listaTarefas').appendChild(novoItem);
        
    } else {
        alert('Por favor, digite uma tarefa');
    }
};

document.getElementById('listaTarefas').addEventListener('change', function(event) {
  if (event.target && event.target.matches('.tarefa-checkbox')) {
      const checkbox = event.target;
      if (checkbox.checked) {
          const tarefaItem = checkbox.closest('li');
          setTimeout(() => {
            tarefaItem.classList.add('removendo-tarefa'); // Inicia a transição
        }, 100);
          setTimeout(() => {
            tarefaItem.remove(); // Remove o <li> inteiro
        }, 400); // 300ms (mesma duração definida na animação CSS)
      }
  }
});

function ajustarCampoTarefa() {
  const lista = document.getElementById('listaTarefas');
  const campoTarefa = document.getElementById('campoTarefa');

  campoTarefa.style.marginTop = `${lista.offsetHeight + 20}px`;
}



  