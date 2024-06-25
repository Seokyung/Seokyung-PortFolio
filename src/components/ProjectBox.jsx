import styled from "styled-components";

const ProjectBox = ({ project }) => {
	return (
		<Box key={project?.id}>
			<h2>{project?.name}</h2>
			<div className="contents">
				<div>
					<span className="title">{project?.title}</span>
					<hr />
					<span className="sector">{project?.sector}</span>
					<span className="role">{project?.role}</span>
					<span className="period">{project?.period}</span>
				</div>
				<div className="contents-info">
					<ContentBox>
						<h4>Descriptions</h4>
						<ul>
							{project?.descriptions.map((el, idx) => {
								return <li key={idx}>{el}</li>;
							})}
						</ul>
					</ContentBox>
					<ContentBox>
						<h4>What Did I Do</h4>
						<ul>
							{project?.works.map((el, idx) => {
								return <li key={idx}>{el}</li>;
							})}
						</ul>
					</ContentBox>
					<ContentBox>
						<h4>Links</h4>
						<ul>
							{project?.links.map((el, idx) => {
								return (
									<li key={idx}>
										<a href={el} target="_blank" rel="noreferrer">
											{el}
										</a>
									</li>
								);
							})}
						</ul>
					</ContentBox>
				</div>
				<div className="modal">
					<span>프로젝트 화면</span>
				</div>
			</div>
		</Box>
	);
};

const Box = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	width: 100%;
	/* background-color: var(--bg-color-secondary); */
	background-color: #cc6c1c;
	border-radius: 20px;
	h2 {
		margin-bottom: 0.5rem;
		color: var(--bg-color-light);
		font-family: var(--font-family-eng-card-title);
		font-size: var(--font-size-title-lg);
		line-height: 3rem;
		word-break: break-all;
	}
	.contents {
		flex: 1;
		display: flex;
		gap: 1.5rem;
		padding: 0.5rem;
		div {
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.contents-info {
			gap: 1rem;
		}
		.title {
			margin: 0.5rem 0;
			color: #111;
			font-size: 1.125rem;
			font-weight: 600;
			line-height: 1.375rem;
			word-spacing: 1.5px;
		}
		.sector,
		.role,
		.period {
			margin: 0.5rem 0;
			color: #222;
			font-family: var(--font-family-eng);
			font-size: 1.125rem;
			line-height: 1.25rem;
		}
		hr {
			width: 100%;
			height: 1px;
			background-color: #333;
		}
		.modal {
			display: flex;
			justify-content: center;
			align-items: center;
			width: auto;
			height: auto;
			background-color: #555;
			border-radius: 10px;
			span {
				color: #fff;
			}
		}
	}
`;

const ContentBox = styled.div`
	padding: 0.75rem;
	background-color: var(--bg-color-light);
	border-radius: 10px;
	h4 {
		margin-bottom: 0.25rem;
		font-size: 1rem;
		font-weight: 700;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.25rem 0;
		padding-left: 1rem;
		li {
			font-size: 1rem;
			line-height: 1.25rem;
			word-break: break-all;
			list-style: disc;
		}
	}
`;

export default ProjectBox;
