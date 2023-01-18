window.addEventListener("load", ()=>{
    console.log("page is fully loaded");

    var mainDiv = document.getElementById("testing");
    var testHeader = document.createElement("h1");
    testHeader.innerHTML = "Hello this is a test";
    mainDiv.appendChild(testHeader);

});