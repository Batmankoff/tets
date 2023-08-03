const phoneMask = new Inputmask({
  mask: '+359(000)000-0000',
  lazy: false,
  definitions: {
    0: {
      validator: '[0-9]',
    },
  },
  prepare: function (value, masked) {
    return value.replace(/\D/g, '');
  },
});
const nameMask = new Inputmask({
  regex: "[a-zA-Zа-яА-ЯёЁ\\s'-]+",
  placeholder: '',
  clearMaskOnLostFocus: false,
  clearIncomplete: true,
});

const phoneInput = document.querySelector('.all-form__phone');
const nameInput = document.querySelector('.all-form__name');

phoneMask.mask(phoneInput);
nameMask.mask(nameInput);
