import React, { useEffect } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { registerContact } from "../../api";
import disableScroll from 'disable-scroll';
import Modal from "../modal";


const ContactForm = () => {

    let [disableButton, setDisableButton] = useState(true);
    let [showModal, setShowModal] = useState(false);
    let [modalContent, setModalContent] = useState(null);
    let [isError, setIsError] = useState(false);

    const { reset, register, handleSubmit, errors } = useForm({
        mode: "onBlur",
    });

    const onSubmitHandler = async (data) => {
        setDisableButton(true);
        await registerContact(data)
            .then((res) => {

                if (res.data && res.data.success) {

                    setIsError(false);
                    setModalContent(res.data.message);
                    setShowModal(true);
                    setDisableButton(false);
                    reset({ data });

                } else if (!res.data.success) {

                    setIsError(true);
                    setModalContent(res.data.error);
                    setShowModal(true);

                }
            })
            .catch((err) => {

                setIsError(true);
                setShowModal(true);
                setModalContent(err.message);

            })

    }

    useEffect(() => {
        showModal ? disableScroll.on() : disableScroll.off();
    }, [showModal])

    const onChange = (value) => {
        setDisableButton(false);
    }

    const onCloseModal = () => {
        setShowModal(false);
    }

    return (
        <React.Fragment>
            {
                showModal && <Modal isError={isError} data={modalContent} onCloseModal={onCloseModal} />
            }
            <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name *"
                                ref={register({ required: "Name is required" })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email *"
                                ref={register({
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address",
                                    },
                                })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-form">
                            <input
                                type="phone"
                                name="phone"
                                placeholder="Enter your phone"
                                ref={register({
                                    pattern: {
                                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i,
                                        message: "invalid number",
                                    },
                                })}
                            />
                            {errors.phone && <p>{errors.phone.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-form">
                            <input
                                type="text"
                                name="organization"
                                placeholder="Organization"
                                ref={register({})}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-form">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject *"
                                ref={register({
                                    required: "Subject is required",
                                })}
                            />
                            {errors.subject && <p>{errors.subject.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="single-form">
                            <textarea
                                name="message"
                                placeholder="Message *"
                                ref={register({
                                    required: "Message is required",
                                })}
                            ></textarea>
                            {errors.message && <p>{errors.message.message}</p>}
                        </div>
                    </div>
                    <div className="action-part">
                        <p className="form-message noselect">
                            Brahmware is committed to protecting your information.
                            Your information will be used in accordance with the GDRP.
                            As Brahmware is a global organisation, your information may be
                            stored and processed by Brahmware and its affiliates in countries
                            outside your country of residence, but wherever your information
                            is processed, we will handle it with the same care and respect
                            for your privacy.
                        </p>
                        <div className="col-md-12 mt-2 captcha-submit-wrapper">
                            <div className="row p-0 captcha-submit">
                                <div className="col-md-8">
                                    <ReCAPTCHA
                                        theme="dark"
                                        sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="col-md-4 d-flex justify-content-end align-items-center">
                                    <div className="form-btn p-0">
                                        <button type="submit" disabled={disableButton}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};

export default ContactForm;
