import {useEffect, useState} from 'react';

interface useFormProps<T> {
  initialValues: T;
  validate: (values: T) => Record<keyof T, string>;
}

function useForm<T>({initialValues, validate}: useFormProps<T>) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: keyof T, text: string) => {
    setValues(prev => ({...prev, [name]: text}));
  };
  const handleBlur = (name: keyof T) => {
    setTouched(prev => ({...prev, [name]: true}));
  };

  const getTextInputProps = (name: keyof T) => ({
    value: values[name] as string,
    onChangeText: (text: string) => handleChange(name, text),
    onBlur: () => handleBlur(name),
  });

  useEffect(() => {
    if (validate) {
      const newErrors = validate(values);
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [validate, values]);

  return {values, touched, errors, getTextInputProps};
}

export default useForm;
