import DataPostContainer from "./DataPostContainer";

export default function PostContainer() {

	const dataPostContainer = DataPostContainer().map((e) => {
		<div class='post-container'>
			<div class="post-row">
				<div class="user-profile">
					<img src={e[0].src}></img>
					<div>
						<p>{e[0].p}</p>
						<span>{e[0].span}</span>
					</div>
				</div>
				<a href="#"><i class="fas fa-ellipsis-v"></i></a>
			</div>
			<p class="post-text">{e[1].postText} <span>{e[1].span}</span> {e[1].text}
				<a href="#">{e[1].link1Text}</a>
				<a href="#">{e[1].link2Text}</a>
			</p>
			<img src={e[2].src} class="post-img"></img>

			<div class="post-row">
				<div class="activity-icons">
					<div>
						<img src={e[3][0].src}></img>{e[3][0].text}
					</div>
					<div>
						<img src={e[3][1].src}></img>{e[3][1].text}
					</div>
					<div>
						<img src={e[3][2].src}></img>{e[3][2].text}
					</div>
				</div>
				<div class="post-porfile-icon">
					<img src={e[3][3].src}></img>
					{/* <i class="fas fa-caret-down"></i> */}
				</div>
			</div>

		</div>
	});
	return (dataPostContainer);
}