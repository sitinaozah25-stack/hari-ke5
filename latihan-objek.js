const prompt = require("prompt-sync")();

let produk = [
    {nama: "Laptop", harga: 12000000},
    {nama: "HP", harga: 3500000},
    {nama: "Tablet", harga: 5000000},
    {nama: "Smartwatch", harga: 1500000},
];

// Fungsi untuk menentukan status keterjangkauan
function tentukanStatus(harga) {
    return harga <= 4000000 ? "Standar" : "Kurang Terjangkau";
}

//1. Data produk dengan status
console.log("\nData Kualitas Produk:");
produk.forEach(prdk => {
    const status = tentukanStatus(prdk.harga);
    console.log(`Nama: ${prdk.nama}, Harga: Rp${prdk.harga.toLocaleString('id-ID')}, Status: ${status}`);
});

//2. Array baru produk
let daftarNama = produk.map(prdk => prdk.nama);
console.log("\nDaftar Nama Produk:", daftarNama);

//3. Urutan berdasarkan harga termahal
let urutanHarga = [...produk].sort((a, b) => b.harga - a.harga);
console.log("\nUrutan Produk berdasarkan Harga Tertinggi - Terendah:");
urutanHarga.forEach(prdk => {
    const status = tentukanStatus(prdk.harga);
    console.log(`${prdk.nama}: Rp${prdk.harga.toLocaleString('id-ID')} - ${status}`);
});

//4. Cari produk berdasarkan nama produk (dengan loop)
do {
    let namaCari = prompt("\nMasukkan nama produk yang dicari: ");
    let hasilCari = produk.find(prdk => prdk.nama.toLowerCase() === namaCari.toLowerCase());
    
    if (hasilCari) {
        const status = tentukanStatus(hasilCari.harga);
        console.log(`Produk ditemukan: Nama: ${hasilCari.nama}, Harga: Rp${hasilCari.harga.toLocaleString('id-ID')}, Status: ${status}`);
    } else {
        console.log("Produk tidak ditemukan.");
    }

    //5. Statistik Keterjangkauan
    let produkStandar = produk.filter(prdk => prdk.harga <= 4000000);
    let produkKurangTerjangkau = produk.filter(prdk => prdk.harga >= 4000000);

    console.log("\n=== STATISTIK KETERJANGKAUAN ===");
    console.log(`Total Produk: ${produk.length}`);
    console.log(`Produk Standar: ${produkStandar.length}`);
    console.log(`Produk Kurang Terjangkau: ${produkKurangTerjangkau.length}`);

    console.log("\nDaftar Produk Standar:");
    produkStandar.forEach(prdk => console.log(`- ${prdk.nama} (Rp${prdk.harga.toLocaleString('id-ID')})`));

    console.log("\nDaftar Produk Kurang Terjangkau:");
    produkKurangTerjangkau.forEach(prdk => console.log(`- ${prdk.nama} (Rp${prdk.harga.toLocaleString('id-ID')})`));

    // Pertanyaan untuk mengulang
    var ulang = prompt('\nCari lagi? (y/n): ');
} while (ulang.toLowerCase() === 'y');

console.log('\nTerimakasih sudah berkunjung');