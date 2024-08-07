
import TextInput from "@/components/inputs/TextInput";
import Button from "@/components/ui/button";
import { ProfileInfroDataTypes } from "@/lib/type";
import { useFormik } from "formik";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

type PersonalInformationFormProps = {
    instance?: ProfileInfroDataTypes;
    isSubmitting: boolean;
    handleDataSubmit: Function;
};

const OthersInformationForm: FC<PersonalInformationFormProps> = ({
    isSubmitting,
    handleDataSubmit,
    instance,
}) => {
    const navigate = useNavigate()
    const { handleChange, values, touched, errors, handleSubmit, resetForm } =
        useFormik({
            initialValues: {
                dateOfBirth: instance?.dateOfBirth ? new Date(instance.dateOfBirth).toISOString().split('T')[0] : "",
                birth_city: instance?.birth_city || "",
                birth_country: instance?.birth_country || "",
                age: instance?.age || 0,
                sex: instance?.sex || "",
                height: instance?.height || 0,
            },
            validationSchema: Yup.object({
                dateOfBirth: Yup.date().required("dateOfBirth is Required"),
                birth_city: Yup.string().required("Birth City is Required"),
                birth_country: Yup.string().required("Birth Country is Required"),
                age: Yup.number().required("Age is Required").min(0, "Age must be positive"),
                sex: Yup.string().required("Sex is Required"),
                height: Yup.number().required("Height is Required").min(0, "Height must be positive"),
            }),
            onSubmit: async (data: ProfileInfroDataTypes) => {
                try {
                    await handleDataSubmit(data);
                    resetForm();
                    navigate('/approval-request');
                } catch (err) {
                    // toast({
                    //     variant: "destructive",
                    //     description: "Error Making Request",
                    // });
                }
            },
        });

    console.log(values)
    return (
        <div className="min-h-[calc(100vh-200px)] w-full flex items-center justify-center">
            <div className="space-y-10 lg:w-[35%]">
                <div>
                    <p className="text-3xl font-semibold">Other Information</p>
                </div>
                <div>
                    <form className="w-full space-y-5" onSubmit={handleSubmit}>
                        <div className="w-full">
                            <p>Select Date of Birth</p>
                            <div>
                                <TextInput
                                    className=""
                                    id="dateOfBirth"
                                    value={values.dateOfBirth}
                                    onChange={handleChange}
                                    type="date"
                                    // max={new Date().toISOString().split("T")[0]}
                                    error={
                                        Boolean(errors.dateOfBirth) &&
                                        touched.dateOfBirth &&
                                        errors.dateOfBirth
                                    }
                                />
                            </div>
                        </div>
                        <TextInput
                            id="birth_city"
                            label="Birth City"
                            placeholder="Enter Your Birth City"
                            value={values.birth_city}
                            onChange={handleChange}
                            type="text"
                            error={Boolean(errors.birth_city) && touched.birth_city && errors.birth_city}
                        />
                        <TextInput
                            id="birth_country"
                            label="Birth Country"
                            placeholder="Enter Your Birth Country"
                            value={values.birth_country}
                            onChange={handleChange}
                            type="text"
                            error={Boolean(errors.birth_country) && touched.birth_country && errors.birth_country}
                        />
                        <div className="flex gap-2">
                            <div className="w-full">
                                <TextInput
                                    id="age"
                                    label="Age"
                                    placeholder="Enter Your Age"
                                    value={values.age}
                                    onChange={handleChange}
                                    type="number"
                                    error={Boolean(errors.age) && touched.age && errors.age}
                                />
                            </div>
                            <div className="w-full space-y-2">
                                <p>Select Sex</p>
                                <select
                                    name="sex"
                                    id="sex"
                                    onChange={handleChange}
                                    value={values.sex}
                                    className="rounded-[10px] border-4 outline-none bg-inherit py-2  px-4 md:py-3 w-full"
                                >
                                    <option disabled value="">
                                        Select Sex
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {Boolean(errors.sex) && touched.sex && (
                                    <p className="text-red-500 text-sm mt-1">{errors.sex}</p>
                                )}
                            </div>
                        </div>
                        <TextInput
                            id="height"
                            label="Height"
                            placeholder="Enter Your Height"
                            value={values.height}
                            onChange={handleChange}
                            type="number"
                            error={Boolean(errors.height) && touched.height && errors.height}
                        />
                        <Button disabled={isSubmitting} className="w-full" label={isSubmitting ? "Submitting" : "Submit"} variant={'regulerBtn'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OthersInformationForm;
