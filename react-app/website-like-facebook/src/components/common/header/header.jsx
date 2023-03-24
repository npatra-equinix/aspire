// this is the main header component which is used for navigation
// it is used by App.jsx file and rendered there
export default function HeaderFacebook(){
    return(
        <nav>
            <div class='nav-left'>
              <a href='../../../../public/index.html'>
                <img src='https://i.postimg.cc/Y9nZymQq/logo2.png' class='logo'></img>
              </a>
              <ul>
                 <li> <img src='https://i.postimg.cc/Fs3m1Djy/notification.png'></img> </li>
                 <li> <img src='https://i.postimg.cc/YqGKZ8nc/inbox.png'></img> </li>
                 <li> <img src='https://i.postimg.cc/xCzpgFjg/video.png'></img> </li>
              </ul>
            </div>
            <div class='nav-right'>
                <div class='search-box'>
                    <img src="https://i.postimg.cc/SKtHgM6Q/search.png"></img>
                    <input type="text" placeholder="Search"></input>
                </div>
                <div class= 'nav-user-icon online'> 
                {/* //add onclick action  */}
                    <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
                </div>
            </div>
            <div class='settings-menu'>
                <div id="dark-btn">
                    <span></span>
                </div>
                <div class='settings-menu-inner'>
                    <div class='user-profile'>
                        <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png"></img>
                        <div>
                            <p>N Rabindra Patra</p>
                            <a href="profile.html">See your profile</a>
                        </div>
                    </div>
                    <hr></hr>
                    <div class="user-profile">
                        <img src="https://i.postimg.cc/hv3nx52s/feedback.png"></img>
                        <div>
                            <p>Give Feedback</p>
                            <a href="#">Help us to improve the new design</a>
                        </div>
                    </div>
                    <hr></hr>
                    <div class="settings-links">
                        <img src="https://i.postimg.cc/QCcPNYRV/setting.png" class="settings-icon"></img>
                        <a href="#">Settings & Privacy <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px"></img></a>
                    </div>
                    <div class="settings-links">
                        <img src="https://i.postimg.cc/C5tydfK6/help.png" class="settings-icon"></img>
                        <a href="#">Help & Support<img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px"></img></a>
                    </div>
                    <div class="settings-links">
                        <img src="https://i.postimg.cc/5yt1XVSj/display.png" class="settings-icon"></img>
                        <a href="#">Display & Accessibility <img src="https://i.postimg.cc/RF1dBMWr/arrow.png"width="10px"></img></a>
                    </div>
                    <div class="settings-links">
                        <img src="https://i.postimg.cc/PJC9GrMb/logout.png" class="settings-icon"></img>
                        <a href="#">Logout <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px"></img></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
