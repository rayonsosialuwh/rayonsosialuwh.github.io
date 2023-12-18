// <!-- Script -->
    const misi = document.querySelectorAll(".mission .misi");
    const myWindow = document.querySelector(".window");

    for(let i=0; i<misi.length; i++){
        misi[i].addEventListener("click", function(){
            myWindow.style.display = "block";
        });
    };
    function tutupWindow() {
        myWindow.style.display = "none";
    };


// <!-- Loader  -->

    // Fungsi untuk menampilkan elemen loading
    function showLoading() {
        document.querySelector('.loader').style.display = "flex";
    }

      // Fungsi untuk menyembunyikan elemen loading
    function hideLoading() {
        document.querySelector('.loader').style.display = "none";
    }

      // Event listener untuk menjalankan fungsi showLoading saat halaman dimuat
    window.addEventListener("load", showLoading);

      // Event listener untuk menjalankan fungsi hideLoading saat halaman selesai dimuat
    window.addEventListener("load", function() {
        setTimeout(hideLoading, 1500);
    });

// =======================Responsive Navbar===========================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });