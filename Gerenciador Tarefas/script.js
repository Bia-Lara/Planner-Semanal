let novaTarefa=document.querySelectorAll('novaTarefa');
let novaTarefaSeg=document.getElementById('novaTarefa segunda');
let novaTarefaTer=document.getElementById('novaTarefa terca');
let novaTarefaQua=document.getElementById('novaTarefa quarta');
let novaTarefaQui=document.getElementById('novaTarefa quinta');
let novaTarefaSex=document.getElementById('novaTarefa sexta');
let novaTarefaSab=document.getElementById('novaTarefa sabado');
let novaTarefaDom=document.getElementById('novaTarefa domingo');

let btnAddTarefa=document.getElementById('btnAddTarefa');
let btnAddTarefaSeg=document.getElementById('btnAddTarefa btnseg');
let btnAddTarefaTer=document.getElementById('btnAddTarefa btnter');
let btnAddTarefaQua=document.getElementById('btnAddTarefa btnqua');
let btnAddTarefaQui=document.getElementById('btnAddTarefa btnqui');
let btnAddTarefaSex=document.getElementById('btnAddTarefa btnsex');
let btnAddTarefaSab=document.getElementById('btnAddTarefa btnsab');
let btnAddTarefaDom=document.getElementById('btnAddTarefa btndom');


let listaTarefas=document.getElementById('listaTarefas');
let listaTarefasSeg=document.getElementById('liSegunda');
let listaTarefasTer=document.getElementById('liTerca');
let listaTarefasQua=document.getElementById('liQuarta');
let listaTarefasQui=document.getElementById('liQuinta');
let listaTarefasSex=document.getElementById('liSexta');
let listaTarefasSab=document.getElementById('liSabado');
let listaTarefasDom=document.getElementById('liDomingo');

var liSeg=[];
var liTer=[];
var liQua=[];
var liQui=[];
var liSex=[];
var liSab=[];
var liDom=[];


let janelaEdicao=document.getElementById('janelaEdicao')
let janelaEdicaoFundo = document.getElementById('janelaEdicaoFundo')
let fechar=document.getElementById('fechar');
let btnAtualiza=document.getElementById('btnAtualiza');
let IdTarefaEdicao = document.getElementById('IdTarefaEdicao');
let inputTarefaEdicao = document.getElementById('inputTarefaEdicao');

novaTarefaSeg.addEventListener('keypress', (e)=>{
    if(e.keyCode==13){
        let tarefa={
            nome:novaTarefaSeg.value,
            id:gerarId(),
        }

        addTarefaSeg(tarefa);

        liSeg.push(tarefa.id);

    }
})

novaTarefaTer.addEventListener('keypress', (e)=>{
    if(e.keyCode==13){
        let tarefa={
            nome:novaTarefaTer.value,
            id:gerarId(),
        }

        addTarefaTer(tarefa);
        liTer.push(tarefa.id);
    }
})

novaTarefaQua.addEventListener('keypress', (e)=>{
    if(e.keyCode==13){
        let tarefa={
            nome:novaTarefaQua.value,
            id:gerarId(),
        }

        addTarefaQua(tarefa);
        liQua.push(tarefa.id);
    }
})

novaTarefaQui.addEventListener('keypress', (e)=>{
    if(e.keyCode==13){
        let tarefa={
            nome:novaTarefaQui.value,
            id:gerarId(),
        }

        addTarefaQui(tarefa);
        liQui.push(tarefa.id);
    }
})

novaTarefaSex.addEventListener('keypress', (e)=>{
    if(e.keyCode==13){
        let tarefa={
            nome:novaTarefaSex.value,
            id:gerarId(),
        }

        addTarefaSex(tarefa);
        liSex.push(tarefa.id);
    }
})

novaTarefaSab.addEventListener('keypress', (e)=>{
    if(e.keyCode==13){
        let tarefa={
            nome:novaTarefaSab.value,
            id:gerarId(),
        }

        addTarefaSab(tarefa);
        liSab.push(tarefa.id);
    }
})

novaTarefaDom.addEventListener('keypress', (e)=>{
    if(e.keyCode==13){
        let tarefa={
            nome:novaTarefaDom.value,
            id:gerarId(),
        }

        addTarefaDom(tarefa);
        liDom.push(tarefa.id);
    }
})



btnAddTarefaSeg.addEventListener('click', (e)=>{

    let tarefa={
        nome:novaTarefaSeg.value,
        id:gerarId(),
    }

    addTarefaSeg(tarefa);
   
})

btnAddTarefaTer.addEventListener('click', (e)=>{

    let tarefa={
        nome:novaTarefaTer.value,
        id:gerarId(),
    }

    addTarefaTer(tarefa);
   
})

btnAddTarefaQua.addEventListener('click', (e)=>{
    let tarefa={
        nome:novaTarefaQua.value,
        id:gerarId(),
    }

    addTarefaQua(tarefa);
   
})

btnAddTarefaQui.addEventListener('click', (e)=>{
    let tarefa={
        nome:novaTarefaQui.value,
        id:gerarId(),
    }

    addTarefaQui(tarefa);
   
})

btnAddTarefaSex.addEventListener('click', (e)=>{

    let tarefa={
        nome:novaTarefaSex.value,
        id:gerarId(),
    }

    addTarefaSex(tarefa);
   
})

btnAddTarefaSab.addEventListener('click', (e)=>{

    let tarefa={
        nome:novaTarefaSab.value,
        id:gerarId(),
    }

    addTarefaSab(tarefa);
   
})

btnAddTarefaDom.addEventListener('click', (e)=>{

    let tarefa={
        nome:novaTarefaDom.value,
        id:gerarId(),
    }

    addTarefaDom(tarefa);
   
})






function gerarId(){
    return Math.floor(Math.random()*3000);
}

fechar.addEventListener('click',(e)=>{
    alternarJanelaEdicao();
} )

btnAtualiza.addEventListener('click', (e)=>{
    e.preventDefault();

    let idTarefa= IdTarefaEdicao.innerHTML.replace('#','');

    let id= parseInt(idTarefa);

    let tarefa ={
        nome: inputTarefaEdicao.value,
        id:idTarefa,
    }

    let tarefaAtual=document.getElementById(idTarefa);

    if(tarefaAtual){
        let li= criarTagLi(tarefa);

        if(liSeg.indexOf(id)!==-1){
            listaTarefasSeg.replaceChild(li, tarefaAtual);
        }
        
        if(liTer.indexOf(id)!==-1){
            listaTarefasTer.replaceChild(li, tarefaAtual);
        }

        if(liQua.indexOf(id)!==-1){
            listaTarefasQua.replaceChild(li, tarefaAtual);
           
        }

        if(liQui.indexOf(id)!==-1){
            listaTarefasQui.replaceChild(li, tarefaAtual);
            
        }

        if(liSex.indexOf(id)!==-1){
            listaTarefasSex.replaceChild(li, tarefaAtual);
           
        }

        if(liSab.indexOf(id)!==-1){
            listaTarefasSab.replaceChild(li, tarefaAtual);
            
        }

        if(liDom.indexOf(id)!==-1){
            listaTarefasDom.replaceChild(li, tarefaAtual);
            
        }

        alternarJanelaEdicao();
    }

   
})





function addTarefaSeg(tarefa){
    
    let li=criarTagLi(tarefa);

    listaTarefasSeg.appendChild(li);

    novaTarefaSeg.value='';
}   

function addTarefaTer(tarefa){
    
    let li=criarTagLi(tarefa);

    listaTarefasTer.appendChild(li);

    novaTarefaTer.value='';
}   

function addTarefaQua(tarefa){
    
    let li=criarTagLi(tarefa);

    listaTarefasQua.appendChild(li);

    novaTarefaQua.value='';
}   

function addTarefaQui(tarefa){
    
    let li=criarTagLi(tarefa);

    listaTarefasQui.appendChild(li);

    novaTarefaQui.value='';
}   

function addTarefaSex(tarefa){
    
    let li=criarTagLi(tarefa);

    listaTarefasSex.appendChild(li);

    novaTarefaSex.value='';
}   

function addTarefaSab(tarefa){
    
    let li=criarTagLi(tarefa);

    listaTarefasSab.appendChild(li);

    novaTarefaSab.value='';
}   

function addTarefaDom(tarefa){
    
    let li=criarTagLi(tarefa);

    listaTarefasDom.appendChild(li);

    novaTarefaDom.value='';
}   





function criarTagLi(tarefa){
    let li=document.createElement('li');
    li.id=tarefa.id;

    let span=document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML=tarefa.nome;

    let div=document.createElement('div');

    let btnEditar=document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')');

    let btnExcluir=document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')');

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);

    return li;
}





function editar(idTarefa){
    let li=document.getElementById(idTarefa);

    if(li){
        
        IdTarefaEdicao.innerHTML='#'+idTarefa;
        inputTarefaEdicao.value=li.innerText;
        alternarJanelaEdicao();
        
    }
}

function excluir(idTarefa){
    let confirmacao=window.confirm('Tem certeza que deseja Excluir?');

    if(confirmacao){
        let li=document.getElementById(idTarefa);

        if(li){
            
            if(liSeg.indexOf(idTarefa)!==-1){
                listaTarefasSeg.removeChild(li);
                liSeg.splice(li);

                console.log('existe');
            }

            if(liTer.indexOf(idTarefa)!==-1){
                listaTarefasTer.removeChild(li);
                liTer.splice(li);

                console.log('existe');
            }

            if(liQua.indexOf(idTarefa)!==-1){
                listaTarefasQua.removeChild(li);
                liQua.splice(li);

                console.log('existe');
            }

            if(liQui.indexOf(idTarefa)!==-1){
                listaTarefasQui.removeChild(li);
                liQui.splice(li);

                console.log('existe');
            }

            if(liSex.indexOf(idTarefa)!==-1){
                listaTarefasSex.removeChild(li);
                liSex.splice(li);

                console.log('existe');
            }

            if(liSab.indexOf(idTarefa)!==-1){
                listaTarefasSab.removeChild(li);
                liSab.splice(li);

                console.log('existe');
            }

            if(liDom.indexOf(idTarefa)!==-1){
                listaTarefasDom.removeChild(li);
                liDom.splice(li);

                console.log('existe');
            }
        }
    }
}

function alternarJanelaEdicao(){
    janelaEdicao.classList.toggle('abrir');
    janelaEdicaoFundo.classList.toggle('abrir');
}