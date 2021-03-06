const form = document.querySelector('#form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask("+7(999)-999-99-99");
inputMask.mask(telSelector);

new window.JustValidate('#form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      strength: {
        custom: /^[A-Za-zА-Яа-яЁё]+$/,
      }
    },
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },

  messages: {
    name: {
      required: 'Необходимо указать имя',
      minLength: 'Недостаточное количество символов',
      strength: 'Недопустимый формат',
    },

    tel: {
      required: 'Необходимо указать телефон',
      function: 'Некорректный номер',
    },
  },

  submitHandler: function(thisform) {
            let formData = new FormData(thisform);
            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  console.log('Отправлено');
                }
              }
            }

            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);

            thisform.reset();
  },
});
