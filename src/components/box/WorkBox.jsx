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
					<span className="sector">{item?.sector}</span>
					<span className="role">{item?.role}</span>
					<span className="period">{item?.period}</span>
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
						<h4>링크</h4>
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
	max-width: 850px;
	background-color: var(--bg-color-light);
	border-radius: 10px;
`;

const CompanyBox = styled.div`
	h2 {
		margin-bottom: 0.5rem;
		color: var(--font-color-primary);
		font-family: var(--font-family-kor-title);
		font-size: 2rem;
		letter-spacing: 0.5px;
		line-height: 2.25rem;
	}
	span {
		padding-left: 0.25rem;
		color: var(--font-color-secondary);
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
	gap: 0.75rem;
	width: 25%;
	@media (max-width: 768px) {
		width: 100%;
		gap: 0.5rem;
	}
	span {
		color: var(--font-color-secondary);
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

const DescriptionBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	width: 100%;
`;

const ContentBox = styled.div`
	border-radius: 10px;
	h4 {
		color: var(--font-color-primary);
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
			color: var(--font-color-secondary);
			font-size: 0.9rem;
			letter-spacing: -0.5px;
			word-spacing: 1px;
			line-height: 1.375rem;
			a {
				color: inherit;
				svg {
					color: var(--color-orange);
					width: 14px;
					height: auto;
				}
				&:hover,
				&:hover svg {
					color: var(--color-orange);
				}
			}
		}
	}
`;

export default WorkBox;
