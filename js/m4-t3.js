// Atur harga berdasarkan tipe kamar
function setRoomPrice() {
    const type = document.getElementById("tipekamar").value;
    const priceField = document.getElementById("price");
    if (type === "Standard") priceField.value = 100000;
    else if (type === "Deluxe") priceField.value = 150000;
    else if (type === "Family") priceField.value = 200000;
    else priceField.value = 0;
  }
  // Fungsi untuk validasi dan menghitung total bayar
  function calculateTotal() {
    const idn = document.getElementById("idn").value;
    if (idn.length !== 16 || isNaN(idn)) {
      alert("Nomor Identitas harus diisi dengan 16 digit angka.");
      return false;
    }
    const durasi = parseInt(document.getElementById("durasi").value);
    if (isNaN(durasi) || durasi <= 0) {
      alert("Durasi menginap harus diisi dengan angka positif.");
      return false;
    }
    const price = parseFloat(document.getElementById("price").value);
    const includeBreakfast = document.getElementById("breakfast").checked;
    // Diskon 10% jika menginap lebih dari 3 hari
    let total = price * durasi;
    let discount = 0;
    if (durasi > 3) {
      discount = total * 0.1;
      total -= discount;
    }
    // Tambahan 80,000 jika termasuk breakfast
    if (includeBreakfast) {
      total += 80000;
    }
    // Set nilai total bayar dan tampilkan data resume
    document.getElementById("tprice").value = total.toLocaleString();
    alert(`Data Pemesanan:\n
      Nama Pemesan: ${document.getElementById("name").value}\n
      Nomor Identitas: ${idn}\n
      Jenis Kelamin: ${document.getElementById("gender").value}\n
      Tipe Kamar: ${document.getElementById("tipekamar").value}\n
      Durasi Menginap: ${durasi} Hari\n
      Diskon: ${discount.toLocaleString()}\n
      Total Bayar: ${total.toLocaleString()}
    `);
    return false; // Mencegah form dikirim secara default
  }