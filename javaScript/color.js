const buttons = document.querySelectorAll('.button');

const body = document.querySelector("body")

buttons.forEach( (btn) => {
    // console.log(btn)

    btn.addEventListener('mouseover', function(e){
  console.log(e)
  console.log(e.target)


  if(e.target.id === 'red'){
    body.style.backgroundColor = "red";
  }
  else if(e.target.id === 'blue'){
    body.style.backgroundColor = "blue";
  }
  else if(e.target.id === 'white'){
    body.style.backgroundColor = "white";
  }
  else if(e.target.id === 'black'){
    body.style.backgroundColor = "black";
  }
  else {

  }
    })
} );