let sec1, sec3, sec4, sec5, sec6, sec7, sec8, sec9, wapper;

            

            function init() {
                sec1 = document.querySelector(".div-1");
                sec2 = document.querySelector(".div-2");
                sec3 = document.querySelector(".div-3");
                sec4 = document.querySelector(".div-4");
                sec5 = document.querySelector(".div-5");
                sec6 = document.querySelector(".div-6");
                sec7 = document.querySelector(".div-7");
                sec8 = document.querySelector(".div-8");
                sec9 = document.querySelector(".div-9");
                wrappersec = document.querySelector(".wapper");
                
                
                
                sec1.addEventListener("click",  () =>{                    
                    let rand = Math.floor(Math.random()*4);
                   
                    wrappersec.style.backgroundImage=`url('./images/00/00-img${rand}.jpg')`;
                });
                sec2.addEventListener("click",  () =>{
                    let rand = Math.floor(Math.random()*4);
                    wrappersec.style.backgroundImage=`url('./images/01/01-img${rand}.jpg')`;
                });
                sec3.addEventListener("click",  () =>{
                    let rand = Math.floor(Math.random()*4);
                    wrappersec.style.backgroundImage=`url('./images/02/02-img${rand}.jpg')`;
                });
                sec4.addEventListener("click",  () =>{
                    let rand = Math.floor(Math.random()*4);
                    wrappersec.style.backgroundImage=`url('./images/10/10-img${rand}.jpg')`;
                });
                sec5.addEventListener("click",  () =>{
                    let rand = Math.floor(Math.random()*4);
                    wrappersec.style.backgroundImage=`url('./images/11/11-img${rand}.jpg')`;
                });
                sec6.addEventListener("click",  () =>{
                    let rand = Math.floor(Math.random()*4);
                    wrappersec.style.backgroundImage=`url('./images/12/12-img${rand}.jpg')`;
                });
                sec7.addEventListener("click",  () =>{
                    let rand = Math.floor(Math.random()*4);
                    wrappersec.style.backgroundImage=`url('./images/20/20-img${rand}.jpg')`;
                    console.log("fired");
                });
                sec8.addEventListener("click",  () =>{
                    let rand = Math.floor(Math.random()*4);
                    wrappersec.style.backgroundImage=`url('./images/21/21-img${rand}.jpg')`;
                });
                sec9.addEventListener("click",  () =>{
                    let rand = Math.floor(Math.random()*4);
                    wrappersec.style.backgroundImage=`url('./images/22/22-img${rand}.jpg')`;
                });
            }
            window.onload = init();