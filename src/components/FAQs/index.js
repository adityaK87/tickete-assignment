import React from "react";
import styles from "./index.module.css";
import FormHeading from "../FormHeading";
import Accordian from "../Accordian";
const FAQs = () => {
	return (
		<div className={styles.FAQsContainer}>
			<div className={styles.FAQsRight}>
				<FormHeading
					heading={"Frequently asked questions"}
					paragraph={"Here are some of our most asked questions. "}
				/>
			</div>
			<div className={styles.FAQsLeft}>
				<Accordian />
				<Accordian />
				<Accordian />
				<Accordian />
			</div>
		</div>
	);
};

export default FAQs;
