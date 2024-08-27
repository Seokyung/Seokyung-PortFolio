import styled from "styled-components";
import { ReactComponent as LinkIcon } from "../../assets/svg/link_icon.svg";

const ProjectBox = ({ item }) => {
	return (
		<Box key={item?.id}>
			<ProjectInfo>
				<h2>{item?.name}</h2>
				<span>{item?.title}</span>
			</ProjectInfo>
			<Divider />
			<ProjectWrapper>
				<RoleBox>
					<span className="sector">{item?.sector}</span>
					<span className="role">{item?.role}</span>
					<span className="period">{item?.period}</span>
				</RoleBox>
				<ContentBox>
					<Content>
						<h4>프로젝트 소개</h4>
						<ul>
							{item?.descriptions.map((el, idx) => {
								return <li key={idx}>{el}</li>;
							})}
						</ul>
					</Content>
					<Content>
						<h4>담당 내용</h4>
						<ul>
							{item?.works.map((el, idx) => {
								return <li key={idx}>{el}</li>;
							})}
						</ul>
					</Content>
					<Content>
						<h4>Github</h4>
						<a href={item?.github} target="_blank" rel="noreferrer">
							{item?.github.slice(8)}
						</a>
					</Content>
					{item.url && (
						<Content>
							<h4>URL</h4>
							<a href={item?.url} target="_blank" rel="noreferrer">
								{item?.name} <LinkIcon />
							</a>
						</Content>
					)}
				</ContentBox>
				<ProjectModal>
					<span>프로젝트 화면</span>
				</ProjectModal>
			</ProjectWrapper>
		</Box>
	);
};

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.25rem 1rem;
	width: 100%;
	max-width: 850px;
	background-color: var(--bg-color-light);
	border-radius: 10px;
`;

const ProjectInfo = styled.div`
	h2 {
		margin-bottom: 0.5rem;
		color: var(--color-light-orange);
		font-family: var(--font-family-kor-title);
		font-size: 1.75rem;
		letter-spacing: 0.75px;
		line-height: 2rem;
		word-break: break-all;
		word-wrap: break-word;
	}
	span {
		padding-left: 0.25rem;
		color: var(--font-color-default);
		font-size: 0.9rem;
		font-weight: 400;
		line-height: 1.25rem;
		letter-spacing: -0.5px;
		word-spacing: 1.25px;
	}
`;

const Divider = styled.hr`
	width: 100%;
	height: 1px;
	margin: 1rem 0;
`;

const ProjectWrapper = styled.div`
	display: flex;
	gap: 1.5rem;
	padding: 0.5rem;
	width: 100%;
	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 0.25rem;
	}
`;

const RoleBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 25%;
	@media (max-width: 768px) {
		width: 100%;
		gap: 0.5rem;
	}
	span {
		color: var(--font-color-default);
		font-family: var(--font-family-eng);
		font-size: 1rem;
		letter-spacing: -0.25px;
		line-height: 1.25rem;
	}
	.sector,
	.role,
	.period {
	}
`;

const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	width: 100%;
`;

const Content = styled.div`
	border-radius: 10px;
	h4 {
		color: var(--color-light-orange);
		margin-bottom: 0.5rem;
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: -1.5px;
		word-spacing: -1.25px;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding-left: 1.125rem;
		list-style-type: "- ";
		li {
			color: var(--font-color-default);
			font-size: 0.9rem;
			letter-spacing: -0.5px;
			word-spacing: 1px;
			line-height: 1.375rem;
		}
	}
	a {
		padding-left: 1.125rem;
		color: var(--color-blue);
		svg {
			color: inherit;
			width: 14px;
			height: auto;
		}
		&:hover {
			color: var(--color-light-orange);
		}
	}
`;

const ProjectModal = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: auto;
	aspect-ratio: 1/1;
	background-color: #bababa;
	border-radius: 10px;
	span {
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export default ProjectBox;
