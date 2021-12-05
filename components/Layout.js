import NavBar from "./NavBar";
import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    );
};

export default Layout ;