console.log("Js connected");
const myHeading = document.querySelector("h1");
// myHeading.textContent="Hello world";

const myAddress = document.getElementById("address");
const mySocial = document.getElementById("social");
const myMobile = document.getElementById("mobile");

myAddress.onclick = function(){
    console.log("function called");
    myAddress.innerHTML = `<ul>
        <li>At: The Hub Peepal tree</li>
        <li>Street: St. Jogns Road</li>
        <li>City: Bengalore</li>
        <li>PIN: 560042</li>
    </ul>`
}

mySocial.onclick = function(){
    console.log("social function called");
    mySocial.innerHTML = `<ul id="list">
        <li id="facebook" ><a target="blank" href="https://www.facebook.com/facebook/"><img src="images/facebook.png" alt="Facebook" width=50px height=50px></img></a> </li>
        <li id="instagram"><a target="blank" href="https://www.instagram.com/"><img src="images/instagram.png" alt="Instagram" width=50px height=50px></img></a> </li>
        <li id="linkedin"><a target="blank" href="https://www.linkedin.com/in/n-rabindra-patra/"><img src="images/linkedin.png" alt="LinkedIn" width=50px height=50px></img></a> </li>
    </ul>`

   


}

myMobile.onclick = function(){
    myMobile.innerHTML = `<ul>
    <li>+91 7735598852</li>
    </ul>`
}
