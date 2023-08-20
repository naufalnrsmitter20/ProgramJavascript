var conf = true
while (conf){
    //menangkap pilihan player
    let player = prompt('Silahkan Ketik Salah Satu:"Gajah, Manusia, Semut" \n Tulis huruf depan dengan huruf kapital');
    //menangkap pilihan komputer
    //generate bilangan random
    let computer = Math.random();

    if(computer <= 0.34){
        computer = 'Gajah' 
    } else if (computer >= 0.34 && computer <= 0.66){
        computer = 'Manusia' 
    } else {
        computer = 'Semut' 
    }

    let hasil = ''
    //menentukan rules
    if(player == computer){
        hasil = 'SERI!'
    } else if (player == 'Gajah'){
        if(computer == 'Semut'){
            hasil = 'KALAH!'
        } else{
            hasil = 'MENANG!'
        }
    } else if(player == 'Manusia'){
        hasil = (computer == 'Gajah') ? 'KALAH!' : 'MENANG!';
    } else if(player == 'Semut'){
        hasil = (computer == 'Gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'Tidak memilih apapun'
    }

    //hasil
    alert('Anda memilih ' + player + ' dan Computer memilih ' + computer + '\n Anda : ' + hasil)

    conf = confirm('Ulangi?')
}
alert('Terimakasih Sudah Bermain')

