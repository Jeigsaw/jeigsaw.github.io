window.onload = (event) => {
  let el = document.querySelector('.stuffCard img');
  const angle = 20 - Math.random() * 40
  el.style.setProperty('--tiltAngle', angle +'deg');
};