import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '.';
import { ReactComponent as WorldMark } from './world_mark.svg';
import { ReactComponent as SeedOfLife } from './seed_of_life.svg';


const LogoPositioning = (props) => {
    return (
        <>
            {
                props.scrollPosition === 0 ? <Logo />
                    : <Link to={process.env.PUBLIC_URL + "/"}>
                        <div className="logo-elements" id='logo-elements-scrolled'>
                            <i className='seed-of-life'>
                                <SeedOfLife />
                            </i>
                            <i className="world-mark">
                                <WorldMark />
                            </i>
                        </div>
                    </Link>
            }
        </>
    )
}

export default LogoPositioning;