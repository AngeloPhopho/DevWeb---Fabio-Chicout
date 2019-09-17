var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null) 
    insertNewRecord(formData);
    else
    updateRecord(formData);
    resetForm();
}

function onFormSubmitComp(){
    var formData = readFormData();
    if(selectedRow == null) 
    insertNewRecordInc(formData);
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
    var table = document.getElementById("listaTarefasIncompleta").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tarefa;
    
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = 
    `<a onClick="onEdit(this)"a>Editar</a>
    <a onClick="onDelete(this)"a>Deletar</a>
    <a onClick="onComplete(this)"a>Completa</a>`;
}

function insertNewRecordComp(data){
    var table = document.getElementById("listaTarefasCompleta").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tarefa;
    
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = 
    `<a onClick="onEdit(this)"a>Editar</a>
    <a onClick="onDelete(this)"a>Deletar</a>
    <a onClick="onIncomplete(this)"a>Incompleta</a>`;
}



function resetForm(){
    
    document.getElementById("tarefa").value="";
    selectedRow = null; 
}

function onEdit(td){
    if(confirm('Deseja EDITAR ?')){
        selectedRow = td.parentElement.parentElement;
        document.getElementById("tarefa").value = selectedRow.cells[0].innerHTML;
        
        resetForm();
        //transformar label em edit text###
    }
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.tarefa;
}

function onDelete(td){///ESSE ESTÁ OK -OK -OK
    if (confirm ('Deseja DELETAR esta Tarefa ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listaTarefasIncompleta").deleteRow(row.rowIndex);
        resetForm();
    }
}

function onComplete(td){
    if(confirm ('A tarefa está COMPLETA?')){//funciona até o alerta
        row = td.parentElement.parentElement;//ERRO  
              alert('okokokokokoko')

        document.getElementById("listaTarefasIncompleta").function.insertNewRecord;  //#######
        resetForm();
        
    }
}

//        

/*
function onComplete(td){
    if(confirm ('A tarefa está COMPLETA?')){//funciona até o alerta
        // function insertNewRecordInc(data)
        row = td.parentElement.parentElement;
        document.getElementById("listaTarefasIncompleta").insertNewRecord(row.rowIndex);//#######
        resetForm();
        
    }
}
*/

