import React from 'react';
import InputMask from 'react-input-mask';

export {
    PhoneInput,
    PostCodeInput
}

const PhoneInput = (props) => {

    return <InputMask {...props} mask="+5\5 99 9 9999-9999" maskChar=" " />;

}

const PostCodeInput = (props) => {

    return <InputMask {...props} mask="99999-999" maskChar=" " />;

}