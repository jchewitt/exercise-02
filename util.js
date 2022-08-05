if (typeof window !== 'undefined') {
  document.body.style.fontFamily = 'monospace';
  const log = console.log;
  const info = console.info;
  console.log = (msg) => {
    log(msg);
    const pre = document.createElement('pre');
    pre.innerText = msg;
    document.body.appendChild(pre);
  };
  console.info = (msg) => {
    info(msg);
    const p = document.createElement('p');
    p.style.color = 'blue';
    p.innerText = msg;
    document.body.appendChild(p);
  }
}