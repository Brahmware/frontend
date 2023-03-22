import React, { useCallback, useEffect, useState } from 'react'
import { CloseIcon, TickIcon } from '../../assets/icons';

const Modal = ({ isError, data, onCloseModal }) => {

    const [modalTop0Style, setModalTop0Style] = useState({});

    let modalPositioning = () => {
        let contactFormEl = document.getElementsByClassName('contact-form')[0];
        let elTop = contactFormEl && contactFormEl.getBoundingClientRect().top;
        let elLeft = contactFormEl && contactFormEl.getBoundingClientRect().left;

        setModalTop0Style({
            transform: `translateY(${-elTop}px) translateX(${-elLeft}px)`
        });
    }

    let modalComponent = useCallback((node) => {
        if (node) {
            let t1 = setTimeout(() => {
                node.classList.remove('animate-modal-zoom');
            }, 600);
            return () => clearTimeout(t1);
        }
    }, [])

    useEffect(() => {
        modalPositioning();

        let handleWindowResize = () => {
            modalPositioning();
        }
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener(handleWindowResize, null);
    }, [])

    return (
        <div
            className='modal-component animate-modal-zoom'
            ref={modalComponent}
            style={modalTop0Style}
        >
            <div className="modal-wrapper">
                <div className="modal-background" onClick={onCloseModal} />
                <div className="modal-content-wrapper">
                    <div
                        className="close-button"
                        onClick={onCloseModal}
                    >
                        <CloseIcon />
                    </div>
                    <div className="content">
                        <div className="icon-part">
                            {
                                !isError ?
                                    <div className="tick"><TickIcon /></div> :
                                    <div className="cross"><CloseIcon /></div>
                            }
                        </div>
                        <div className="message">
                            {data}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal