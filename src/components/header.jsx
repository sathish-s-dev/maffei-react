/* eslint-disable react/prop-types */
import logo from '../assets/header/logo.svg';
import menuburgar from '../assets/header/menu-burgar.svg';
import cancel from '../assets/header/cancel.svg';
import { NavItems } from '.';

import './common.css';

import { useState } from 'react';
// import './header.css';

const Header = ({ children, className }) => {
	const [showNav, setShowNav] = useState(false);
	return (
		<div className={`${className}`}>
			<div className='hero_section'>
				<header className='nav_section'>
					<img
						src={logo}
						className='logo'
						alt='maffei_logo'
					/>

					{showNav ? (
						<div
							id='popup_nav'
							className='popup_nav'>
							<nav className={`big popup_navbar ${showNav ? 'show' : 'hide'}`}>
								<NavItems />
							</nav>
						</div>
					) : (
						<div className='nav_items'>
							<nav className='big navbar'>
								<NavItems />
							</nav>
						</div>
					)}
					{showNav ? (
						<img
							src={cancel}
							className='cancel'
							id='cancel'
							onClick={() => setShowNav(false)}
						/>
					) : (
						<img
							src={menuburgar}
							className='menu_burgar'
							onClick={() => setShowNav(true)}
						/>
					)}
				</header>
				{children}
			</div>
		</div>
	);
};

export default Header;
