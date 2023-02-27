var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
feet.addEventListener('input',function()
{
    let f= this.value;
    let i=f*12;
    inch.value=i;
});
inch.addEventListener('input',function()
{
    let i= this.value;
    let f=i/12;
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }
    feet.value=f;
});
var km = document.getElementById('cel');
var metre = document.getElementById('kel');
km.addEventListener('input',function()
{
    let c= this.value;
    let k=c*1000;
    metre.value=k;
});
metre.addEventListener('input',function()
{
    let k= this.value;
    let c=k/1000;
    if(!Number.isInteger(c)){
        c=c.toFixed(3);
    }
    km.value=c;
});

