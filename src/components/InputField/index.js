import React from "react";
import styles from "./index.module.css";

const Input = ({
	type,
	placeHolder,
	required,
	width,
	marginRight,
	marginLeft,
}) => {
	return (
		<input
			type={type}
			placeHolder={placeHolder}
			style={{
				width: `${width}%`,
				marginRight: `${marginRight}%`,
				marginLeft: `${marginLeft}%`,
			}}
			className={styles.inputField}
			required={required}
		/>
	);
};

Input.defaultProps = {
	marginRight: 0,
	marginLeft: 0,
};

export default Input;
