 const form = document.getElementById("profileForm");
 form.addEventListener("submit", function (event) {
        event.preventDefault();
        const nama = document.getElementById("nama").value;
        const kelas = document.getElementById("kelas").value;
        const level = document.getElementById("level").value;
        const motto = document.getElementById("motto").value;
        const minatDipilih = document.querySelector
        ('input[name="minat"]:checked');
        const minat = minatDipilih.value;

        document.getElementById("hasilNama").textContent = nama;
        document.getElementById("hasilKelas").textContent = kelas;
        document.getElementById("hasilLevel").textContent = level;
        document.getElementById("hasilMotto").textContent = motto;
        document.getElementById("hasilMinat").textContent = minat;
 });