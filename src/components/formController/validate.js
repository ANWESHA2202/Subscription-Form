export const step1validate = (values) => {
    const errors = {};
    const { name, value } = values;
    switch (name) {
        case 'email':
            if (!value) {
                errors.email = 'Email address is required';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                errors.email = 'Email address is invalid';
            } else {
                errors.email = ''
            }
            break;

        case 'username':
            if (!value) {
                errors.username = 'Name is required'
            } else if (value.length < 3) {
                errors.username = 'Name length must be of min 3'
            } else {
                errors.username = ''
            }
            break;

        case 'phone':
            if (!value) {
                errors.phone = 'Phone number is required';
            } else if (!/^[0-9]{10}$/.test(value)) {
                errors.phone = 'Phone number is invalid. It should be 10 digits.';
            } else {

                errors.phone = '';
                console.log(errors.phone)
            }
            break;

        default:
            break;
    }



    return errors;
};