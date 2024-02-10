import React from "react";
import styles from "./index.module.css";
import { FaApplePay } from "react-icons/fa6";
import { MdSavings } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosAlert } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import Button from "../Button";
import Input from "../InputField";
import FormHeading from "../FormHeading";

const PaymentMethod = () => {
	return (
		<div className={styles.paymentMethodContainer}>
			<FormHeading
				heading={"Select your mode of payment"}
				paragraph={"Payments with Tickete are secure and encrypted."}
			/>
			<p className={styles.creditCard}>
				<label className={`${styles.containerRadio} ${styles.cred}`}>
					<span className={styles.upi}>
						<CiCreditCard1 />
					</span>
					Credit & debit card
					<input type="radio" name="radio" checked />
				</label>
				<Input
					type="text"
					placeHolder={"Name on card *"}
					width={40}
					marginRight={2}
					required={true}
				/>
				<Input
					type="number"
					placeHolder={"Card number *"}
					width={40}
					marginLeft={2}
					required={true}
				/>
				<Input
					type="date"
					placeHolder={"Expiry date*"}
					width={40}
					marginRight={2}
					required={true}
				/>
				<Input
					type="number"
					placeHolder={"<CVV/CVC> *"}
					width={40}
					marginLeft={2}
					required={true}
				/>
				<hr />
				<p className={styles.totalExpense}>
					<p className={styles.rupay}>Total payable: $XXX</p>
					<p className={styles.chip}>
						{" "}
						<span>
							<MdSavings />
						</span>
						<span>You saved &lt;price&gt;</span>
					</p>
				</p>
				<p className={styles.charged}>
					You will be charged in AED{" "}
					<span>
						<CiCircleInfo />
					</span>
				</p>
				<p className={styles.policies}>
					By clicking “confirm & pay”, you agree to
					<a href="https://www.linkedin.com/in/adityak87/">
						{" "}
						Tickete’s general terms and conditions{" "}
					</a>
					and{" "}
					<a href="https://www.linkedin.com/in/adityak87/">
						{" "}
						cancellation policy.
					</a>
				</p>
				<p>
					<Button />
				</p>
			</p>

			<label className={styles.containerRadio}>
				<span className={styles.upi}>
					<FaApplePay />
				</span>
				Coming soon
				<input type="radio" name="radio" disabled />
			</label>
			<label className={styles.containerRadio}>
				<span className={styles.upi}>
					<FaGooglePay />
				</span>
				Coming soon
				<input type="radio" name="radio" disabled />
			</label>
			<hr />

			<p className={`${styles.totalExpense} ${styles.totalExpenseDown}`}>
				<p className={styles.rupay}>Total payable: $XXX</p>
				<p className={styles.chip}>
					<span>
						<MdSavings />
					</span>
					<span>You saved &lt;price&gt;</span>
				</p>
			</p>
			<p className={styles.alertBox}>
				<span>
					<IoIosAlert />
				</span>
				<p className={styles.alertDetail}>
					<span className={styles.alertHeading}>
						You will be charged in AED
					</span>
					<span className={styles.alertPara}>
						The price shown here is in US Dollar (USD) as per the
						current conversion rate. You will be charged in United
						Arab Emirates Dirham (AED).
					</span>
				</p>
			</p>
			<hr />
		</div>
	);
};

export default PaymentMethod;
