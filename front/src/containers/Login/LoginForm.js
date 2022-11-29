import { mdiLockOpen, mdiLockOff } from '@mdi/js'
import { useFormik, } from 'formik';
import MuiLoginInput from '../../components/Login/MuiLoginInput/MuiLoginInput';
import AuthBtn from '../../components/Login/AuthBtn';
import { validationLogin } from './../../Validations/loginValidations';
import { useTranslation } from 'react-i18next';
import Logo from '../../components/Shared/logo/Logo';
import { useDispatch } from 'react-redux';
import useSign from '../../Hooks/useSign';
import { login } from '../../Store/Slices/authSlice';

const LoginForm = () => {
    const dispatch = useDispatch();
    const loginHandling = (body) => dispatch(login(body));
    const formik = useFormik({
        initialValues: {
            PhoneNumber: '',
            Country: '',
            Password: '',
        },
        validationSchema: validationLogin,
        onSubmit: (values) => {
            startLogin(values)
        },
    });
    const [startLogin, load] = useSign(loginHandling, formik);

    const { t } = useTranslation();

    return (
        <div className="w-full xl:w-3/4 max-w-3xl py-10 px-5 md:px-10">
            <Logo />
            <div className="text-center mb-10">
                <h1 className="font-bold font-dinBold text-3xl text-primary-toggle mb-4">{t('logIn')}</h1>
                <p className='text-primary-light'>{t('loginTitle')}</p>
            </div>

            <div className="flex -mx-3 ">
                <MuiLoginInput
                    styleCustom='w-full'
                    name={t('phoneNumber')}
                    type=''
                    isPhoneInput={true}
                    value={formik.values.PhoneNumber}
                    onChange={(v, c) => {
                        formik.setFieldValue('Country', c?.name);
                        formik.setFieldValue('PhoneNumber', v);
                        formik.touched.PhoneNumber = true;
                    }}
                    onBlur={(e) => {
                        formik.touched.PhoneNumber = true;
                        formik.handleBlur(e)
                    }}
                    error={formik.touched.PhoneNumber && Boolean(formik.errors.PhoneNumber)}
                    errorText={formik.touched.PhoneNumber && formik.errors.PhoneNumber}
                />
            </div>

            <div className="flex -mx-3 ">
                <MuiLoginInput
                    styleCustom='w-full'
                    name={t('password')}
                    type='Password'
                    icon={
                        !Boolean(formik.errors.Password) ?
                            mdiLockOpen :
                            mdiLockOff
                    }
                    value={formik.values.Password}
                    onChange={(e) => {
                        formik.setFieldValue('Password', e.target.value);
                        formik.touched.Password = true;
                    }}
                    onBlur={(e) => {
                        formik.touched.Password = true;
                        formik.handleBlur(e)
                    }}
                    error={(formik.touched.Password && Boolean(formik.errors.Password))}
                    errorText={formik.touched.Password && formik.errors.Password}
                />
            </div>


            <div className="mb-5">
                <AuthBtn
                    disabled={load}
                    title={t('logIn')}
                    click={formik.handleSubmit}
                />

            </div>

        </div>
    )
};

export default LoginForm;