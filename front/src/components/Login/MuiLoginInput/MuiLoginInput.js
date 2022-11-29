import Icon from '@mdi/react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// import MuiPhoneNumber from 'material-ui-phone-number';
import { Suspense, lazy, useState } from 'react';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import loginInputStyle from './loginInputStyle';
import LoaderSpinner from '../../Shared/LoaderSpinner/LoaderSpinner';
const MuiPhoneNumber = lazy(() => import('material-ui-phone-number'));


const TextFieldCustom = loginInputStyle(TextField);
const MuiPhoneNumberCustom = loginInputStyle(MuiPhoneNumber);

const MuiLoginInput = ({ styleCustom, name, type, value, icon, onChange, onBlur, error, errorText, isPhoneInput }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Suspense fallback={<LoaderSpinner />}>
            <div className={`${styleCustom} px-3 mb-7`} >
                {
                    !isPhoneInput &&
                    <TextFieldCustom

                        autoComplete="off"
                        name={name}
                        type={!['Password', 'Confirm_Password'].includes(name) ? 'text' : showPassword ? 'text' : 'password'}
                        fullWidth
                        id={name}
                        label={' ' + name.split('_').join(' ') + ' *'}
                        sx={{
                            direction: 'ltr'
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon path={icon}
                                        title="User Profile"
                                        size={1}
                                    />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                type === 'Password' &&
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={error}
                        helperText={errorText}
                    />}
                {
                    isPhoneInput &&
                    <MuiPhoneNumberCustom
                        value={value}
                        error={error}
                        helperText={errorText}
                        defaultCountry={'eg'}
                        onChange={(v, c) => onChange(v, c)}
                        onBlur={onBlur}
                        fullWidth variant='outlined'
                        label={' ' + name.split('_').join(' ') + ' *'}
                        placeholder='phoneNumber'
                        sx={{
                            direction: 'ltr'
                        }}
                    />
                }
            </div>
        </Suspense>

    );
}
export default MuiLoginInput;
