type UserInformation = {
  email: string;
  password: string;
};

function validateUser(values: UserInformation) {
  const errors = {
    email: '',
    password: '',
  };

  if (!values.email) {
    errors.email = '이메일을 입력해주세요.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = '유효한 이메일 주소를 입력해주세요.';
  }

  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요.';
  } else if (values.password.length < 6) {
    errors.password = '비밀번호는 최소 6자 이상이어야 합니다.';
  }
  return errors;
}
function validateLogin(values: UserInformation) {
  return validateUser(values);
}

function validateSignup(
  values: UserInformation & {
    passwordConfirm: string;
  },
) {
  const errors = validateUser(values);
  const signnupErrors = {...errors, passwordConfirm: ''};

  if (!values.passwordConfirm) {
    signnupErrors.passwordConfirm = '비밀번호 확인을 입력해주세요.';
  } else if (values.password !== values.passwordConfirm) {
    signnupErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  }

  return signnupErrors;
}

export {validateLogin, validateSignup};
