const navbarMenu = document.querySelector(".navbar .links");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");


// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

showPopupBtn.click();
var hashKey = '';
document.getElementById('submit').addEventListener('click', ()=>{
     // Input data to be hashed
     const str = document.getElementById('text').value;

     // Calculate the SHA-256 hash
     const hash = CryptoJS.SHA256(str);

     // Convert the hash to a hexadecimal string
     const hashHex = hash.toString(CryptoJS.enc.Hex);
     hashKey = hashHex;
     // Print the hash
     console.log('SHA-256 Hash:', hashHex);
     document.getElementById('hashKey').value = hashHex;
     document.getElementById('copyBtn').style.display = 'block';
});

document.getElementById('copyBtn').addEventListener('click', ()=>{
    
    navigator.clipboard.writeText(hashKey);
});