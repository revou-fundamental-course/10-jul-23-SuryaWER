
//fungsi untuk menampilkan hasil BMI
function hitungBMI() {
    //deklarasi
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
    const usia = parseInt(document.getElementById('usia').value);
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value) / 100;
    const jenisKelaminPilihan = document.getElementById('jenisKelaminPilihan');
    const usiaPilihan = document.getElementById('usiaPilihan');
    const hasilBMI = document.getElementById('hasilBMI');


    // Menampilkan jenis kelamin
    if (!jenisKelamin) {
        alert('Mohon pilih jenis kelamin.');
        return;
    } else {
        jenisKelaminPilihan.textContent = 'Jenis Kelamin Anda: ' + jenisKelamin.value;
    }

    // Menampilkan usia
    if (isNaN(usia)) {
        alert('Mohon masukkan usia anda dengan benar.');
        return;
    } else {
        usiaPilihan.textContent = 'Usia Anda: ' + usia + ' tahun';
    }

    // Perhitungan BMI seperti pada contoh sebelumnya
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);


    // Menampilkan hasil BMI di halaman web
    if (isNaN(bmi)) {
        alert('Mohon masukkan berat badan atau tinggi badan anda dengan benar.');
        return;
    } else {
        hasilBMI.innerHTML = `BMI Anda: ${bmi.toFixed(2)}`;
    }

    // Menampilkan paragraf yang sesuai berdasarkan rentang BMI
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
    const p3 = document.querySelector('.p3');
    const p4 = document.querySelector('.p4');

    p1.classList.remove('show');
    p2.classList.remove('show');
    p3.classList.remove('show');
    p4.classList.remove('show');

    if (bmi < 18.4) {
        p1.classList.add('show');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        p2.classList.add('show');
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        p3.classList.add('show');
    } else {
        p4.classList.add('show');
    }

}

//fungsi untuk mereset kalkulator
function resetBMI() {

    // Mengakses elemen input radio jenis kelamin
    const jenisKelaminElements = document.getElementsByName('jenisKelamin');

    // Mereset pilihan pada input menjadi kosong
    jenisKelaminElements.forEach(radio => {
        radio.checked = false;
    });

    document.getElementById('usia').value = '';
    document.getElementById('beratBadan').value = '';
    document.getElementById('tinggiBadan').value = '';
    document.getElementById('jenisKelaminPilihan').textContent = '';
    document.getElementById('usiaPilihan').textContent = '';
    document.getElementById('hasilBMI').innerHTML = '';

    // Menonaktifkan semua paragraf BMI
    const paragrafBMI = document.querySelectorAll('.paragraf-bmi');
    paragrafBMI.forEach(paragraf => {
        paragraf.style.display = 'none';
    });
}