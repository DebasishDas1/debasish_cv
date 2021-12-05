import Link from 'next/link'
import classes from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <div className={classes.nav_bar}>
            <div className='container row justify-content-end'>
                <div className='col-2'>
                    <div className = {classes.nav_bar_button}>
                    <Link href='/'>Home</Link>
                    </div>
                </div>
                <div className='col-2'>
                    <div className = {classes.nav_bar_button}>
                    <Link href='/About'>About</Link>
                    </div>
                </div>
                <div className='col-2'>
                    <div className = {classes.nav_bar_button}>
                    <Link href='/Projects'>Projects</Link>
                    </div>
                </div>
                <div className='col-2'>
                    <div className = {classes.nav_bar_button}>
                    <Link href='/Skills'>Skills</Link>
                    </div>
                </div>
                <div className='col-2'>
                    <div className = {classes.nav_bar_button}>
                    <Link href='/Contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar ;