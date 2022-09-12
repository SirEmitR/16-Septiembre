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