
    const RandomColor = function(){
        const hexa = '0123456789ABCDEF';
        let color = '#';
        for(let i=0; i<6; i++){
            color+=hexa[Math.floor(Math.random()*16)];
        }
        return color;
    }
    let intervalId;
    const startChangingColor = function(){
         if(!intervalId){
            intervalId = setInterval(changebgColor,500)
         }
    }
        function changebgColor(){
             document.body.style.backgroundColor = RandomColor();
        }

        function stopChangingColor(){
            clearInterval(intervalId)
            intervalId =null
        }

    document.getElementById('start').addEventListener('click', startChangingColor);
    document.getElementById('stop').addEventListener('click', stopChangingColor);