document.addEventListener("DOMContentLoaded", function () {
    var button3 = document.getElementById("googleButton");

    button3.addEventListener("click", function () {
        window.open("https://www.google.com/travel/search?q=maratua%20seaview%20resort&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4284970%2C4291517%2C4597339%2C4757164%2C4814050%2C4874190%2C4893075%2C4899568%2C4899570%2C4924070%2C4965990%2C4990494%2C72277293%2C72298667%2C72302247%2C72317059%2C72379816%2C72385361%2C72402232%2C72406588%2C72412680%2C72414906%2C72414908&hl=en-MY&gl=my&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MzIxMmFhOTg5OTM1MjRhNzoweDNlYjMxZmRjNGYzOGFlY2USGhIUCgcI5w8QCxgREgcI5w8QCxgSGAEyAhAA&qs=CAEyE0Nnb0l6dDNpLWNUN3g5ay1FQUU4AkIJCc6uOE_cH7M-QgkJzq44T9wfsz4&ap=ugEHcmV2aWV3cw&ictx=1&sa=X&ved=0CAAQ5JsGahcKEwjwncaEpMeCAxUAAAAAHQAAAAAQEA", "_blank");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var button4 = document.getElementById("suggestButton");

    button4.addEventListener("click", function () {
        window.open("https://maratuaseaviewresort.com/", "_blank");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "home.html";
    });
});
