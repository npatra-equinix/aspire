// import PostContainer from "./PostContainer";


export default function MainContent() {
	// const postContainer = PostContainer();
	return (
		<div class='main-content'>
			<div class='story-gallery'>
				<div class='story story1'>
					<img src="https://i.postimg.cc/TPh453Zz/upload.png"></img>
					<p>Post Story</p>
				</div>
				<div class='story story2'>
					<img src="https://i.postimg.cc/XNPtfdVs/member-1.png"></img>
					<p>Alison</p>
				</div>
				<div class='story story3'>
					<img src="https://i.postimg.cc/4NhqByys/member-2.png"></img>
					<p>Jackson</p>
				</div>
				<div class='story story4'>
					<img src="https://i.postimg.cc/FH5qqvkc/member-3.png"></img>
					<p>Samona</p>
				</div>
				<div class='story story5'>
					<img src="https://i.postimg.cc/Sx65bPcP/member-4.png"></img>
					<p>John Doe</p>
				</div>

			</div>
			<div class='write-post-container'>
				<div class="user-profile">
					<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
					<div>
						<p>John Nicholson</p>
						<small>Public <i class="fas fa-caret-down"></i></small>
					</div>
				</div>
				<div class="post-input-container">
					<textarea rows="3" placeholder="What's on your mind, John?"></textarea>
					<div class="add-post-links">
						<a href="#"><img src="https://i.postimg.cc/QMD2BDXs/live-video.png"></img>Live Video</a>
						<a href="#"><img src="https://i.postimg.cc/6pKKZn0D/photo.png"></img>Photo/Video</a>
						<a href="#"><img src="https://i.postimg.cc/Pf6TBCdD/feeling.png"></img>Feling/Activity</a>
					</div>
				</div>
			</div>

			{/* <>
            {postContainer}
            </> */}

			<div class='post-container'>
				<div class="post-row">
					<div class="user-profile">
						<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
						<div>
							<p>John Nicholson</p>
							<span>June 24 2021, 13:40 pm</span>
						</div>
					</div>
					<a href="#"><i class="fas fa-ellipsis-v"></i></a>
				</div>
				<p class="post-text">Subscribe <span>@Vkive Tutorials</span> Youtube Channel to watch more videos on
					website development and UI desings. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
				<img src="https://i.postimg.cc/9fjhGTY6/feed-image-1.png" class="post-img"></img>

				<div class="post-row">
					<div class="activity-icons">
						<div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"></img>120</div>
						<div><img src="https://i.postimg.cc/rmjMymWv/comments.png"></img>45</div>
						<div><img src="https://i.postimg.cc/T2bBchpG/share.png"></img>20</div>
					</div>
					<div class="post-porfile-icon">
						<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
						{/* <i class="fas fa-caret-down"></i>  */}
					</div>
				</div>

			</div>
			<div class="post-container">
				<div class="post-row">
					<div class="user-profile">
						<img src="://i.phttpsostimg.cc/cHg22LhR/profile-pic.png"></img>
						<div>
							<p>John Nicholson</p>
							<span>June 24 2021, 13:40 pm</span>
						</div>
					</div>
					<a href="#"><i class="fas fa-ellipsis-v"></i></a>
				</div>
				<p class="post-text">Like and share this video with friends, tag<span>@Vkive Tutorials</span>facebook page on your post.
					Ask your dobuts in the comments. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
				<img src="https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png" class="post-img"></img>
				<div class="post-row">
					<div class="activity-icons">
						<div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"></img>120</div>
						<div><img src="https://i.postimg.cc/rmjMymWv/comments.png"></img>45</div>
						<div><img src="https://i.postimg.cc/T2bBchpG/share.png"></img>20</div>
					</div>
					<div class="post-porfile-icon">
						<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
						{/* <i class="fas fa-caret-down"></i>  */}
					</div>
				</div>
			</div>
			<div class="post-container">
				<div class="post-row">
					<div class="user-profile">
						<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
						<div>
							<p>John Nicholson</p>
							<span>June 24 2021, 13:40 pm</span>
						</div>
					</div>
					<a href="#"><i class="fas fa-ellipsis-v"></i></a>
				</div>
				<p class="post-text">Like and share this video with friends, tag<span>@Vkive Tutorials</span>facebook page on your post.
					Ask your dobuts in the comments. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
				<img src="https://i.postimg.cc/tJ7QXz9x/feed-image-3.png" class="post-img"></img>
				<div class="post-row">
					<div class="activity-icons">
						<div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"></img>120</div>
						<div><img src="https://i.postimg.cc/rmjMymWv/comments.png"></img>45</div>
						<div><img src="https://i.postimg.cc/T2bBchpG/share.png"></img>20</div>
					</div>
					<div class="post-porfile-icon">
						<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
						<i class="fas fa-caret-down"></i>
					</div>
				</div>
			</div>
			<div class="post-container">
				<div class="post-row">
					<div class="user-profile">
						<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
						<div>
							<p>John Nicholson</p>
							<span>June 24 2021, 13:40 pm</span>
						</div>
					</div>
					<a href="#"><i class="fas fa-ellipsis-v"></i></a>
				</div>
				<p class="post-text">Like and share this video with friends, tag<span>@Vkive Tutorials</span>facebook page on your post.
					Ask your dobuts in the comments. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
				<img src="https://i.postimg.cc/hjDRYBwM/feed-image-4.png" class="post-img"></img>
				<div class="post-row">
					<div class="activity-icons">
						<div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"></img>120</div>
						<div><img src="https://i.postimg.cc/rmjMymWv/comments.png"></img>45</div>
						<div><img src="https://i.postimg.cc/T2bBchpG/share.png"></img>20</div>
					</div>
					<div class="post-porfile-icon">
						<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
						<i class="fas fa-caret-down"></i>
					</div>
				</div>
			</div>
			<div class="post-container">
				<div class="post-row">
					<div class="user-profile">
						<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
						<div>
							<p>John Nicholson</p>
							<span>June 24 2021, 13:40 pm</span>
						</div>
					</div>
					<a href="#"><i class="fas fa-ellipsis-v"></i></a>
				</div>
				<p class="post-text">Like and share this video with friends, tag<span>@Vkive Tutorials</span>facebook page on your post.
					Ask your dobuts in the comments. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a></p>
				<img src="https://i.postimg.cc/ZRwztQzm/feed-image-5.png" class="post-img"></img>
				<div class="post-row">
					<div class="activity-icons">
						<div><img src="https://i.postimg.cc/pLKNXrMq/like-blue.png"></img>120</div>
						<div><img src="https://i.postimg.cc/rmjMymWv/comments.png"></img>45</div>
						<div><img src="https://i.postimg.cc/T2bBchpG/share.png"></img>20</div>
					</div>
					<div class="post-porfile-icon">
						<img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
						{/* <i class="fas fa-caret-down"></i>  */}
					</div>
				</div>
			</div>

			<button type="button" class="load-more-buttons">Load More</button>
		</div>
	);
}