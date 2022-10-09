// ambil elemen DOM
let berat = document.getElementById("berat");
let tinggi = document.getElementById("tinggi");
let form = document.getElementById("form");


// validasi dan hitung BMI
const cekHitung = () => {
    //deklarasi perhitungan hasil
    let keterangan = "";
    let BMI = (berat.value / (tinggi.value / 100)**2).toFixed(1);
    // validasi input
    if(berat.value == "" || tinggi.value == "" || parseInt(berat.value) < 0 || parseInt(tinggi.value) < 0) {
        document.getElementById("hasil").style.visibility = "hidden";
        alert("Your Input is not valid");
        form.reset();
    } else {
        // jenis hasil
        if (BMI < 18.5) {
            keterangan = "UNDERWEIGHT";
        } else if (BMI <= 24.9) {
            keterangan = "NORMAL";
        } else if (BMI <= 29.9) {
            keterangan = "OVERWEIGHT";
        } else if (BMI >= 30) {
            keterangan = "OBESITY";
        }
    
        // tampilkan hasil di HTML
        document.getElementById("BMI").innerText = BMI;
        document.getElementById("keterangan").innerText = keterangan;
        document.getElementById("hasil").style.visibility = "visible";

        // Reset input
        form.reset();
    }
}

// Submit form event
document.getElementById("submit").addEventListener("click", cekHitung);