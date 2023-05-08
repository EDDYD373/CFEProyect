document.getElementById("excel_btn").disabled = true;

    function mostrarMensaje() {
        alert("¡Hola! Este es un mensaje de ejemplo.");
    }
       
    function addData(){
        
        if(document.sample.numero.value==""||document.sample.anio.value=="Seleccione el año"||document.sample.nombre.value==""||document.sample.descrip.value==""||document.sample.voltaje.value=="Seleccione el voltaje"||document.sample.semiAis.value=="Seleccione"||document.sample.pesado.value=="Seleccione"){
            console.log("Esta vacio");
            alert("Llena todos los campos solicitados.");
        } 
        
        else{
        /*Codigo que desactiva los botones*/
        document.getElementById("selecDispositivo").disabled = false;
        document.getElementById("excel_btn").disabled = false;
        document.getElementById("botonAgregar").disabled = true;
        
        /*Esta parte agrega la informacion principal de la tabla*/
        var numeroT="Número:"; 
        var anioT="Año:"; 
        var nombreT="Nombre:"; 
        var descripT="Descripción:"; 
        var voltajeT="Voltaje:"; 
        var semiAisT="Semiaislado:";
        var pesadoT="Pesado:";

        var numero=document.sample.numero.value; 
        var anio=document.sample.anio.value; 
        var nombre=document.sample.nombre.value;
        var descrip=document.sample.descrip.value; 
        var voltaje=document.sample.voltaje.value; 
        var semiAis=document.sample.semiAis.value;
        var pesado=document.sample.pesado.value;

        var tr1 = document.createElement('tr');
        var tr2 = document.createElement('tr');
        var tr3 = document.createElement('tr');
        var tr4 = document.createElement('tr');
        var tr5 = document.createElement('tr');
        var tr6 = document.createElement('tr');
        var tr7 = document.createElement('tr');

        var td1 = tr1.appendChild(document.createElement('th'));
        var td2 = tr1.appendChild(document.createElement('td'));

        var td3 = tr2.appendChild(document.createElement('th'));
        var td4 = tr2.appendChild(document.createElement('td'));

        var td5 = tr3.appendChild(document.createElement('th'));
        var td6 = tr3.appendChild(document.createElement('td'));

        var td7 = tr4.appendChild(document.createElement('th'));
        var td8 = tr4.appendChild(document.createElement('td'));

        var td9 = tr5.appendChild(document.createElement('th'));
        var td10 = tr5.appendChild(document.createElement('td'));

        var td11 = tr6.appendChild(document.createElement('th'));
        var td12 = tr6.appendChild(document.createElement('td'));

        var td13 = tr7.appendChild(document.createElement('th'));
        var td14 = tr7.appendChild(document.createElement('td'));

        td1.innerHTML=numeroT;
        td2.innerHTML=numero;

        td3.innerHTML=anioT;
        td4.innerHTML=anio;

        td5.innerHTML=nombreT;
        td6.innerHTML=nombre;
        
        td7.innerHTML=descripT;
        td8.innerHTML=descrip;

        td9.innerHTML=voltajeT;
        td10.innerHTML=voltaje;

        td11.innerHTML=semiAisT;
        td12.innerHTML=semiAis;

        td13.innerHTML=pesadoT;
        td14.innerHTML=pesado;

        document.getElementById("tbl").appendChild(tr1);
        document.getElementById("tbl").appendChild(tr2);
        document.getElementById("tbl").appendChild(tr3);
        document.getElementById("tbl").appendChild(tr4);
        document.getElementById("tbl").appendChild(tr5);
        document.getElementById("tbl").appendChild(tr6);
        document.getElementById("tbl").appendChild(tr7);

        /*Esta parte agraga la fila de titulo para dispositivos.*/
        var nombre2T="Nombre"; 
        var cantidadT="Cantidad"; 

        var tr8 = document.createElement('tr');

        var td15 = tr8.appendChild(document.createElement('th'));
        var td16 = tr8.appendChild(document.createElement('th'));

        td15.innerHTML=nombre2T;
        td16.innerHTML=cantidadT;

        document.getElementById("tbl").appendChild(tr8);
        }
        
    }

    let pri=1;
    let seg=1;
    let ter=1;
    let pri2=1;
    let seg2=1;
    let ter2=1;
    let aux=1;

    /*Este codigo agrega los dispositivos a la tabla*/
    function agregarDis(dispositivo){

        
        var nombreT=dispositivo; 
        var cantidadT=aux; 

        var tr = document.createElement('tr');

        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));

        td1.innerHTML=nombreT;
        td2.innerHTML=cantidadT;
        td1.innerHTML.name = nombreT;
        td2.innerHTML.name= cantidadT;
        td1.innerHTML.id = nombreT;
        td2.innerHTML.id = cantidadT;
        td3.innerHTML='<input type="button" name="del" value="Eliminar" onclick="delStudent(this);" class = "Deletebutton">';
        td4.innerHTML='<input type="button" name="up" value="Actualizar" onclick="actualizar(this);" class = "UpdateButton">';
        
        document.getElementById("tbl").appendChild(tr);

        /*=================================================*/

    }


    let listDis = new Map();
    let listCant = new Map();
    var posicion = 1;

    //Aqui se deshabilitan las opciones sleccionables
    function deshabilitarOpcionSeleccionada(select) {
    const opcionSeleccionada = select.options[select.selectedIndex];
    opcionSeleccionada.setAttribute("disabled", true);
  }

        //Aqui se actualiza la zelda de la tabla  
        function actualizar(stud){
        var selecDispo=document.sample.selecDispo.value; 
        var cantidad=aux; 
        
        console.log(aux);
        console.log(selecDispo); 

        var s = stud.parentNode.parentNode;

        var tr = document.createElement('tr');

        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));

        td1.innerHTML='<input type="text" name="nombre1" style = "margin: 0;">';
        td2.innerHTML='<input type="number" name="cantidad1">';
        td3.innerHTML='<input type="button" name="del" value="Eliminar" onclick="delStudent(this);" class = "Deletebutton">'
        td4.innerHTML='<input type="button" name="up" value="Guardar" onclick="agregarAct(this);" class = "successButton">'

        document.getElementById("tbl").replaceChild(tr, s);
    }

        //Aqui se agrega los nuevos datos ingresados
        function agregarAct(stud){
            console.log("aqui estoy");
            console.log(document.querySelector('input[name="nombre1"]').value);
        var rollno= document.querySelector('input[name="nombre1"]').value; 
        var name= document.querySelector('input[name="cantidad1"]').value;
        
        var s = stud.parentNode.parentNode;
        
        var tr = document.createElement('tr');
        
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));

        td1.innerHTML=rollno;
        td2.innerHTML=name;
        td3.innerHTML='<input type="button" name="del" value="Eliminar" onclick="delStudent(this);" class = "">';
        td4.innerHTML='<input type="button" name="up" value="Actualizar" onclick="actualizar(this);" class = "">';

        document.getElementById("tbl").replaceChild(tr, s);
        }

        //Aqui se elimina la fila actual
        function delStudent(Stud){
        var s=Stud.parentNode.parentNode;
        s.parentNode.removeChild(s);
    }

        /*Codigo para convertir en EXCEL*/
         function htmlTableToExcel(type){
         var numero = document.getElementById("numero").value;
         var anio = document.getElementById("anio").value;
         var nombre = document.getElementById("nombre").value;
         var nombreArchivo=(numero+'_'+anio+'_'+nombre)
         var data = document.getElementById("tbl");
         var excelFile = XLSX.utils.table_to_book(data, {sheet: "sheet1"});
         XLSX.write(excelFile, { bookType: type, bookSST: true, type: 'base64' });
         XLSX.writeFile(excelFile, nombreArchivo+'.' + type);
     }
    const output = document.querySelector(".output");
    const fileInput = document.querySelector("#myfiles");
    fileInput.addEventListener("change", () => {
        for (const file of fileInput.files) {
            output.innerText += `\n${file.name}`;
        }
    }
                              );
    /*===================================*/

    /*Este codigo es para editar la tabla*/
    var table = document.getElementById('tablaE');
    var cells = table.getElementsByTagName('td');
    
    for (var i=0;i<cells.length; i++){
        cells[i].onclick=function(){
            if(this.hasAttribute('data-clicked')){
                return;
            }
            this.setAttribute('data-clicked','yes');
            this.setAttribute('data-text', this.innerHTML);
            
            var input=document.createElement('input');
            input.setAttribute('type','text');
            input.value=this.innerHTML;
            input.style.width=this.offsetWidth-(this.clientLeft * 2)+"px";
            input.style.height=this.offsetHeight-(this.clientTop * 2)+"px";
            input.style.border="0px";
            input.style.fontFamily="inherit";
            input.style.fontSize="inherit";
            input.style.textAlign="inherit";
            input.style.backgroundColor="LightGoldenRodYellow";
            
            input.onblur=function(){
                var td=input.parentElement;
                var orig_text=input.parentElement.getAttribute('data-text');
                var current_text=this.value;
                
                if(orig_text !=current_text){
                    //there are changes in he cells text
                    //save to db with Ajax
                    td.removeAttribute('data-clicked');
                    td.removeAttribute('data-text');
                    td.innerHTML=current_text;
                    td.style.cssText='padding: 5px';
                    console.log(orig_text+' is changed to '+current_text);
                }
                else{
                    td.removeAttribute('data-clicked');
                    td.removeAttribute('data-text');
                    td.innerHTML=orig_text;
                    td.style.cssText='padding: 5px';
                    console.log('No changes made');
                    
                }
            }
            
            input.onkeypress=function(){
                if(event.keyCode==13){
                    this.blur();
                }
            }
            
            this.innerHTML='';
            this.style.cssText='padding: 0px 0px';
            this.append(input);
            this.firstElementChild.select();
            
        }
    }