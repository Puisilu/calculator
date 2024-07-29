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


    let str="hello";
   
    
    console.log(str.split("").reverse().join(""))


    const arr=[1,2,3,4,5,6,5,4,1,3,4,6,7,9,8]
    
    const newar= [...new Set(arr)]
    console.log('new '+newar)
    
