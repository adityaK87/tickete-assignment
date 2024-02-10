import React from "react";
import FormHeading from "../FormHeading";
import Input from "../InputField";
import styles from "./index.module.css";
const AdditionalInfo = () => {
	return (
		<div className={styles.additionalInfoContainer}>
			<FormHeading
				heading={"Additional information"}
				paragraph={
					"We need a few more details to complete your reservation."
				}
			/>
			<p>
				<Input
					type="text"
					placeHolder={"Input label *"}
					width={40}
					marginRight={2}
					required={true}
				/>
				<Input
					type="text"
					placeHolder={"Select *"}
					width={40}
					marginLeft={2}
					required={true}
				/>
				<Input
					type="number"
					placeHolder={"Multiselect *"}
					width={90}
					required={true}
				/>
			</p>
			<hr />
		</div>
	);
};

export default AdditionalInfo;
