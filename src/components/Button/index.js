import React from "react";
import { IoMdLock } from "react-icons/io";
import styles from "./index.module.css";
const Button = () => {
	return (
		<button className={styles.button}>
			<span className={styles.btnImg}>
				<IoMdLock />
			</span>
			<span className={styles.btnText}>Confirm & pay</span>
		</button>
	);
};

export default Button;
