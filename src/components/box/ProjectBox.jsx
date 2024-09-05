import styled from "styled-components";
import { ReactComponent as LinkIcon } from "../../assets/svg/link_icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

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
					<span className="period">{item?.period}</span>
					<span className="sector">{item?.sector}</span>
					<span className="role">{item?.role}</span>
				</RoleBox>
				<ContentBox>
					<Content>
						<h4>📢 프로젝트 소개</h4>
						<ul>
							{item?.descriptions.map((el, idx) => {
								return <li key={idx}>{el}</li>;
							})}
						</ul>
					</Content>
					<Content>
						<h4>💡 담당 내용</h4>
						<ul>
							{item?.works.map((el, idx) => {
								return <li key={idx}>{el}</li>;
							})}
						</ul>
					</Content>
					<Content>
						<h4>🐈‍⬛ Github</h4>
						<a href={item?.github} target="_blank" rel="noreferrer">
							{item?.github.slice(8)}
						</a>
					</Content>
					{item.url && (
						<Content>
							<h4>🔗 URL</h4>
							<a href={item?.url} target="_blank" rel="noreferrer">
								{item?.name} <LinkIcon />
							</a>
						</Content>
					)}
				</ContentBox>
				{item.imgs.length !== 0 && (
					<ProjectSwiper>
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							loop={true}
							navigation={true}
							pagination={{
								type: "fraction",
							}}
							modules={[Pagination, Navigation]}
						>
							{item?.imgs.map((el, idx) => {
								return (
									<SwiperSlide key={el.alt}>
										<div>
											<img src={el.src} alt={el.alt} />
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</ProjectSwiper>
				)}
			</ProjectWrapper>
		</Box>
	);
};

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.25rem 1rem;
	width: 100%;
	background-color: var(--bg-color-light);
	border-radius: 10px;
`;

const ProjectInfo = styled.div`
	width: 100%;
	h2 {
		margin-bottom: 0.5rem;
		color: var(--color-orange);
		font-family: var(--font-family-kor-title);
		font-size: 1.75rem;
		letter-spacing: 0.75px;
		line-height: 2rem;
	}
	span {
		padding-left: 2px;
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

const ProjectWrapper = styled.div`
	display: flex;
	padding: 0.5rem;
	width: 100%;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 1.5rem;
		padding: 0 0.25rem;
	}
`;

const RoleBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 30%;
	min-width: 130px;
	padding-right: 1rem;
	@media (max-width: 768px) {
		width: 100%;
		min-width: unset;
		padding-right: 0;
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
	}
`;

const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	width: 100%;
`;

const Content = styled.div`
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
			.bold {
				font-weight: 600;
			}
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
			font-weight: 600;
		}
	}
`;

const ProjectSwiper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120%;
	height: auto;
	margin-left: 1.125rem;
	overflow: hidden;
	@media (max-width: 768px) {
		width: 100%;
		margin-left: 0;
	}
	.swiper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		div {
			display: flex;
			width: 100%;
			height: 100%;
			/* aspect-ratio: 1 / 1; */
			/* background-color: #c3c3c3; */
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
				max-height: 500px;
			}
		}
	}
	.swiper-button-prev {
		left: 6px;
		@media (max-width: 768px) {
			left: 0;
		}
	}
	.swiper-button-next {
		right: 6px;
		@media (max-width: 768px) {
			right: 0;
		}
	}
	.swiper-button-prev,
	.swiper-button-next {
		width: 36px;
		height: 42px;
		&::after {
			color: #7a7a7a;
			font-size: 32px;
			font-weight: 700;
		}
	}
	.swiper-pagination-fraction {
		bottom: 12px;
		color: #4c4c4c;
		font-size: 14px;
		font-weight: 600;
		letter-spacing: -0.45px;
		/* text-shadow: var(--color-white) 0 0 2px; */
	}
`;

export default ProjectBox;
