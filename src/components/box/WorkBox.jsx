import styled from "styled-components";
import { ReactComponent as LinkIcon } from "../../assets/svg/link_icon.svg";

const WorkBox = ({ item }) => {
	return (
		<Box key={item?.id}>
			<CompanyBox>
				<h2>{item?.companyName}</h2>
				<span>{item?.companyInfo}</span>
			</CompanyBox>
			<Divider />
			<ContentWrapper>
				<RoleBox>
					<span className="period">{item?.period}</span>
					<span className="sector">{item?.sector}</span>
					<span className="role">{item?.role}</span>
				</RoleBox>
				<DescriptionBox>
					<ContentBox>
						<h4>주요 업무</h4>
						<ul>
							{item?.works.map((el, idx) => {
								return <li key={idx}>{el}</li>;
							})}
						</ul>
					</ContentBox>
					<ContentBox>
						<h4>URL</h4>
						<ul>
							{item?.links.map((el, idx) => {
								return (
									<li key={idx}>
										<a href={el.url} target="_blank" rel="noreferrer">
											{el.siteName} <LinkIcon />
										</a>
									</li>
								);
							})}
						</ul>
					</ContentBox>
				</DescriptionBox>
			</ContentWrapper>
		</Box>
	);
};

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.25rem 1rem;
	width: 100%;
	max-width: var(--max-box-width);
	background-color: var(--bg-color-light);
	border-radius: 10px;
`;

const CompanyBox = styled.div`
	h2 {
		margin-bottom: 0.5rem;
		color: var(--font-color-primary);
		font-family: var(--font-family-kor-title);
		font-size: 1.75rem;
		letter-spacing: 0.75px;
		line-height: 2rem;
	}
	span {
		padding-left: 4px;
		color: var(--font-color-default);
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.125rem;
		letter-spacing: -0.75px;
		word-spacing: 1px;
	}
`;

const Divider = styled.hr`
	width: 100%;
	height: 1px;
	margin: 1rem 0;
`;

const ContentWrapper = styled.div`
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
	gap: 0.5rem;
	width: 25%;
	@media (max-width: 768px) {
		width: 100%;
	}
	span {
		color: var(--font-color-default);
		font-family: var(--font-family-eng);
		font-size: 1rem;
		letter-spacing: -0.25px;
		line-height: 1.25rem;
	}
	.role {
		color: var(--font-color-primary);
		font-weight: 600;
		/* font-size: 1.125rem; */
	}
`;

const DescriptionBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	width: 100%;
`;

const ContentBox = styled.div`
	border-radius: 10px;
	h4 {
		color: var(--color-light-orange);
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
		font-weight: 700;
		letter-spacing: -0.75px;
		word-spacing: -1px;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding-left: 1.125rem;
		list-style-type: "- ";
		li {
			color: var(--font-color-default);
			font-size: 1rem;
			letter-spacing: -0.75px;
			word-spacing: 0.5px;
			line-height: 1.375rem;
		}
	}
	a {
		color: var(--color-blue);
		svg {
			color: inherit;
			width: 12px;
			height: auto;
		}
		&:hover {
			font-weight: 600;
		}
	}
`;

export default WorkBox;
