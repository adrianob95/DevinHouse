 
function sleep ( valor ) {
  return new Promise ( (res, rej) => {
     setTimeout( ()=>{ res(valor)},3000 );
  })
}

 sleep(50).then((res) => console.log(res))