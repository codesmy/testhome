
// inputMask
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

// validate
/*
function validateForms(selector, rules) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form, values, ajax) {
            console.log(form);

            let formData = new FormData(form);

            fetch("mail.php", {
                method: "POST",
                body: formData
            })
            .then(function(data) {
                console.log(data);
                console.log('Отправлено');
                form.reset();
            });
        }
    });
}

validateForms('.form', { email: { required: true, email: true }, fio: { required: true }, tel: { required: true } });
*/

const acceptanceLabel = document.querySelectorAll('.acceptance__label');

acceptanceLabel.forEach((el) => {
  el.addEventListener('click', (e) => {

    let element = e.currentTarget.querySelector("input[name='acceptance']");

   // console.log(element)

    let form = e.currentTarget.closest('.form')
    let btn = form.querySelector('.btn-submit')

    btn.toggleAttribute("disabled")

    //console.log(btn)

  });
});

const btnSubmit = document.querySelectorAll('.btn-submit')

btnSubmit.forEach((el) => {
  el.addEventListener('click', (e) => {
    event.preventDefault();


    let formWrap = e.currentTarget.closest('.form-wrap')
    let formAllert = formWrap.nextElementSibling;

    formWrap.style.display = "none";
    formAllert.style.display = "block";


  })
})

const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');


modalOverlay.addEventListener('click', (e) => {
	//console.log(e.target);

  let formWrap = document.querySelector('.form-wrap')
  let formAllert = document.querySelector('.form-allert')


	if (e.target == modalOverlay) {
		modals.forEach((el) => {
			formWrap.style.display = "block";
    formAllert.style.display = "none";
		});
	}
});
