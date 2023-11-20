document.addEventListener("DOMContentLoaded", function () {
    let adInput = document.getElementById("inputname");
    let soyadInput = document.getElementById("inputsurname");
    let yasInput = document.getElementById("inputyear");
    let elave = document.getElementById("inputbutton");
    let tablebody = document.getElementById ("tbodyinput")

    elave.addEventListener("click", ()=> {
        let ad = adInput.value.trim();
        let soyad = soyadInput.value.trim();
        let yas = yasInput.value.trim();
    
        if (ad !== "" && soyad !== "" && yas !== "") {
         
          let newRow = tablebody.insertRow();
    
          
          let adCell = newRow.insertCell(0);
          adCell.textContent = ad;
    
          let soyadCell = newRow.insertCell(1);
          soyadCell.textContent = soyad;
    
          let yasCell = newRow.insertCell(2);
          yasCell.textContent = yas;
    
          
          adInput.value = "";
          soyadInput.value = "";
          yasInput.value = "";
        } else {
          alert("Ad,soyad və yaş yerlərin boş saxlamayın!");
        }
      })});
