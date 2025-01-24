// Menampilkan pesan ketika menu makanan diklik
function openLink(pageUrl) {
    const link = document.createElement('a');
    link.href = pageUrl;
    link.target = '_blank'; // Opsional: Buka di tab baru
    link.click(); // Secara otomatis mengklik link
}

// Mengubah tema warna website
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

// Menambahkan event listener untuk tombol ubah tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
function addToCart(item) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = item;
    cartItems.appendChild(listItem);
    alert(item + ' telah ditambahkan ke keranjang!');
}

// Fungsi untuk mengambil parameter dari URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Menampilkan detail makanan di halaman detail
function displayFoodDetail() {
    const foodName = getQueryParam('item');
    const foodDescription = `Ini adalah deskripsi untuk ${foodName}.`;
}
    document.getElementById('food-name').textContent = foodName;
    document.getElementById('food-description').textContent = foodDescription;
    document.getElementBy
    bigy_boy
    kelapa2113