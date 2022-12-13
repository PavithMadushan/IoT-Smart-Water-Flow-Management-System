import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar=()=>{

    return(
        <div className="navbar">
           <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="search..."/>
                <SearchOutlinedIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon/>
                    English
                </div>

                <div className="item">
                    <DarkModeOutlinedIcon/>
                    English
                </div>

                <div className="item">
                    <FullscreenExitOutlinedIcon/>
                    English
                </div>

                <div className="item">
                    <NotificationsNoneOutlinedIcon/>
                    <div className="counter">1</div>
                </div>

                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon/>
                    <div className="counter">2</div>
                    
                </div>

                <div className="item">
                    <ListOutlinedIcon/>
                    English
                </div>

                <div className="item">
                    <img 
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F346777240063328286%2F&psig=AOvVaw3zpJ2zKA8FkAvaVhnpE1Ln&ust=1671044820996000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjBj5ml9_sCFQAAAAAdAAAAABAE"
                    alt=" "
                    className="avatar"
                    />
                    
                    
                </div>


            </div>
           </div>
        </div>
    )
}

export default Navbar;