const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightbox-img');
document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    lightboxImg.src=img.src;
    lightboxImg.alt=img.alt;
    lightbox.classList.add('show');
  });
});
document.querySelector('.close').addEventListener('click',()=>lightbox.classList.remove('show'));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.classList.remove('show');});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lightbox.classList.remove('show');});
