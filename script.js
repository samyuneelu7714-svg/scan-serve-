function generateBarcode() {

    let food = document.getElementById("foodName").value.trim().toLowerCase();

    if (food !== "mango" && food !== "apple" && food !== "banana") {
        alert("Please enter Mango, Apple or Banana");
        return;
    }

    JsBarcode("#barcode", food, {
        format: "CODE128",
        width: 2,
        height: 100,
        displayValue: true
    });

}

function generateQR() {

    let food = document.getElementById("foodName").value.trim().toLowerCase();

    if (food !== "mango" && food !== "apple" && food !== "banana") {
        alert("Please enter Mango, Apple or Banana");
        return;
    }

    document.getElementById("qrcode").innerHTML = "";

    const url = window.location.origin + "/recipe.html?fruit=" + food;

    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 220,
        height: 220
    });

}