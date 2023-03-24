const calc = () => {
  const calcForm = document.querySelector('.js-calc-form');
  const calcSquare = document.querySelector('.js-square');
  const calcTotalPrice = document.querySelector('.js-total-price');
  const calcResultWrapper = document.querySelector('.calc__result-wrapper');
  const tariff = {
    economy: 550,
    comfort: 1400,
    premium: 2700,
  };

  calcForm.addEventListener('submit', e => {
    e.preventDefault();

    if (calcForm.width.value > 0 && calcForm.length.value > 0) {
      const square = calcForm.width.value * calcForm.length.value;
      const price = square * tariff[calcForm.tariff.value];

      calcResultWrapper.style.display = 'grid';

      calcSquare.textContent = `${square} кв м`;
      calcTotalPrice.textContent = `${price} руб`;
    }
  });
};

export default calc;
