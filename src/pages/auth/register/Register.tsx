import TextInput from "@/components/inputs/TextInput";
import Button from "@/components/ui/button";
import { registerFormDataTypes } from "@/lib/type";
import { useFormik } from "formik";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

type RegisterFormProps = {
	instance?: registerFormDataTypes;
	isSubmitting: boolean;
	handleDataSubmit: Function;
};

const RegisterForm: FC<RegisterFormProps> = ({
	isSubmitting,
	handleDataSubmit,
	instance,
}) => {
	const navigate = useNavigate();
	const { handleChange, values, touched, errors, handleSubmit, resetForm } =
		useFormik({
			initialValues: {
				user_email: instance?.user_email || "",
			},
			// validationSchema: Yup.object({
			// 	user_email: Yup.string()
			// 		.email("Invalid email address")
			// 		.required("Email is Required"),
			// }),
			onSubmit: async (data: any) => {
				try {
					await handleDataSubmit(data);
					navigate("/register-request");
					resetForm();
				} catch (err) {
					//  Show error toast or message here
					// toast({
					// 	variant: "destructive",
					// 	description: "Error Making Request",
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
const Register = () => {
	return (
		<div className="min-h-[calc(100vh-200px)] w-full  flex items-center justify-center">
			<div className="space-y-10 md:w-[35%]">
				<div>
					<p className="text-3xl font-semibold">Register an Account</p>
					<p>Get started by submitting email address.</p>
				</div>
				<div>
					<RegisterForm
						handleDataSubmit={() => undefined}
						isSubmitting={false}
					/>
				</div>
				<div>
					Already Have An account?{" "}
					<Link className="text-mm-primary-700" to={"/login"}>
						Sign In
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
