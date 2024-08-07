
import TextInput from "@/components/inputs/TextInput";
import Button from "@/components/ui/button";
import { loginFormDataTypes } from "@/lib/type";
import { useFormik } from "formik";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

type LoginFormProps = {
    instance?: loginFormDataTypes;
    isSubmitting: boolean;
    handleDataSubmit: Function;
};

const LoginForm: FC<LoginFormProps> = ({
    isSubmitting,
    handleDataSubmit,
    instance,
}) => {
    const navigate = useNavigate();
    const { handleChange, values, touched, errors, handleSubmit, resetForm } =
        useFormik({
            initialValues: {
                user_email: instance?.user_email || "",
                password: instance?.password || "",
            },
            // validationSchema: Yup.object({
            // 	user_email: Yup.string()
            // 		.email("Invalid email address")
            // 		.required("Email is Required"),
            // 	password: Yup.string().required("Password is Required"),
            // }),
            onSubmit: async (data: any) => {
                try {
                    await handleDataSubmit(data);
                    resetForm();
                    navigate("/profile");
                    // toast({
                    //     variant: "success",
                    //     description: "Logged in successfully",
                    // });
                } catch (err) {
                    // toast({
                    //     variant: "destructive",
                    //     description: "Error Making Request",
                    // });
                }
            },
        });

    return (
        <form className="w-full space-y-5" onSubmit={handleSubmit}>
            <TextInput
                id="user_email"
                label="Email Address"
                placeholder="Enter Your Email"
                value={values.user_email}
                onChange={handleChange}
                type="email"
                error={
                    Boolean(errors.user_email) && touched.user_email && errors.user_email
                }
            />
            <TextInput
                id="password"
                label="Password"
                placeholder="Enter Password"
                value={values.password}
                onChange={handleChange}
                type="password"
                error={Boolean(errors.password) && touched.password && errors.password}
            />
            <Button
                disabled={isSubmitting}
                className="w-full"
                label={isSubmitting ? "Submitting" : "Submit"}
                variant={"regulerBtn"}
            />
        </form>
    );
};

// Default Component
const Login = () => {
    return (
        <div className="min-h-[calc(100vh-85px)] w-full  flex items-center justify-center">
            <div className="space-y-10 lg:w-[35%]">
                <div>
                    <p className="text-3xl font-semibold">Login Your Account</p>
                    <p>Submit Your Account Details</p>
                </div>
                <div>
                    <LoginForm handleDataSubmit={() => undefined} isSubmitting={false} />
                </div>
                <div className="text-sm  flex justify-between">
                    <div>
                        Dont Have An account?{" "}
                        <Link className="text-mm-primary-700" to={"/register"}>
                            Register
                        </Link>
                    </div>
                    <div className=" text-mm-primary-500">
                        <Link to={"/forget-password"}>Forget Password</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
