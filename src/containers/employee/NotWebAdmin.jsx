import React from 'react'
import ArrowLink from '../../components/arrowlink'

const NotWebAdmin = ({ backlink }) => {

    return (
        <div className='not-web-admin'>
            <p className="else-statement else-open-statement">
                {"else {"}
            </p>
            <ul className='other-tabs'>
                <li>
                    <ArrowLink
                        withoutComponent={true}
                        link={"https://systems.brahmware.com"}
                        blank_target={true}
                        text={"Go to Systems"}
                    />
                </li>
                <li>
                    <ArrowLink
                        withoutComponent={true}
                        link={"https://mailpoint.brahmware.com"}
                        blank_target={true}
                        text={"Access Mailpoint"}
                    />
                </li>
                <li className='go-back-link'>
                    <ArrowLink
                        link={backlink ? backlink : '/'}
                        back={true}
                        text={"Go Back"}
                    />
                </li>
            </ul>
            <p className="else-statement else-close-statement">
                {"}"}
            </p>
        </div>
    )
}

export default NotWebAdmin