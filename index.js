const clock = document.querySelector('.clock');
 const getClock = ()=>{
     const moment = new Date();
     const momentString= moment.toLocaleString();
     const hours= moment.getHours();
     const mins=moment.getMinutes();
     const secs= moment.getSeconds();
     const html =`<span>${momentString}</span>`
     clock.innerHTML= html;
    
 }

 setInterval(getClock,1000);