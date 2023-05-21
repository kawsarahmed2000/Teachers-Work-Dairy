const codes = document.querySelectorAll('.code')

codes[0].focus()

// codes.forEach((code, idx) => {
//     code.addEventListener('keydown', (e) => {
//         if(e.key >= 0 && e.key <=9) {
//             codes[idx].value = ''
//             setTimeout(() => codes[idx + 1].focus(), 10)
//         } else if(e.key === 'Backspace') {
//             setTimeout(() => codes[idx - 1].focus(), 10)
//         }
//     })
// })
localStorage.setItem("email","daspurab80@gmail.com")
function otpVerification(){
    var otp=document.getElementById("otp").value;
    
    var email=localStorage.getItem("email");
    const loginData = {
        email: email,
        otp: otp,
        medium: "new"
      };
      
      fetch("https://senderr.in/API_main/verifyOtp.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        // handle successful login
        console.log(data);
        if(data.success=="1"){
          alert("Please clcik on login");
            window.open("/ADMIN/login/index.html","_self");
        }else{
            alert(data.message);
        }
      })
      .catch(error => {
        console.log(error);
        // handle error
      });
}