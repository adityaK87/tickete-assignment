import React from "react";
import FormHeading from "../FormHeading";
import Input from "../InputField";
import styles from "./index.module.css";

const MyDetails = () => {
	return (
		<div className={styles.myDetailsContainer}>
			<FormHeading
				heading={"Enter your details"}
				paragraph={
					"We'll be sending your tickets to the details below. Booking for a friend? Add their details."
				}
			/>
			<p>
				<Input
					type="text"
					placeHolder={"Full name *"}
					width={90}
					required={true}
				/>
				<Input
					type="number"
					placeHolder={"Country code *"}
					width={40}
					marginRight={2}
					required={true}
				/>
				<Input
					type="number"
					placeHolder={"Phone number *"}
					width={40}
					marginLeft={2}
					required={true}
				/>
				<Input
					type="email"
					placeHolder={"Email *"}
					width={40}
					marginRight={2}
					required={true}
				/>
				<Input
					type="email"
					placeHolder={"Confirm email *"}
					width={40}
					marginLeft={2}
					required={true}
				/>
			</p>
			<hr />
		</div>
	);
};

export default MyDetails;
