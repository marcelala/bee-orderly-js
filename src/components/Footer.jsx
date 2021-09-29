export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<h5>
			Copyright   © EIKA {currentYear}
		</h5>
	);
}
