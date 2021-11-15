
// 1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p2 = document.createElement(`p`);
    p2.innerText = `Hi`;
    div1.append(p2);
  }, 1000);

  // 2
  setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p3 = document.createElement(`p`);
    p3.innerText = `One`;
    div2.append(p3);
  
    setTimeout(() => {
      const p4 = document.createElement(`p`);
      p4.innerText = `Two`;
      div2.append(p4);
    }, 1000);
  }, 2000);

  // 3 

  // const full = setInterval(() => {
  //    console.log(`Every full second`);
   // }, 1000);

  // let time = 1;
  // setInterval(() => {
   //   const div3 = document.querySelector(`#countown`);
  //console.log(time);
  // time++;
  // }, 1000);


  let timer = 1;
  let time = setInterval(() => {
      console.log(timer);
      timer++;
  }, 1000);
  // 3b
  const button = document.querySelector(`button`);
  stop.addEventListener(`click`, () => {
    clearInterval(time);
  });


  