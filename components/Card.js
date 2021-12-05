import classes from '../styles/Crad.module.css'
import Image from 'next/image'
import profil_pic from '../assets/profil_pic.png'


const Card = (props) => {
    return (
        <div className = {classes.card_structure}>
            <div className='container row'>
                <div className='col'>
                    <Image src={profil_pic} className='img-fluid' alt="the profil image" />
                </div>
                <div className='col text-center'>
                    <div className = {classes.card_title}>
                        <h1> {props.title} </h1>
                    </div>
                    <div className = {classes.card_body}>
                        <h2> {props.body} </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card ;
