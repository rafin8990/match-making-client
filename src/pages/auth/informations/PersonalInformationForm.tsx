
import TextInput from "@/components/inputs/TextInput";
import Button from "@/components/ui/button";
import { ProfileInfroDataTypes } from "@/lib/type";
import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";

type PersonalInformationFormProps = {
    instance?: ProfileInfroDataTypes;
    isSubmitting: boolean;
    handleDataSubmit: Function;
    setStep: Function;
};

const PersonalInformationForm: FC<PersonalInformationFormProps> = ({
    isSubmitting,
    handleDataSubmit,
    instance,
    setStep,

}) => {
    const { handleChange, values, touched, errors, handleSubmit, resetForm } =
        useFormik({
            initialValues: {
                name: instance?.name || "",
                address: instance?.address || "",
                city: instance?.city || "",
                country: instance?.country || "",
                phoneNumber: instance?.phoneNumber || "",
            },
            validationSchema: Yup.object({
                name: Yup.string().required("Name is Required"),
                address: Yup.string().required("Address is Required"),
                city: Yup.string().required("City is Required"),
                country: Yup.string().required("Country is Required"),
                phoneNumber: Yup.string().required("phoneNumber no. is Required"),
            }),
            onSubmit: async (data: any) => {
                try {
                    await handleDataSubmit(data);
                    setStep(2)
                    resetForm();
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
                    <p className="text-3xl font-semibold">Personal Information</p>
                </div>
                <div>
                    <form className="w-full space-y-5" onSubmit={handleSubmit}>
                        <TextInput
                            id="name"
                            label="Name"
                            placeholder="Enter Your Name"
                            value={values.name}
                            onChange={handleChange}
                            type="text"
                            error={Boolean(errors.name) && touched.name && errors.name}
                        />
                        <TextInput
                            id="phoneNumber"
                            label="phoneNumber"
                            placeholder="Enter Your phoneNumber"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            type="text"
                            error={Boolean(errors.phoneNumber) && touched.phoneNumber && errors.phoneNumber}
                        />
                        <TextInput
                            id="address"
                            label="Address"
                            placeholder="Enter Your Address"
                            value={values.address}
                            onChange={handleChange}
                            type="text"
                            error={Boolean(errors.address) && touched.address && errors.address}
                        />
                        <TextInput
                            id="city"
                            label="City"
                            placeholder="Enter Your City"
                            value={values.city}
                            onChange={handleChange}
                            type="text"
                            error={Boolean(errors.city) && touched.city && errors.city}
                        />
                        <TextInput
                            id="country"
                            label="Country"
                            placeholder="Enter Your Country"
                            value={values.country}
                            onChange={handleChange}
                            type="text"
                            error={Boolean(errors.country) && touched.country && errors.country}
                        />
                        <Button disabled={isSubmitting} className="w-full" label={isSubmitting ? "Submitting" : "Submit"} variant={'regulerBtn'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalInformationForm;


/* 
  <select
              name="warehouse_name"
              id="warehouse_name"
              onChange={handleChange}
              value={values.warehouse_name}
              className="w-full block py-3 px-4 border border-gray-600 bg-white rounded-[6px] shadow-sm focus:outline-none"
            >
              <option disabled value="">
                Select warehouse
              </option>
              {warehousesData?.map((data) => (
                <option key={data.id} value={data.warehouse_name}>
                  {data.warehouse_name}
                </option>
              ))}
            </select>
*/



/* 
<div className="w-full">
              <p>Select Date </p>
              <div>
                <TextInput
                  className={"h-8 w-full"}
                  id={"select_date"}
                  value={format(values.select_date, "yyyy-MM-dd")}
                  onChange={handleChange}
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  error={
                    Boolean(errors.select_date) &&
                    touched.select_date &&
                    errors.select_date
                  }
                />
              </div>
            </div>
*/





