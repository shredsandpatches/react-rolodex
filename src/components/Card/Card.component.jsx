import './Card.styles.css';

export const Card = ({
	id,
	title,
	screenshotUrl,
	developer,
	format,
	publisher,
	region,
}) => (
	<div key={id} className="card-container">
		<img
			className="screenshot"
			src={screenshotUrl}
			alt={`Screenshot of ${title}`}
		/>
		<div className="text-wrapper">
			<h4 className="text-title">{title}</h4>
			<div className="text-details">
				<p>{`Format: ${format}`}</p>
				<p>{`Developer: ${developer}`}</p>
				<p>{`Publisher: ${publisher}`}</p>
				<p>{`Region: ${region}`}</p>
			</div>
		</div>
	</div>
);
