const forms =  document.querySelector('form')
     forms.addEventListener('submit', (e)=>{
    e.preventDefault();

    const Height = parseInt((document.querySelector('#height')).value);
    console.log(Height);
    const Weight = parseInt((document.querySelector('#weight')).value );
    const results = document.querySelector('#result');

    if(Height ==='' || Height<0 || isNaN(Height)){
        results.innerHTML = `please provide a valid height${Height}`
    }
    else if(Weight==='' || Weight <0 ||  isNaN(Weight)){
        results.innerHTML = `please enter a valid height ${Weight}`
    }
    else{
        const bmi = (Weight/((Height*Weight)/1000)).toFixed(2);
        results.innerHTML =`<span>${bmi}</span>`;
    }
})