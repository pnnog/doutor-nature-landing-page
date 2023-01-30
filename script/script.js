let checked = false;
const changeSrc = () => {
  const checkImage = document.querySelector('#check-box');

  if (!checked) {
    checkImage.addEventListener(
      'click',
      checkImage.setAttribute(
        'src',
        './public/assets/img/check-icon-mobile-checked.png',
        (checked = true),
      ),
    );
    return;
  }
  checkImage.addEventListener(
    'click',
    checkImage.setAttribute(
      'src',
      './public/assets/img/check-icon-mobile.png',
      (checked = false),
    ),
  );
  return;
};

let checkedBenefits = false;
const changeSrcBenefits = () => {
  const checkImage = document.querySelector('#check-box-2');

  if (!checkedBenefits) {
    checkImage.addEventListener(
      'click',
      checkImage.setAttribute(
        'src',
        './public/assets/img/check-icon-mobile-checked.png',
        (checkedBenefits = true),
      ),
    );
    return;
  }
  checkImage.addEventListener(
    'click',
    checkImage.setAttribute(
      'src',
      './public/assets/img/check-icon-mobile.png',
      (checkedBenefits = false),
    ),
  );
  return;
};
