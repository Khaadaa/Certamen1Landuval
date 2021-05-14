tinymce.init({
  selector: '#Descripcion-txt',
  height: 200,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
  toolbar: 'undo redo | formatselect | ' +
  'bold italic backcolor | alignleft aligncenter ' +
  'alignright alignjustify | bullist numlist outdent indent | ' +
  'removeformat | help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});

var miSelect=document.getElementById("Horario-select");
var miOption=document.createElement("option");
miOption.setAttribute("value","1");
miOption.setAttribute("label","Desayuno");
miOption.setAttribute("selected","true");
miSelect.appendChild(miOption);
var miOption2=document.createElement("option");
miOption2.setAttribute("value","2");
miOption2.setAttribute("label","Almuerzo");
miSelect.appendChild(miOption2);
var miOption3=document.createElement("option");
miOption3.setAttribute("value","3");
miOption3.setAttribute("label","Once");
miSelect.appendChild(miOption3);
var miOption4=document.createElement("option");
miOption4.setAttribute("value","4");
miOption4.setAttribute("label", "Cena")
miSelect.appendChild(miOption4);

const Pedidos=[];
const cargarTabla=()=>{
  let tbody=document.querySelector("#tabla-pedidos");
  tbody.innerHTML="";
  for(let i=0; i < Pedidos.length; ++i){
    let p = Pedidos[i];
    let tr = document.createElement("tr");
    let tdnom = document.createElement("td");
    let tdhor = document.createElement("td");
    let tdval = document.createElement("td");
    let tddesc = document.createElement("td");
    let tdof = document.createElement("td");
    
    //todo  vincular horario con valor,mostrar oferta
    tdnom.innerText=(p.Nombre);
    tdval.innerText=(p.Valor);
    let Horario = document.createElement("i")
    if(p.Horario == "1"){
        Horario.innerText = "Desayuno";
    }else if(p.Horario == "2"){
        Horario.innerText = "Almuerzo";
    }else if(p.Horario == "3"){
        Horario.innerText = "Once";
    }else{
        Horario.innerText = "Cena";
    }
    let Valor=document.createElement("i")
    if((p.Horario=="1")&&(tdval.value<=5000)){
      Valor.classList.add("fas", "fa-check", "text-success", "fa-3x")
    }else if (p.Horario=="2"&&(tdval.value<=15000)){
      Valor.classList.add("fas", "fa-check", "text-success", "fa-3x")
    }else if (p.Horario=="3"&&(tdval.value<=10000)){
      Valor.classList.add("fas", "fa-check", "text-success", "fa-3x")
    }else{
      Valor.classList.add("fas", "fa-check", "text-success", "fa-3x")
    }
    tdof.appendChild(Valor);
    tdhor.appendChild(Horario);
          
    tddesc.innerHTML=p.Descripcion;
    tr.appendChild(tdnom);
    tr.appendChild(tdhor);
    tr.appendChild(tdval);
    tr.appendChild(tddesc);
    tr.appendChild(tdof);
    tbody.appendChild(tr);


  };


};

document.querySelector("#agregar-btn").addEventListener("click",()=>{
  let Nombre=document.querySelector("#nombre-txt").value;
  let Horario=document.querySelector("#Horario-select").value;
  let Valor=document.querySelector("#Valor-num").value;
  let Descripcion = tinymce.get("Descripcion-txt").getContent();
  let Pedido={};
  Pedido.Nombre=Nombre;
  Pedido.Horario=Horario;
  Pedido.Valor=Valor;
  Pedido.Descripcion=Descripcion;
  
  Pedidos.push(Pedido);
  cargarTabla();
  Swal.fire("Resultado exitoso", "Registro de Menú realizado", "info");


});
