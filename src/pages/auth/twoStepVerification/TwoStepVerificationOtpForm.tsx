
import Button from '@/components/ui/button';
import React, { useRef, useState } from 'react';

const TwoStepVerificationOtpForm: React.FC = () => {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [otp, setOtp] = useState<string[]>(Array(4).fill(''));

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value.length === 1 && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const otpValue = otp.join('');
        console.log('OTP Submitted:', otpValue);
        // Handle the OTP submission logic here
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
            <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
                <p className='text-2xl md:text-3xl font-bold'> Enter Verification Code</p>
                <p>We’ve sent a code to <span className='font-bold'>johnsmith@gmail.com</span></p>
                <div className="flex gap-2">
                    {Array(4).fill('').map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            className="w-16 h-16 md:w-20 md:h-20 text-center text-xl border-4 border-gray-300 rounded-xl"
                            ref={el => inputRefs.current[index] = el}
                            onChange={(e) => handleInput(e, index)}
                            value={otp[index]}
                        />
                    ))}
                </div>
                <Button className='w-[50%]' type="submit" label={"Submit"} />
                {/* <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    Submit
                </button> */}
            </form>
        </div>
    );
};

export default TwoStepVerificationOtpForm;



/* 
import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/buttons/Button';
import TextInput from '@/components/inputs/TextInput';
import { toast } from '@/components/ui/use-toast';

type TwoStepVerificationOtpFormProps = {
    isSubmitting: boolean;
    handleDataSubmit: Function;
};

const TwoStepVerificationOtpForm: React.FC<TwoStepVerificationOtpFormProps> = ({ isSubmitting, handleDataSubmit }) => {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const { handleChange, values,  errors, handleSubmit, resetForm, setFieldValue } =
        useFormik({
            initialValues: {
                otp: ['', '', '', ''],
            },
            validationSchema: Yup.object({
                otp: Yup.array().of(
                    Yup.string()
                        .matches(/^[0-9]$/, 'Must be a digit')
                        .required('Required')
                ),
            }),
            onSubmit: async (data) => {
                const otpValue = data.otp.join('');
                try {
                    await handleDataSubmit({ otp: otpValue });
                    resetForm();
                } catch (err) {
                    toast({
                        variant: "destructive",
                        description: "Error submitting OTP",
                    })
                }
            },
        });

        console.log(values)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const newOtp = [...values.otp];
            newOtp[index] = value;
            setFieldValue('otp', newOtp);

            if (value.length === 1 && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
                <div className="flex gap-2">
                    {Array(4).fill('').map((_, index) => (
                        <TextInput
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            className="w-10 h-10 text-center text-xl border border-gray-300 rounded"
                            ref={(el) => (inputRefs.current[index] = el)}
                            onChange={(e) => { handleInput(e, index); handleChange(e); }}
                            value={values.otp[index]}
                            error={Boolean(errors.otp?.[index]) && errors.otp?.[index]}
                        />
                    ))}
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full" label={isSubmitting ? 'Submitting...' : 'Submit'} />
            </form>
        </div>
    );
};

export default TwoStepVerificationOtpForm;

*/