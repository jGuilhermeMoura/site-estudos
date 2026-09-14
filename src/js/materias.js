console.log("O arquivo externo .js foi carregado com êxito")

const nameMateriaInput = document.querySelector('#nameMateria');
const formAddMateriaConteudo = document.querySelector('#formAddMateriaConteudo');
const nameConteudoInput = document.querySelector('#nameConteudo');
const bodyTable = document.querySelector('.body-table');
const fillMsg = document.querySelector('.msg');

formAddMateriaConteudo.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameMateriaValue = nameMateriaInput.value;
    const nameConteudoValue = nameConteudoInput.value;

    if (nameMateriaValue === '' || nameConteudoValue === '') {
        fillMsg.textContent = "Preencha todos os campos.";
    } else {
        fillMsg.textContent = ""; 
        
        const newLine = document.createElement('tr');
        const colunaMateria = document.createElement('td');
        const colunaConteudo = document.createElement('td');
        const colunaCheck = document.createElement('td');
        const deleteText = document.createElement('td');

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        colunaCheck.appendChild(checkBox);

        const deleteBttn = document.createElement('button');
        deleteBttn.type = 'button';
        deleteBttn.textContent = "delete";
        deleteBttn.classList.add('delete-btn');
        deleteBttn.addEventListener('click', function(event) {
            const row = event.target.closest('tr');
            if (row) {
                row.remove();
            }
        });
        deleteText.appendChild(deleteBttn);

        colunaMateria.textContent = nameMateriaValue;
        colunaConteudo.textContent = nameConteudoValue;

        newLine.appendChild(colunaMateria);
        newLine.appendChild(colunaConteudo);
        newLine.appendChild(colunaCheck);
        newLine.appendChild(deleteText);

        bodyTable.appendChild(newLine);

        nameMateriaInput.value = "";
        nameConteudoInput.value = "";

    }
});
