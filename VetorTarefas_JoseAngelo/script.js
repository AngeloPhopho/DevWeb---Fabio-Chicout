var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null) 
    insertNewRecord(formData);
    else
    updateRecord(formData);
    resetForm();
}

function readFormData(){
    
    var formData = {};
    formData["tarefa"]=document.getElementById("txtTarefa").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("listaTarefas").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tarefa;
    
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = 
    `<a onClick="onEdit(this)"a>Editar</a>
     <a onClick="onDelete(this)"a>Deletar</a>`;
}

function resetForm(){
    
    document.getElementById("tarefa").value="";
    selectedRow = null; 
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("tarefa").value = selectedRow.cells[0].innerHTML;
    resetForm();
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.tarefa;
}

function onDelete(td){
    if (confirm ('Deseja DELETAR esta Tarefa ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listaTarefas").deleteRow(row.rowIndex);
        resetForm();
    }
}
