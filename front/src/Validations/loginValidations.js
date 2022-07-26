import * as yup from 'yup';
import parseMobile from 'libphonenumber-js/mobile';

export const validationLogin = yup.object({
    PhoneNumber: yup
        .string()
        .required('Phone is required')
        .test('valid-phone', 'is not valid to this country', function (value) {
            if (value) {
                return parseMobile(value.toString())?.isValid();
            }
            return false;
        })
    ,
    Country: yup
        .string()
        .trim()
        .required('country is required')
    ,
    Password: yup
        .string()
        .trim()
        .required('Password is Required !!')
        .matches(/^(?!.*\s)(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            'Must contain at least one number ,uppercase ,lowercase and character letter, and at least 8 or more characters not including spaces.'),
})
