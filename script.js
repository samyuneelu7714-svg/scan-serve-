function generateCode() {

    let food = document.getElementById("foodName").value.trim().toLowerCase();

    let page = "";

    if (food === "mango") {
        page = "mango.html";
    }
    else if (food === "apple") {
        page = "apple.html";
    }
    else if (food === "banana") {
        page = "banana.html";
    }
    else if (food === "oreo") {
        page = "oreo.html";
    }
    else {
        alert("Please enter Mango, Apple, Banana or Oreo.");
        return;
    }

    // Change this to your website URL
    let url = "https://scanandserve.onrender.com/" + page;

    // Generate Barcode
    JsBarcode("#barcode", food, {
        format: "CODE128",
        width: 2,
        height: 80,
        displayValue: true
    });

    // Clear old QR code
    document.getElementById("qrcode").innerHTML = "";

    // Generate new QR code
    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 220,
        height: 220
    });
}