function clickHome(r)
{
    console.log('you just clicked on home icon');
    console.log(r.target) ;
    document.getElementById('home').style.backgroundColor='red';
    preventDefault();
    
    // console.log(d);
    // d.style.backgroundColor= red;
}
document.getElementById('home').addEventListener('click',clickHome);
