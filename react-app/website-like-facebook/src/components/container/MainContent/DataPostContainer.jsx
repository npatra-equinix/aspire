const postsArray = [
	{
		author: {
			name: "John Nicholson",
			imageSource: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
		},
		post: {
			time: "June 24 2021, 13:40 pm",
			text: [
				{ post_text: `Subscribe {org} Youtube Channel to watch more videos onwebsite development and UI desings.` },
				{ org: "@Vkive Tutorials" },
				{ link1_text: "#VkiveTutorials" },
				{ link2_text: "#YoutubeChannel" },
			],
			img_src: "https://i.postimg.cc/9fjhGTY6/feed-image-1.png",
			likes: 120,
			comments: 45,
			shares: 20,
		}
	},
	{
		author: {},
		post: {}
	}
]


// export default function DataPostContainer() {
// 	const dataPostContainer = [
// 		[
// 			{
// 				src: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
// 				p: "John Nicholson",
// 				span: "June 24 2021, 13:40 pm"
// 			},
// 			{
// 				postText: "Subscribe",
// 				span: "@Vkive Tutorials",
// 				text: "Youtube Channel to watch more videos on  website development and UI desings",
// 				link1Text: "#VkiveTutorials",
// 				link2Text: "#YoutubeChannel"
// 			},
// 			{ src: "https://i.postimg.cc/9fjhGTY6/feed-image-1.png" },
// 			[
// 				{ src: "https://i.postimg.cc/pLKNXrMq/like-blue.png", text: "120" },
// 				{ src: "https://i.postimg.cc/rmjMymWv/comments.png", text: "45" },
// 				{ src: "https://i.postimg.cc/T2bBchpG/share.png", text: "20" },
// 				{ src: "https://i.postimg.cc/cHg22LhR/profile-pic.png", text: "" }
// 			]
// 		],

// 		[
// 			{
// 				src: "://i.phttpsostimg.cc/cHg22LhR/profile-pic.png",
// 				p: "John Nicholson",
// 				span: "June 24 2021, 13:40 pm"
// 			},
// 			{
// 				postText: "Like and share this video with friends, tag",
// 				span: "@Vkive Tutorials",
// 				text: "facebook page on your post.Ask your dobuts in the comments.",
// 				link1Text: "#VkiveTutorials",
// 				link2Text: "#VkiveTutorials"
// 			},
// 			{ src: "https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png" },
// 			[
// 				{ src: "https://i.postimg.cc/pLKNXrMq/like-blue.png", text: "120" },
// 				{ src: "https://i.postimg.cc/rmjMymWv/comments.png", text: "45" },
// 				{ src: "https://i.postimg.cc/T2bBchpG/share.png", text: "20" },
// 				{ src: "https://i.postimg.cc/cHg22LhR/profile-pic.png", text: "" }
// 			]
// 		],
// 		[
// 			{
// 				src: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
// 				p: "John Nicholson",
// 				span: "June 24 2021, 13:40 pm"
// 			},
// 			{
// 				postText: "Like and share this video with friends, tag",
// 				span: "@Vkive Tutorials",
// 				text: "facebook page on your post.Ask your dobuts in the comments.",
// 				link1Text: "#VkiveTutorials",
// 				link2Text: "#YoutubeChannel"
// 			},
// 			{ src: "https://i.postimg.cc/tJ7QXz9x/feed-image-3.png" },
// 			[
// 				{ src: "https://i.postimg.cc/pLKNXrMq/like-blue.png", text: "120" },
// 				{ src: "https://i.postimg.cc/rmjMymWv/comments.png", text: "45" },
// 				{ src: "https://i.postimg.cc/T2bBchpG/share.png", text: "20" },
// 				{ src: "https://i.postimg.cc/cHg22LhR/profile-pic.png", text: "" }
// 			]
// 		],

// 		[
// 			{
// 				src: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
// 				p: "John Nicholson",
// 				span: "June 24 2021, 13:40 pm"
// 			},
// 			{
// 				postText: "Like and share this video with friends, tag",
// 				span: "@Vkive Tutorials",
// 				text: "facebook page on your post.Ask your dobuts in the comments.",
// 				link1Text: "#VkiveTutorials",
// 				link2Text: "#YoutubeChannel"
// 			},
// 			{ src: "https://i.postimg.cc/hjDRYBwM/feed-image-4.png" },
// 			[
// 				{ src: "https://i.postimg.cc/pLKNXrMq/like-blue.png", text: "120" },
// 				{ src: "https://i.postimg.cc/rmjMymWv/comments.png", text: "45" },
// 				{ src: "https://i.postimg.cc/T2bBchpG/share.png", text: "20" },
// 				{ src: "https://i.postimg.cc/cHg22LhR/profile-pic.png", text: "" }
// 			]
// 		],

// 		[
// 			{
// 				src: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
// 				p: "John Nicholson",
// 				span: "June 24 2021, 13:40 pm"
// 			},
// 			{
// 				postText: "Like and share this video with friends, tag",
// 				span: "@Vkive Tutorials",
// 				text: "facebook page on your post.Ask your dobuts in the comments.",
// 				link1Text: "#VkiveTutorials",
// 				link2Text: "#YoutubeChannel"
// 			},
// 			{ src: "https://i.postimg.cc/ZRwztQzm/feed-image-5.png" },
// 			[
// 				{ src: "https://i.postimg.cc/pLKNXrMq/like-blue.png", text: "120" },
// 				{ src: "https://i.postimg.cc/rmjMymWv/comments.png", text: "45" },
// 				{ src: "https://i.postimg.cc/T2bBchpG/share.png", text: "20" },
// 				{ src: "https://i.postimg.cc/cHg22LhR/profile-pic.png", text: "" }
// 			]
// 		],


// 	];

// 	return dataPostContainer;
// }