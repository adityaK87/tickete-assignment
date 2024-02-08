import React from "react";
import styles from "./index.module.css";
import { IoMdLock } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<p className={styles.checkOut}>
				<h1>tickete</h1>
				<span className={styles.checkOutText}>
					<IoMdLock />
					Checkout
				</span>
				<span className={(styles.checkOutText, styles.helpText)}>
					<IoIosHelpCircleOutline />
					Help
				</span>
			</p>
			<p className={styles.timer}>Holding your tickets for 30:00</p>
		</div>
	);
};

export default Header;
