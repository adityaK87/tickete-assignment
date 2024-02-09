import React from "react";
import styles from "./index.module.css";
const Detail = ({ summary, paragrapgh }) => {
	return (
		<details open className={styles.accordianContainer}>
			<summary>What are some hidden gems to see in Rome?</summary>
			<p>
				Rome is packed with hidden gems. If you love art, don't miss the
				Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco
				is a free museum and well worth a quick visit. If you love the
				ancient stuff, don't miss the Domus Romana at Palazzo Valentini,
				the Domus Aurea, and the Baths of Caracalla. For even more
				hidden gems, take a tour of Trastevere, a fascinating
				neighborhood full of history and ambiance.
			</p>
		</details>
	);
};

export default Detail;
