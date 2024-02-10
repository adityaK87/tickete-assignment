import SimpleImageSlider from "react-simple-image-slider";
import styles from "./index.module.css";
import { FaTrophy } from "react-icons/fa";

const images = [
	{
		url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c7/5d/1e.jpg",
	},
	{
		url: "https://fh-sites.imgix.net/sites/4245/2023/05/20184220/Anne-Frank-House-Amsterdam-Circle-Line.jpg?auto=compress%2Cformat&fit=crop&crop=faces&w=1200&h=675",
	},
	{
		url: "https://www.carnival.com/shop/medias/883009-img1.jpg?context=bWFzdGVyfGltYWdlc3wzMDE3ODB8aW1hZ2UvanBlZ3xhR0ppTDJneU15ODRPVEE0TlRJM01UQTRNVEkyTHpnNE16QXdPUzFwYldjeExtcHdad3wyNGM1OTRhYzE0MDEwNTkwNDgzY2YwN2I0ODQxNWYxYjQzYzRlY2MwY2JlNDU0MWZiZjJhYTQzNzI1YTllZTI2&w=1232&h=647&resize_profile=pdphero",
	},
	{
		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHllMMkOtJ0H5uFNBOr00GCMBu2RIvb_WOi0Q_cLahswKMUXoaMVqTyhDDUQCXfXSm2wA&usqp=CAU",
	},
	{
		url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/47/44/5b/caption.jpg?w=300&h=300&s=1",
	},
];

const ImageSlider = () => {
	return (
		<div className={styles.imgSliderContainer}>
			<p className={styles.bestseller}>
				<FaTrophy />
				Bestseller
			</p>
			<SimpleImageSlider
				width={300}
				height={178}
				images={images}
				autoPlay={false}
				loop={true}
				bgColor="#fff"
				showBullets={true}
				showNavs={true}
				navMargin={5}
			/>
		</div>
	);
};

export default ImageSlider;
