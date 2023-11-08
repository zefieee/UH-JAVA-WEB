function validateForm() {
    var nama = document.getElementById("nama").value;
    var nik = document.getElementById("nik").value;
    var email = document.getElementById("email").value;
    var telepon = document.getElementById("telepon").value;
  
    if (nama === "" || nik === "" || email === "" || telepon === "") {
      alert("Anda harus mengisi data dengan lengkap.");
    } else {
      alert("Terima kasih sudah melakukan pendaftaran.");
    }
  }