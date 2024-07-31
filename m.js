let string="";
let buttons=document.querySelectorAll('button')
    Array.from(buttons).forEach( (btn)=>

    {
        btn.addEventListener('click',(e)=>
        {
            console.log(e.target)
            if(e.target.innerHTML=="=")
                {
string=eval(string)
document.querySelector('#t').value=string
                }
               else if(e.target.innerHTML=="c")
                    {
    string=""
    document.querySelector('#t').value=string
                    }
                else{
string=string + e.target.innerHTML
document.querySelector('#t').value=string}
                
        })
    })


    
