seatno=Math.floor(Math.random()*60)+1;
ticket=Math.floor(Math.random()*1000)+1;
document.querySelectorAll(".seat")[0].innerText=seatno;
document.querySelectorAll(".ticket")[0].innerText=ticket;

alert("Payment Succesfull!! 🎉");

