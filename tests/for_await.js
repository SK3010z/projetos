let t = 9;
for (let t = 0; t < 100; t++) {
    setTimeout(() => {
      //btn.style.marginTop = `${t}px`;
      t = t + 1
      console.log(t);
      //contagem.textContent = `t = ${t}`
    }, 20 * t)
    
    
    
  
  }