/* Tanpa Rupiah */
var tanpa_rupiah = document.getElementById('tanpa-rupiah');
tanpa_rupiah.addEventListener('keyup', function(e)
{
  tanpa_rupiah.value = formatRupiah(this.value);
});

tanpa_rupiah.addEventListener('keydown', function(event)
{
  limitCharacter(event);
});

/* Dengan Rupiah */
var dengan_rupiah = document.getElementById('dengan-rupiah');
dengan_rupiah.addEventListener('keyup', function(e)
{
  dengan_rupiah.value = formatRupiah(this.value, 'Rp. ');
});

dengan_rupiah.addEventListener('keydown', function(event)
{
  limitCharacter(event);
});

/* Fungsi */
function formatRupiah(bilangan, prefix)
{
  var number_string = bilangan.replace(/[^,\d]/g, '').toString(),
    split	= number_string.split(','),
    sisa 	= split[0].length % 3,
    rupiah 	= split[0].substr(0, sisa),
    ribuan 	= split[0].substr(sisa).match(/\d{1,3}/gi);
    
  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }
  
  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function limitCharacter(event)
{
  key = event.which || event.keyCode;
  if ( key != 188 // Comma
     && key != 8 // Backspace
     && key != 17 && key != 86 & key != 67 // Ctrl c, ctrl v
     && (key < 48 || key > 57) // Non digit
     // Dan masih banyak lagi seperti tombol del, panah kiri dan kanan, tombol tab, dll
    ) 
  {
    event.preventDefault();
    return false;
  }
}