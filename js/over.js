const acabou = document.getElementById('acabou');

function mensagem () {
    Swal.fire({
        position: 'top',
        timer: 2000,
        text: 'Produto esgotado!',
        icon: 'warning',
        iconColor: 'var(--orange)',
        color: '#000',
        showConfirmButton: false,
        width: '25em',
    })
}
