const input=document.getElementById('search');
input.addEventListener('input',()=>{
 const query=input.value.toLowerCase().trim();
 document.querySelectorAll('[data-guide]').forEach(link=>{link.hidden=!link.dataset.guide.includes(query)});
});
