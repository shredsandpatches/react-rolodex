import './Card.styles.css';

export const Card = ({
	id,
	title,
	screenshotUrl,
	developer,
	format,
	publisher,
	region,
	yearPublished,
}) => (
	<div key={id} className="card-container">
		<figure className="screenshot-container">
			<img
				className="screenshot"
				src={screenshotUrl}
				alt={`Screenshot of ${title}`}
			/>
			<figcaption className="screenshot-caption">{yearPublished}</figcaption>
		</figure>
		<div className="text-wrapper">
			<h4 className="text-title">{title}</h4>
			<section className="text-details">
				<p>{`Format: ${format}`}</p>
				<p>{`Developer: ${developer}`}</p>
				<p>{`Publisher: ${publisher}`}</p>
				<p>{`Region: ${region}`}</p>
			</section>
		</div>
	</div>
);
