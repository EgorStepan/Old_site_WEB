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
document.getElementById('Myproblem').addEventListener('input', function () {
            let inputValue = this.value;
            this.value = inputValue.slice(0, 400);
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
        this.value = `+${numericValue.slice(0, 3)}(${numericValue.slice(3, 6)}) ${numericValue.slice(6, 10)}-${numericValue.slice(10, 12)}${numericValue.slice(12)}`;
      }
    });
