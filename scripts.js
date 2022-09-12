
const diaEvento = 'Sun Sep 15 2022 18:30:00';


window.addEventListener('load', function () {
    this.setTimeout(() =>{
        this.document.getElementById("loader").classList.add("disable");
    }, 1000)
    this.setTimeout(()=>{
        this.document.getElementById("loader").style.display="none";
    }, 2000)
})

const getRemainTime = deadline =>{
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000 ,
    remainSecons = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime /3600 % 24)).slice(-2),
    remainDays = ('0'+ Math.floor(remainTime / (3600 * 24))).slice(-2);
    return {
        remainTime, 
        remainSecons,
        remainMinutes,
        remainHours,
        remainDays
    }
}


const countDown = (deadline, dias, horas, min, seg) =>{
    const timerUpdate = setInterval(() =>{
        let t = getRemainTime(deadline);
        dias.innerHTML = `${t.remainDays}`;
        horas.innerHTML = `${t.remainHours}`;
        min.innerHTML = `${t.remainMinutes}`;
        seg.innerHTML = `${t.remainSecons}`;
        if(t.remainTime <= 1){
            clearInterval(timerUpdate);
            dias.innerHTML = `00`;
            horas.innerHTML = `00`;
            min.innerHTML = `00`;
            seg.innerHTML = `00`;
        }
    }, 1000);
}

countDown(diaEvento, document.getElementById("dia"), document.getElementById('hora'), document.getElementById('min'),document.getElementById('seg'));

const colors = ["#FF3333", "#006838", "rgba(255,255,255, 1)"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}%`;
  ball.style.top = `${Math.floor(Math.random() * 100)}%`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `5px`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.getElementById("animacion").append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

const numConf = 10;
const conff = [];

for (let i = 0; i < numConf; i++) {
  let conf = document.createElement("div");
  conf.classList.add('conf');
  conf.innerHTML =`<img style='transform:rotate(${Math.floor(Math.random() * 360)}deg)' src='assets/confeti-${Math.floor(Math.random() * 3)}.svg'/>`;
  conf.style.left = `${Math.floor(Math.random() * 100)}%`;
  conf.style.top = `${Math.floor(Math.random() * 100)}%`;
  
  conff.push(conf);
  document.getElementById("animacion").append(conf);
}

// Keyframes
    conff.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


//
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   document.getElementById('enviando').style.display="block";
   document.getElementById("enviar").style.display="none";
   const serviceID = 'service_5u3w5gc';
   const templateID = 'template_8nu1mg4';
   console.log("enviando")
   setTimeout(() =>{
        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('enviando').style.display="none";
            document.getElementById('enviado').style.display="block";
        }, (err) => {
            document.getElementById('enviando').style.display="none";
            document.getElementById('error').style.display="block";
        alert(JSON.stringify(err));
        });
   },2000)
});