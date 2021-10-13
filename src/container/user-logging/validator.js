
function Validator(option) {

    // lấy form
    let formValidate = document.querySelector(option.form);
    // Khai báo biến đối tượng để lưu các rule, với key là các selector(các nút input)
    // có key sẽ có giá trị là mảng các rule - trường hợp 1 input có nhiều rule
    let selectorRules = {};

    // hàm lấy cha chứa thẻ báo lỗi
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    };
    // hàm xử lí kiểm tra lỗi khi blur/submit form
    function handleBlurInput(inputElement, rule){
    let errorElement = getParent(inputElement, option.formGroup).querySelector(option.errorSeclector);
    let errorMessage;
    // lấy các rule của input
    let rules = selectorRules[rule.selector]
        // lặp qua từng rule lấy về errMessage (thông báo lỗi) - nếu có lỗi thì lấy errMessage và dừng luôn không lặp nữa
        for (let i=0; i < rules.length; i++) {
            switch (inputElement.type){
                case 'checkbox':
                case 'radio':
                errorMessage = rules[i](
                    formValidate.querySelector(rule.selector + ':checked')
                )
                    break;
                default:
                errorMessage = rules[i](inputElement.value)
            }
            if (errorMessage) break;
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, option.formGroup).classList.add('invalid')
        } else {
            errorElement.innerText = '';
        };
        return !errorMessage; //return false sử dụng khi xử lí submit
    };
    // 
    if (formValidate) {
        //khi submit form
        formValidate.onsubmit = function(e){
            e.preventDefault();
            var isFormValid = true;
            // lặp qua từng rule kiểm tra có lỗi không
            option.rules.forEach((rule) => {
                var inputElement = formValidate.querySelector(rule.selector);
                var isValid = handleBlurInput(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                };
            });
            
            // không có lỗi tiến hành submit
            if (isFormValid){
                // trường hợp submit với js
                if (typeof option.onSubmit === 'function') {
                    //lấy tất cả input của form (nodelist)
                    var enableInput = formValidate.querySelectorAll('[name]');
                    // chuyển nodelist về dạng mảng,
                    // duyệt mảng lấy tên làm key, value làm value cho đối tượng lưu giữ thông tin submit
                    var formValues = Array.from(enableInput).reduce(function(values, input){
                        switch (input.type) {
                            case 'radio':
                                if (input.matches(':checked')) {
                                        values[input.name] = input.value;
                                    }
                                else if (!values[input.name]) { //chạy đến nút cuối mà k có nút nào ấn thì mới trả về rõng
                                        values[input.name] = '';
                                    }
                                break;
                            case 'checkbox':
                                if (input.matches(':checked')) {
                                    if (!Array.isArray(values[input.name])){
                                        values[input.name] = []
                                    }
                                    values[input.name].push(input.value)
                                }else if (!values[input.name]) { //chạy đến nút cuối mà k có nút nào ấn thì mới trả về rõng
                                    values[input.name] = '';
                                }
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {});
                    //chạy hàm onSubmit với đối số là đối tượng {name: name, password: password,...}
                    // hàm onSubmit sẽ nhận data và call API 
                    option.onSubmit(formValues);
                }
                // trường hợp submit với hành vi mặc định
                else{
                    formValidate.submit()
                }
            };
        };

        //Duyệt qua mỗi rule trong đối tượng option và xử lý (lắng nghe sự kiên blur, oninput, ...)
        option.rules.forEach((rule) => {
            // Thêm key vào cho SelectorRules - vòng đầu tiên, mỗi key(tương ứng 1 input) sẽ là rỗng,
            // sẽ được thêm 1 mảng có 1 phần tử là rule đầu tiên của input,
            // vòng tiếp theo nếu key đó lại có thêm 1 rule thì thay vì bị ghi đè
            // rule thứ 2 được push vào mảng trước đó - key : [rule1, rule2, ...]
            // nếu key(tương ứng input) chỉ có 1 rule thì vòng chạy bt - 1 key : 1 rule 
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector] = [rule.test];
            }

            // mỗi lần lặp qua 1 rule, lấy nodelist các input cùng dùng rule đó (TH như select, checkbox, radio : có trùng name)
            let inputElements = formValidate.querySelectorAll(rule.selector)
            // chuyển nodelist sang mảng rồi duyệt từng input (TH input thường: name, passwork, email,.. thì mảng có 1 phần từ)
            Array.from(inputElements).forEach(function(inputElement){
                    // lắng nghe sự kiện blur trên input element - cảnh báo điền đủ thông tin
                    inputElement.onblur = function () {
                        //hàm xử lý được khai báo bên trên - nhận input và rule tương ứng
                        handleBlurInput(inputElement, rule);
                    };
                    // Lắng nghe sự kiện oninput trên input element - bỏ cảnh báo khi đang điền
                    inputElement.oninput = function() {
                        // lấy phần tử để hiện thông báo
                        let errorElement = getParent(inputElement, option.formGroup).querySelector(option.errorSeclector);
                        errorElement.innerText = '';
                        getParent(inputElement, option.formGroup).classList.remove('invalid');
                    };
            }) 
        });
    };
};

// xử lý lấy content cho cảnh báo với input name
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function(value){
            if (typeof value === 'string'){
                return value.trim() ? undefined : message || 'Vui lòng nhập thông tin.'  //nếu gọi mà k truyền message thì lấy thông báo có sẵn, nếu truyền thì lấy theo message
                }
            return value ? undefined : message || 'Vui lòng nhập thông tin.'
            }
    };
};
// xử lý lấy content cho cảnh báo số lượng kí tự cho phép với input password
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : message || `Mật khẩu tối thiểu ${min} kí tự.`
        }
    };
};
// xử lý kiểm tra mk nhập lại trùng khớp với mk
Validator.isConfirm = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || `Mật khẩu nhập lại chưa khớp.`
        }
    };
};
// xử lý lấy content cho cảnh báo với input email
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function(value){
            const regex = (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
            return regex.test(value) ? undefined : message || 'Vui lòng nhập đúng email.'
        }
    };
};


// Validator({
//     form: '#form-dk',
//     formGroup: '.auth-form__group',
//     errorSeclector: '.err-note',
//     rules: [
//     Validator.isRequired('#input-name'),
//     Validator.isRequired('#input-password'),
//     Validator.minLength('#input-password', 6),
//     Validator.isRequired('#input-repassword'),
//     Validator.isRequired('input[name="gentle"]'),
//     Validator.isConfirm('#input-repassword', function(){
//         return document.querySelector('#form-dk #input-password').value;
//     }, 'Mật khẩu không khớp')
//     ],
//     onSubmit: function(data){
//         console.log(data);
//     }
//     });

export default Validator