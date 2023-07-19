
//doğru cevapları bir dizide tut ve kullanıcıdan gelen cevapları da dizide yut
//bunları kıyasla ve score oluştur
//score'u classı d-none olanın d-none'ı kaldırıp yüzde olarak sonucu yazdır
//son olarak yüzde hesaplandıktan sonra gönder butonunu pasif yap


const correctAnswers = ["8", "10", "3", "25"];

const form = document.querySelector(".question-form");

const result = document.querySelector(".result"); // bu ilk başta değil ihitiaca göre sonradan tanımlandı



const succesMassage = document.getElementById("successMessage")  // bu ilk başta değil ihitiaca göre sonradan tanımlandı

const button = document.querySelector(".btn");  // bu ilk başta değil ihitiaca göre sonradan tanımlandı

//formun içindeki gönder butonu tetiklediğinde sayfa yenilenmesin dmeek için metot yazdık

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // kullanıcıdan gelen cevpları çekiyoruz

    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
    ];

    //şimdi kullanıcıdan gelen cveaplarla doğru cvapları kıyaslamak için foreach dögünün kullanıyoruz
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    //şimdi d-none'ı kaldırıp score'u bastıracağız

    result.classList.remove("d-none");
    document.querySelector("#percentage").textContent = `${score} %`;   // burda score'u text contente dinamik olarak geçtik

    if (score === 100) {
        succesMassage.classList.remove("d-none");
  

        // butonu inaktif etmek için:

        button.disabled = true;

        // ya da bu şekilde de pasif yapabilirz

        // button.setAttribute("disabled", "");
    }

})

