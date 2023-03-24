export default function LeftSidebar({dataLeftSidebar}){

     const newDataLeftSidebar = dataLeftSidebar.map((e)=>{
        return (<a href="#"><img src={e.source}></img>{e.title}</a>);
     });
  
    return(
        <div class='left-sidebar'>
            <div class='imp-links'>
                    <a href="#"><img src="https://i.postimg.cc/RCj4MjnC/news.png"></img>Latest News</a>
                    <a href="#"><img src="https://i.postimg.cc/MpBwMtV0/friends.png"></img>Friendss</a>
                    <a href="#"><img src="https://i.postimg.cc/44FRWj1b/group.png"></img>Group</a>
                    <a href="#"><img src="https://i.postimg.cc/0jh39RtT/marketplace.png"></img>Marketplace</a>
                    <a href="#"><img src="https://i.postimg.cc/VsXHCTVk/watch.png"></img>Watch</a>
                    <a href="#">See More</a>
            </div>
            <div class='shortcut-link'>
                    <p>Your Shortcuts</p>
                     <>
                      {newDataLeftSidebar}
                     </>
                     
                    {/* <a href="#"><img src="https://i.postimg.cc/3JHVf7vG/shortcut-1.png"></img>Web Developers</a>
                    <a href="#"><img src="https://i.postimg.cc/rFCbvb1P/shortcut-2.png"></img>Web Design course</a>
                    <a href="#"><img src="https://i.postimg.cc/0yk3xfZ2/shortcut-3.png"></img>Full Strack Development</a>
                    <a href="#"><img src="https://i.postimg.cc/Z5wQqdDP/shortcut-4.png"></img>Website Experts</a> */}
            </div>
        </div>
    );
}