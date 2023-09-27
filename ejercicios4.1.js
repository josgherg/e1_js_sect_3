const n9=document.getElementById('b9');
const n8=document.getElementById('b8');
const n7=document.getElementById('b7');
const n6=document.getElementById('b6');
const n5=document.getElementById('b5');
const n4=document.getElementById('b4');
const n3=document.getElementById('b3');
const n2=document.getElementById('b2');
const n1=document.getElementById('b1');
const n0=document.getElementById('b0');
const p=document.getElementById('bp');
const ig=document.getElementById('be')

const d=document.getElementById('bd');
const m=document.getElementById('bm');
const s1=document.getElementById('bs1');
const s2=document.getElementById('bs2');
const tx = document.getElementById('areaTexto');

let texto = '', texto2='';

tx.addEventListener('focus',()=>{
    tx.value ='';
    texto='';
    texto2='';
});

be.addEventListener('click', ()=>{
    texto=texto.replace('x','*');
    texto2=eval(texto);
    texto=texto.replace('*','x');
    tx.value =texto+'\n'+texto2;
});

d.addEventListener('click', ()=>{
    const texto1 = d.value;
    texto += texto1;
    tx.value = texto;
});
m.addEventListener('click', ()=>{
    const texto1 = m.value;
    texto += texto1;
    tx.value = texto;
});
s1.addEventListener('click', ()=>{
    const texto1 = s1.value;
    texto += texto1;
    tx.value = texto;
});
s2.addEventListener('click', ()=>{
    const texto1 = s2.value;
    texto += texto1;
    tx.value = texto;
});


n1.addEventListener('click', ()=>{
    const texto1 = n1.value;
    texto += texto1;
    tx.value = texto;
});

n2.addEventListener('click', ()=>{
    const texto1 = n2.value;
    texto += texto1;
    tx.value = texto;
});
n3.addEventListener('click', ()=>{
    const texto1 = n3.value;
    texto += texto1;
    tx.value = texto;
});
n4.addEventListener('click', ()=>{
    const texto1 = n4.value;
    texto += texto1;
    tx.value = texto;
});
n5.addEventListener('click', ()=>{
    const texto1 = n5.value;
    texto += texto1;
    tx.value = texto;
});
n6.addEventListener('click', ()=>{
    const texto1 = n6.value;
    texto += texto1;
    tx.value = texto;
});
n7.addEventListener('click', ()=>{
    const texto1 = n7.value;
    texto += texto1;
    tx.value = texto;
});
n8.addEventListener('click', ()=>{
    const texto1 = n8.value;
    texto += texto1;
    tx.value = texto;
});
n9.addEventListener('click', ()=>{
    const texto1 = n9.value;
    texto += texto1;
    tx.value = texto;
});

p.addEventListener('click', ()=>{
    const texto1 = p.value;
    texto += texto1;
    tx.value = texto;
});