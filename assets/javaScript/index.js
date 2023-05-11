
// declaracion de varables de los inputs del formulario
const inputNumber = document.getElementById("Number");
let inputName = document.getElementById("Name");
let inputDescription = document.getElementById("description");
let selectYear = document.getElementById("Year");
let selectVoltage = document.getElementById("Voltage");
let selectSemiIsolsted = document.getElementById("SemiIsolsted");
let selectHeavy = document.getElementById("Heavy");
let selectDevice = document.getElementById("selectDevice");
//variable de la tabla
let TableCalc = document.getElementById("tbl");
//variables de botones
let buttonExcel = document.getElementById("excel_btn");
//Funcion que se inicial al principio
window.onload = function() { 
    buttonExcel.disabled = true;
    selectDevice.disabled = true;
  };
  
function mostrarMensaje() {
    alert("¡Hola! Este es un mensaje de ejemplo.");
}
//Funcion que agrega un fila a las tabla
function addTableDataCell(tabla, name, value) {
    let rowNumero = tabla.insertRow();
    let cellNumeroLabel = rowNumero.insertCell();
    let cellNumeroValue = rowNumero.insertCell();
    cellNumeroLabel.innerHTML = name;
    cellNumeroValue.innerHTML = value;
}
//modifica la fila de dispositivos
function editRowTable(fila, cell, data) {
    let defaulCell = fila.children[cell];
    var tr = document.createElement("td");
    tr.innerHTML = data;
    fila.replaceChild(tr, defaulCell);
}
function addData() {
    if (inputNumber.value == ""
        || selectYear.value == "Seleccione el año"
        || inputName.value == ""
        || inputDescription.value == ""
        || selectVoltage.value == "Seleccione el voltaje"
        || selectSemiIsolsted.value == "Seleccione una opción"
        || selectHeavy.value == "Seleccione una opción") {
        alert("Llena todos los campos solicitados.");
    }
    else {
        /*Codigo que desactiva los botones*/
        document.getElementById("botonAgregar").disabled = true;

        //Agrega los datos a la tabla
        //Numero
        addTableDataCell(TableCalc, "Número", inputNumber.value);
        //Nombre
        addTableDataCell(TableCalc, "Nombre", inputName.value);
        //Descripcion
        addTableDataCell(TableCalc, "Descripción", inputDescription.value);
        //año
        addTableDataCell(TableCalc, "Año", selectYear.value);
        //voltaje
        addTableDataCell(TableCalc, "Voltaje", selectVoltage.value);
        //seme aislado
        addTableDataCell(TableCalc, "Semiaislado", selectSemiIsolsted.value);
        //pesado
        addTableDataCell(TableCalc, "Pesado", selectHeavy.value);
        
        /*Esta parte agraga la fila de titulo para dispositivos.*/
        var NewHeader = document.createElement('tr');

        var NameCell = NewHeader.appendChild(document.createElement('th'));
        var amounrCell = NewHeader.appendChild(document.createElement('th'));

        NameCell.innerHTML = "Nombre";
        amounrCell.innerHTML = "Cantidad";

        document.getElementById("tbl").appendChild(NewHeader);
        selectDevice.disabled = false;
        buttonExcel.disabled = false;
    }

}



/*Este codigo agrega los dispositivos a la tabla*/
function addDevice(dispositivo) {

    let rowNumero = TableCalc.insertRow();
    let cellNumeroLabel = rowNumero.insertCell();
    let cellNumeroValue = rowNumero.insertCell();
    let cellButtonDelete = rowNumero.insertCell();
    let cellButtonUpdate = rowNumero.insertCell();
    cellNumeroLabel.innerHTML = dispositivo;
    cellNumeroValue.innerHTML = "1";
    cellButtonDelete.innerHTML = '<input type="button" name="del" value="Eliminar" onclick="delStudent(this);" class = "Deletebutton">';
    cellButtonUpdate.innerHTML = '<input type="button" name="up" value="Actualizar" onclick="actualizar(this);" class = "UpdateButton">';


}

//Aqui se deshabilitan las opciones sleccionables
function deshabilitarOpcionSeleccionada(select) {
    const opcionSeleccionada = select.options[select.selectedIndex];
    opcionSeleccionada.setAttribute("disabled", true);
}

//Aqui se actualiza la zelda de la tabla  
function actualizar(stud) {
    var fila = stud.parentNode.parentNode;
    editRowTable(fila, 0, `<input type="text" name="nombre1" style = "margin: 0;" value = "${fila.children[0].textContent}">`);
    editRowTable(fila, 1, `<input type="number" name="cantidad1" value = "${fila.children[1].textContent}"> `);
    editRowTable(fila, 2, '<input type="button" name="del" value="Eliminar" onclick="delStudent(this);" class = "Deletebutton">');
    editRowTable(fila, 3, '<input type="button" name="up" value="Guardar" onclick="agregarAct(this);" class = "successButton">');
}

//Aqui se agrega los nuevos datos ingresados
function agregarAct(stud) {
    var NameInput = document.querySelector('input[name="nombre1"]');
    var amountInput = document.querySelector('input[name="cantidad1"]');

    var fila = stud.parentNode.parentNode;

    var tr = document.createElement('tr');

    editRowTable(fila, 0, NameInput.value);
    editRowTable(fila, 1, amountInput.value);
    editRowTable(fila, 2, '<input type="button" name="del" value="Eliminar" onclick="delStudent(this);" class = "Deletebutton">');
    editRowTable(fila, 3, '<input type="button" name="up" value="Actualizar" onclick="actualizar(this);" class = "UpdateButton">');

}

//Aqui se elimina la fila actual
function delStudent(Stud) {
    var fila = Stud.closest("tr");
    fila.remove();
}

/*Codigo para convertir en EXCEL*/
function htmlTableToExcel(type) {
    var nombreArchivo = (inputNumber.value + '_' + selectYear.value + '_' + inputName.value)
    var excelFile = XLSX.utils.table_to_book(TableCalc, { sheet: "sheet1" });
    XLSX.write(excelFile, { bookType: type, bookSST: true, type: 'base64' });
    XLSX.writeFile(excelFile, nombreArchivo + '.' + type);
}
