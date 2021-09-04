import './Navbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="navbarRight">
          <div className="navbarIconContainer">
            <NotificationsNone />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Language />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Settings />
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTs3G0upBbTGLFnEsveMIyIe-VZCTD5MpvQ&usqp=CAU" alt="avatar" className="navbarAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
