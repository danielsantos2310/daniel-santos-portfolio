import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faHome, faMoneyBill, faFile, faListCheck, faServer } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './index.scss';



const Sidebar =()=>(
<div className='nav-bar'>   
    <Link className='logo' to='/'>
    </Link>
    <nav>
        <NavLink exact='true' activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4d"/>
        </NavLink>
        <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4d"/>
        </NavLink>
        <NavLink exact='true' activeclassname="active" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} className="contact-link" color="#4d4d4d"/>
        </NavLink>
        <NavLink exact='true' activeclassname="active" to="/cv">
            <FontAwesomeIcon icon={faFile} className="cv-link" color="#4d4d4d"/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank"
             rel='noreferrer'
              href='https://github.com/danielsantos2310'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
              href='https://danielsantos2310.github.io/Ireland-Data-Center-Energy-research/'
              title='Ireland Data Centre Energy Analytics'
              aria-label='Open Project 01: Ireland Data Centre Energy Analytics'>
                <FontAwesomeIcon icon={faServer} color="#4d4d4e"/>
                </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
              href='https://daniel-expense-tracker.herokuapp.com/'>
                <FontAwesomeIcon icon={faMoneyBill} color="#4d4d4e"/>
                </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
              href='https://www.linkedin.com/company/kpmg-ireland/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
        </li>
        <li>
            <a target="_blank"
             rel='noreferrer'
              href='https://simplest-react-todo-app.herokuapp.com//'>
                <FontAwesomeIcon icon={faListCheck} color="#4d4d4e"/>
                </a>
        </li>
    </ul>
</div>
)
export default Sidebar;
