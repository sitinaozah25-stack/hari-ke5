const prompt = require("prompt-sync")();

let mahasiswa = [
    {nama: "Rizki", nilai: 80},
    {nama: "Asep", nilai: 70},
    {nama: "Budi", nilai: 56},
    {nama: "Siti", nilai: 85},
];

// Fungsi untuk menentukan status kelulusan
function tentukanStatus(nilai) {
    return nilai >= 60 ? "Lulus" : "Tidak Lulus";
}

//1. Data mahasiswa dengan status
console.log("\nData Nilai Mahasiswa:");
mahasiswa.forEach(mhs => {
    const status = tentukanStatus(mhs.nilai);
    console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}, Status: ${status}`);
});

//2. Array baru Mahasiswa
let daftarNama = mahasiswa.map(mhs => mhs.nama);
console.log("\nDaftar Nama Mahasiswa:", daftarNama);

//3. Urutan berdasarkan nilai tertinggi
let urutanNilai = [mahasiswa].sort((a, b) => b.nilai - a.nilai);
console.log("\nUrutan Mahasiswa berdasarkan Nilai Tertinggi - terendah:");
urutanNilai.forEach(mhs => {
    const status = tentukanStatus(mhs.nilai);
    console.log(`${mhs.nama}: ${mhs.nilai} - ${status}`);
});

//4. Cari mahasiswa berdasarkan nama
do{
let namaCari = prompt("\nMasukkan nama mahasiswa yang dicari: ");
let hasilcari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === namaCari.toLowerCase());
if (hasilcari) {
    const status = tentukanStatus(hasilcari.nilai);
    console.log(`Mahasiswa ditemukan: Nama: ${hasilcari.nama}, Nilai: ${hasilcari.nilai}, Status: ${status}`);
} else {
    console.log("Mahasiswa tidak ditemukan.");
}

//5. Statistik Kelulusan
let mahasiswaLulus = mahasiswa.filter(mhs => mhs.nilai >= 60);
let mahasiswaTidakLulus = mahasiswa.filter(mhs => mhs.nilai < 60);

console.log("\nkelulusan");
console.log(`Mahasiswa Lulus: ${mahasiswaLulus.length}`);
console.log(`Mahasiswa Tidak Lulus: ${mahasiswaTidakLulus.length}`);

console.log("\nDaftar Mahasiswa Lulus:");
mahasiswaLulus.forEach(mhs => console.log(`- ${mhs.nama} (${mhs.nilai})`));

console.log("\nDaftar Mahasiswa Tidak Lulus:");
mahasiswaTidakLulus.forEach(mhs => console.log(`- ${mhs.nama} (${mhs.nilai})`));

// pertanyaan lagi
var ulang=prompt('cari lagi?(y/n)');
} while (ulang.toLocaleLowerCase()==='y');
console.log ('\n Terimakasih....')
