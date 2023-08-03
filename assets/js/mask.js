const phoneMask = new Inputmask({
  mask: '+359(9)999-9999',
  definitions: {
    9: {
      validator: '[0-9]',
      cardinality: 1,
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
