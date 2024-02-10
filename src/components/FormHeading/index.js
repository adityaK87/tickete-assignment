import React from "react";
import styles from "./index.module.css";
const FormHeading = ({ heading, paragraph }) => {
	return (
		<div className={styles.formContainer}>
			<h1 className={styles.formHeading}>{heading}</h1>
			<p className={styles.formDetail}>{paragraph} </p>
		</div>
	);
};

export default FormHeading;
