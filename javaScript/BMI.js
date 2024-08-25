const form = document.querySelector('form')
 

// This usecase will not work this should be consists into function
// const height =  parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

 const height =  parseInt(document.querySelector('#height').value)  // value converting into string using parseint

   const weight = parseInt(document.querySelector('#weight').value) 

   const results = document.querySelector('#results')

   if(height === "" || height < 0 || isNaN(height)){
    results.value = "please give a valid height";
}
else if(weight === "" || weight < 0 || isNaN(weight)){
    results.value = "please give a valid height";
}
else {

  const bmi = (weight / ((height*height)/10000)).toFixed(2)

  //show the result
  results.value = `your bmi is ${bmi}`;
}


})