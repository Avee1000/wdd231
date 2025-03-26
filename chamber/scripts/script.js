const myInfo = new URLSearchParams(window.location.search);
const applicantInfo = document.querySelector(".applicantInfo");
console.log(myInfo);


// myInfo.filter((value, key) => {
//     return key !== "firstname" && key !== "lastname";
// });

myInfo.forEach((value, key) => {
    console.log(key, value);
});

applicantInfo.innerHTML = `<p>Application for: <b>${myInfo.get("firstname")} ${myInfo.get("lastname")}</p>
<p>The name of your Organization is <b>${myInfo.get("title")}</p>
<p>Your email is <b>${myInfo.get("email")}</p>
<br>
<p>Your phone number is <b>${myInfo.get("phone")}</p>
<p>Your preferred membership is <b>${myInfo.get("membership").toUpperCase()}</p>
<br>
<p>The name of your business is <b>${myInfo.get("business")}</p>
<br>
<p>Your Business Description: <b>${myInfo.get("businessDesc")}</p>
<p>Your Registration timpstamp is <b>${myInfo.get("timestamp")}</p>`;
// for (const [key, value] of myInfo.entries()) {
//     if ( key === "businessDesc") {
//         applicantInfo.innerHTML += ``;
//     }
// }