const imgSrc=document.getElementById("QrImg");
const input=document.getElementById("third");

function generateQR(){
    // alert(input.value);
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
imgSrc.src=url;
console.log(url);
}

window.onload=()=>{
input.value='';
}