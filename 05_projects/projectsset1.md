# Projects related to DOM

## projects link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode)


# solution code

## project 1 - colorChanger

```javascript

console.log("tara");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
      console.log(button);
      button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id == 'grey'){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'white'){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'blue'){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'yellow'){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'purple'){
          body.style.backgroundColor = e.target.id;
        }
      });
});

```

## Project 2 - BMI calculator

``` javascript

const form = document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `please provide a valid height ${height}`;
  }else if(weight == '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please provide a valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height**2) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`

    if(bmi < 18.60 ){
        description.innerHTML = `<span>you are under weight</span>`
    }else if(bmi>18.60 && bmi<24.90){
      description.innerHTML = `<span>your weight is in normal range</span>`
    }else{
      description.innerHTML = `<span>you are overweight</span>`
    }
  }

}); 

```