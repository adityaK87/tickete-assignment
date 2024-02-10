import React from "react";

import AdditionalInfo from "../AdditionalInfo";
import PaymentMethod from "../PaymentMethod";
import MyDetails from "../MyDetail";
import { IoIosAlert } from "react-icons/io";
import BookingSummaryCard from "../BookingSummaryCard";
import styles from "./index.module.css";
const LandingPage = () => (
	<div>
		<p className={styles.landingHeading}>Confirm & pay</p>
		<p className={styles.alertBox}>
			<p className={styles.alertDetail}>
				<span className={styles.alertHeading}>Free cancellation</span>
				<span className={styles.alertPara}>
					Tickets can be cancelled by 13th December, 2022.
				</span>
			</p>
			<span>
				<IoIosAlert />
			</span>
		</p>
		<div className={styles.landingContainer}>
			<div className={styles.right}>
				<MyDetails />
				<AdditionalInfo />
				<PaymentMethod />
			</div>
			<div className={styles.left}>
				<BookingSummaryCard />
			</div>
		</div>
	</div>
);

export default LandingPage;
