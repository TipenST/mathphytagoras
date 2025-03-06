function hitungPythagoras() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        document.getElementById('hasil').innerText = "Masukkan angka yang valid!";
        return;
    }

    let c = Math.sqrt(a * a + b * b);
    document.getElementById('hasil').innerText = `Sisi miring (c) = ${c.toFixed(2)}`;
}