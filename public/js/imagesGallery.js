function openModal(){let e,t=document.querySelectorAll(".webImgElement img"),n=(document.querySelectorAll(".webImgElement"),t[0].src),l=`<img onclick="copySrc(this)" class="webImg" src="${t[t.length-1].src}" id="lastImgDuplicate"/>`,o=`<img onclick="copySrc(this)" class="webImg" src="${n}" id="firstImgDuplicate"/>`;t.forEach((function(t){let n=`<img onclick="copySrc(this)" class="carousselImg" src="${t.src}" id=""/>`;e+=n})),document.querySelectorAll(".carousselImg").forEach((function(e){e.addEventListener("click",copySrc(this))}));let s=l+e.replace("undefined"," ")+o,c=document.getElementById("modalImagesContainer");c.innerHTML=`${s}`;let r=document.querySelector(".carouselSlide"),i=document.querySelectorAll(".carouselSlide img"),a=document.querySelector("#previousBtnGallery"),d=document.querySelector("#nextBtnGallery"),y=document.querySelector("#closeGalleryBtn"),m=1,u=i[0].clientWidth;r.style.transform="translateX("+-u*m+"px)",a.addEventListener("click",(()=>{m>=i.length-1||(r.style.transition="transform 0.4s ease-in-out",m++,r.style.transform="translateX("+-u*m+"px)")})),d.addEventListener("click",(()=>{m<=0||(r.style.transition="transform 0.4s ease-in-out",m--,r.style.transform="translateX("+-u*m+"px)")})),r.addEventListener("transitionend",(()=>{"lastImgDuplicate"===i[m].id?(r.style.transition="none",m=i.length-2,r.style.transform="translateX("+-u*m+"px)"):"firstImgDuplicate"===i[m].id&&(r.style.transition="none",m=i.length-m,r.style.transform="translateX("+-u*m+"px)")}));let p=document.getElementById("modalContainer");p.style.opacity="1",p.style.opacity="1",p.style.pointerEvents="all",y.addEventListener("click",(()=>{p.style.opacity="0",p.style.pointerEvents="none",c.innerHTML="",m=1}));document.querySelector(".galleryBtnBox");p.addEventListener("click",(function(e){e.target.closest(".carouselSlide")||e.target.closest(".galleryBtnBox")||(c.innerHTML=" ",m=1,p.style.opacity="0",p.style.pointerEvents="none")})),document.addEventListener("keydown",(function(e){"Escape"!==e.key&&"Esc"!==e.key||(p.style.opacity="0",p.style.pointerEvents="none",c.innerHTML=" ",m=1)}))}function copySrc(e){const t=e.src,n=document.getElementById("textAreaTemp"),l=document.querySelector(".copyToastWindow");if(n.value=t,n.select(),document.execCommand("copy")){navigator.clipboard.writeText(n.value),l.style.zIndex="10003",l.style.height="50px",l.classList.add("toastVisible"),setTimeout((function(){l.classList.remove("toastVisible")}),1200),setTimeout((function(){!function(e){e.style.height="0",e.style.zIndex="-1"}(l)}),1500)}else console.info("document.execCommand went wrong…")}hideSpinner();