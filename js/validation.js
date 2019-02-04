var init = function() {
    var getInputTypes = document.forms[0].querySelectorAll('input[type=text]');
    var getForm = document.forms[0];
    getForm.addEventListener('change', validateForm);
    getInputTypes.forEach(function(element) { element.addEventListener('blur', validateForm) })
}

function isValid(e) {
    var regExpPostCode = /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/;
    var regExpTelNum = /(\s*\(?0\d{4}\)?(\s*|-)\d{3}(\s*|-)\d{3}\s*)|(\s*\(?0\d{3}\)?(\s*|-)\d{3}(\s*|-)\d{4}\s*)|(\s*(7|8)(\d{7}|\d{3}(\-|\s{1})\d{4})\s*)/;
    var regExpLettersHyphenSpace = /^[a-zA-Z\s\-]*$/;
    var regExpDateBirth = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    var telNumValidation = regExpTelNum.test(e.target.value);
    var postCodeValidation = regExpPostCode.test(e.target.value.toUpperCase());
    var name_last_name = regExpLettersHyphenSpace.test(e.target.value);
    var dateBirthValidation = regExpDateBirth.test(e.target.value);
    var addressValidation = true;
    var validationVar = false;
    switch (e.target.id) {
        case 'first_name':
        case 'last_name':
        case 'city':
            validationVar = name_last_name;
            break;
        case 'post_code':
            validationVar = postCodeValidation;
            break;
        case 'date_birth':
            validationVar = dateBirthValidation;
            break;
        case 'address':
            validationVar = addressValidation;
            break;
        case 'phone_number':
            validationVar = telNumValidation;
            break;
    }
    return validationVar;
}

var validateForm = function(e) {
    if (e && e.target && e.target.tagName !== 'SELECT' && e.target.type !== 'radio' && e.target.type !== 'checkbox') {
        if (e.target.value === null || e.target.value === "") {
            e.target.parentNode.classList.add('state-input--empty');
            e.target.parentNode.classList.remove('state-input--valid');
            e.target.parentNode.classList.remove('state-input--no_valid');
        } else if (isValid(e)) {
            e.target.parentNode.classList.add('state-input--valid');
            e.target.parentNode.classList.remove('state-input--no_valid');
            e.target.parentNode.classList.remove('state-input--empty');
        } else {
            e.target.parentNode.classList.add('state-input--no_valid');
            e.target.parentNode.classList.remove('state-input--valid');
            e.target.parentNode.classList.remove('state-input--empty');
        }
    }
};

init();