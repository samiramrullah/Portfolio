import React  from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import ContactsIcon from '@material-ui/icons/Contacts';
import './SocialMedia.css'
const SocialMedia =()=>{
    return (
        <div className='socialmedia_main'> 
        <div sidebar className="sidebar">
        <ul className='unorderlist_main'>
          <li className='list_main'> 
            <a className='link_main' href="https://www.spineor.com/">
              
              <span>
                <MailOutlineIcon />
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.spineor.com/"><span>
                <LinkedInIcon/>
                </span></a>
          </li>
          <li>
            <a href="https://www.spineor.com/"><span>
                <TwitterIcon/>
                </span></a>
          </li>
          <li>
            <a href="https://github.com/samiramrullah" target='_github'><span>
                <GitHubIcon/>
                </span></a>
          </li>
          <li>
            <a href="https://www.spineor.com/"><span>
                <ContactsIcon/>
                </span></a>
          </li>
        </ul>
      </div>
        </div>
    )
}
export default SocialMedia;