function showAlert() {
    var alert = document.getElementById("customAlert");
    alert.style.display = "flex";
}
function validation(form) {
    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');
        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;
        parent.classList.add('error');
        parent.append(errorLabel);
    }

    let result = true;

    const allInputs = form.querySelectorAll('input');
    

    for (const input of allInputs) {
        removeError(input);
        if (input.dataset.minLength && input.value.length < input.dataset.minLength) {
        	removeError(input);
            if(input == document.getElementById('phoneNumber')){
                createError(input, `Мінімальна кількість символів: 10`);
            }else{
                createError(input, `Мінімальна кількість символів: ${input.dataset.minLength}`);
            }
            result = false;
        }

        if (input.dataset.maxLength && input.value.length > input.dataset.maxLength) {
        	removeError(input);
            createError(input, `Максимальна кількість дозволених символів: ${input.dataset.maxLength}`);
            result = false;
        }

        if (input.dataset.required == "true" && input.value == "") {
        	removeError(input);
            createError(input, "Заповніть поле!");
            result = false;
        }
}
    var val = document.getElementById('textfield_3').value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!val.match(emailPattern) ) {
	        removeError(document.getElementById('textfield_3'));
	        console.log(document.getElementById('textfield_3'));
	        createError(document.getElementById('textfield_3'),"Будь ласка, введіть коректну електронну адресу!");
	        result = false; 
    } 

    return result;
}

document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validation(this)) {
        showAlert();
    }
});
document.getElementById('textfield_1').addEventListener('input', function () {
            let inputValue = this.value;
            let nonNumericValue = inputValue.replace(/\d/g, '');
            this.value = nonNumericValue.slice(0, 15);
});
document.getElementById('textfield_2').addEventListener('input', function () {
            let inputValue = this.value;
            let nonNumericValue = inputValue.replace(/\d/g, '');
            this.value = nonNumericValue.slice(0, 15);
});

document.getElementById('textfield_3').addEventListener('input', function () {
            let inputValue = this.value;
            this.value = inputValue.slice(0, 45);
});
document.addEventListener('DOMContentLoaded', function () {
      const equipmentTypeSelect = document.getElementById('equipmentType');
      const additionalOptionsDiv = document.getElementById('additionalOptions');

      equipmentTypeSelect.addEventListener('change', function () {
        const selectedValue = this.value;

        if (selectedValue === 'fizo') {
          additionalOptionsDiv.style.display = 'block';
        } else {
          additionalOptionsDiv.style.display = 'none';
        }
      });
    });
function hideMenu() {
      const menu = document.getElementById('additionalOptions');
      menu.style.display = 'none';
     
}
 document.getElementById('phoneNumber').addEventListener('input', function () {
      let inputValue = this.value;
      const numericValue = inputValue.replace(/\D/g, '');
      if (numericValue.length === 1) {
        this.value = `+${numericValue}`;
      } else if (numericValue.length <= 3) {
        this.value = `+${numericValue.slice(0, 3)}`;
      } else if (numericValue.length <= 6) {
        this.value = `+${numericValue.slice(0, 3)}(${numericValue.slice(3, 6)})`;
      } else if (numericValue.length <= 10) {
        this.value = `+${numericValue.slice(0, 3)}(${numericValue.slice(3, 6)}) ${numericValue.slice(6, 8)}-${numericValue.slice(8, 10)}`;
      } else if (numericValue.length <= 13) {
        this.value = `+${numericValue.slice(0, 3)}(${numericValue.slice(3, 6)}) ${numericValue.slice(6, 8)}-${numericValue.slice(8, 10)}`;
      } else if (numericValue.length <= 14) {
        this.value = `+${numericValue.slice(0, 3)}(${numericValue.slice(3, 6)}) ${numericValue.slice(6, 10)}-${numericValue.slice(10, 12)}`;
      }
    });
