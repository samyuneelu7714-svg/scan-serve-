function getRecipeURL() {

    let food = document.getElementById("foodName").value
        .trim()
        .toLowerCase();

    if(food===""){
        alert("Please enter a recipe name.");
        return null;
    }

    return "https://scanandserve.onrender.com/" + food + ".html";
}



// Generate Barcode

function generateBarcode(){

    let url = getRecipeURL();

    if(!url) return;

    JsBarcode("#barcode", url,{

        format:"CODE128",

        width:2,

        height:90,

        displayValue:false

    });

}



// Generate QR

function generateQR(){

    let url = getRecipeURL();

    if(!url) return;

    document.getElementById("qrcode").innerHTML="";

    new QRCode(document.getElementById("qrcode"),{

        text:url,

        width:220,

        height:220

    });

}



// Download Barcode

function downloadBarcode(){

    let svg=document.getElementById("barcode");

    let serializer=new XMLSerializer();

    let source=serializer.serializeToString(svg);

    let url="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

    let link=document.createElement("a");

    link.href=url;

    link.download="barcode.svg";

    link.click();

}



// Download QR

function downloadQR(){

    let img=document.querySelector("#qrcode img");

    let canvas=document.querySelector("#qrcode canvas");

    let link=document.createElement("a");

    if(img){

        link.href=img.src;

    }

    else if(canvas){

        link.href=canvas.toDataURL();

    }

    else{

        alert("Generate QR Code first.");

        return;

    }

    link.download="qrcode.png";

    link.click();

}