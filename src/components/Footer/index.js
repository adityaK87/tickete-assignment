import React from "react";
import styles from "./index.module.css";

const Footer = () => {
	return (
		<div className={styles.footerContainer}>
			<h1 className={styles.footerHeading}>tickete</h1>
			<hr />
			<div className={styles.footerContent}>
				<p className={styles.footerContentLove}>Made with❤️</p>
				<ul className={styles.listItems}>
					<li className={styles.listItem}>Privacy policy</li>
					<li className={styles.listItem}>Terms of usage</li>
					<li className={styles.listItem}>Cancellation policy</li>
					<li className={styles.listItem}>Sitemap</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
