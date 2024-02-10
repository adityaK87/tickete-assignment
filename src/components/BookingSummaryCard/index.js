import React from "react";
import styles from "./index.module.css";
import ImageSlider from "../ImageSlider";
import { IoTimeSharp } from "react-icons/io5";
import { PiTicketFill } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { BsCalendar2Fill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import Button from "../Button";

const BookingSummaryCard = () => {
	return (
		<div className={styles.BookingContainer}>
			<p className={styles.imageSlider}>
				<ImageSlider />
			</p>
			<p className={styles.bookingPlace}>
				<p className={styles.placeRating}>
					<b className={styles.bold}>⭐4.9</b> (4.5k){" "}
					<li>&lt;category&gt;</li>
				</p>
				<h3 className={styles.placeName}>
					Amsterdam open boat canal cruise - Live Guiye - from Anne
					Frank Housef
				</h3>
			</p>

			<p className={styles.ticketDetailList}>
				<li className={styles.ticketDetail}>
					<span className={styles.logo}>
						<PiTicketFill />
					</span>
					<span className={styles.name}>
						&lt;ticket type - variant&gt;
					</span>
				</li>
				<li className={styles.ticketDetail}>
					<span className={styles.logo}>
						<BsCalendar2Fill />
					</span>
					<span className={styles.name}>
						&lt;day&gt;, &lt;month&gt; &lt;date&gt;
					</span>
				</li>
				<p className={styles.duration}>Duration: &lt;duration&gt;</p>
				<li className={styles.ticketDetail}>
					<span className={styles.logo}>
						<IoTimeSharp />
					</span>
					<span className={styles.name}>&lt;time&gt;</span>
				</li>
				<p className={styles.duration}>
					Operating hours: &lt;time&gt; to &lt;time&gt;
				</p>
				<li className={styles.ticketDetail}>
					<span className={styles.logo}>
						<FaUserGroup />
					</span>
					<span className={styles.name}>5 guests</span>
				</li>
			</p>

			<p className={styles.paymentSummary}>
				<span>View payment summary</span>
				<span>
					<FaPlus />
				</span>
			</p>
			<hr />
			<p className={styles.totalPayable}>
				<p>Total payable</p>
				<p>$XXX</p>
			</p>
			<p className={styles.savings}>
				<span>
					<MdSavings />
				</span>
				<span>You saved &lt;price&gt;</span>
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
			<p className={styles.btn}>
				<Button />
			</p>
		</div>
	);
};

export default BookingSummaryCard;
