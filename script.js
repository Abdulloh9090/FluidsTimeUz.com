let hozirgiVaqt = new Date();
let soat = hozirgiVaqt.getHours();
let minut = hozirgiVaqt.getMinutes();
let sekund = hozirgiVaqt.getSeconds();
let bir =    document.querySelector('.div');


function soatYasash() {
     hozirgiVaqt = new Date();
     soat = hozirgiVaqt.getHours();
     minut = hozirgiVaqt.getMinutes();
     sekund = hozirgiVaqt.getSeconds();

    soat = soat < 10 ? "0" + soat : soat;
    minut = minut < 10 ? "0" + minut : minut;
    sekund = sekund < 10 ? "0" + sekund : sekund;


    let soatOyna = document.getElementById("soatOyna");
    soatOyna.innerHTML = soat + ":" + minut + ":" + sekund;

}
 

setInterval(soatYasash, 1000);


soatYasash();

  

      if (soat < 12) {
     bir.innerHTML = 'Good Morning'
      } else if (soat >= 12) {
      bir.innerHTML = 'Good aftarnoon'
    } else if (soat => 17) {
      bir.innerHTML = 'Good evening'
    }


if (soat <= 12) {
  bir.innerHTML = 'Good Morning'
} else if (soat >= 12) {
  bir.innerHTML = 'Good Afternoon'
} else if (soat > 21) {
  bir.innerHTML = 'Good Evening'
} else{
  bir.innerHTML = 'NaN'
}

