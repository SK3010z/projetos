const btn = document.querySelector('button');
const text = document.querySelector('#contagem');


function obterPropriedade(element, proprierty) {
  let estilo = window.getComputedStyle(element);
  let propriedade = estilo.getPropertyValue(proprierty);
  return propriedade;
}


setInterval(() => {
  let ma = obterPropriedade(btn,"margin-top");
  text.textContent = `margin = ${ma}`
}, 1/137)


function clicar(){
    btn.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
}


let n = 0
function gpr(graus) {
    return graus * (Math.PI / 180);
}

setInterval(() => {
    let cos = Math.cos(gpr(n))
    let sin = Math.sin(gpr(n))
    
    x = cos * 250
    y = sin * 250
    btn.style.marginLeft = `${250 + x}px`
    btn.style.marginTop = `${250 + y}px`
  
    n += 1

    n === 360 ? n = 0 : 0
},33)


/*
for (let t = 0; t < 1000; t++) {
    setTimeout(() => {
      btn.style.marginTop = `${t}px`;
      t = t + 1
      console.log(t);
      text.textContent = `t = ${t}`
    }, 10 * t)
    
  }*/