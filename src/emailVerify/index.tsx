import { useState } from "react";
import "./index.scss"; // Importing the SCSS file

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChangeEmailModalOpen, setIsChangeEmailModalOpen] = useState(false);
    const [isCodeVerfication, setIsCodeVerfication] = useState(false);
    const [isVerfied, setIsVerified] = useState(false);
    const [code, setCode] = useState('')

    const [oldemail, setOldEmail] = useState("shaun@hotmail.com");
    const [newemail, setNewEmail] = useState("shaun@hotmail.com");
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const openChangeEmailModal = () => {
        setIsChangeEmailModalOpen(true);
        setNewEmail(oldemail)
    };

    const closeChangeEmailModal = () => {
        setIsChangeEmailModalOpen(false);
    };

    const updateOldemail = () => {
        setOldEmail(newemail)
        setIsChangeEmailModalOpen(false);
    }

    const SendVerificationEmail = () => {
        setIsCodeVerfication(true);
    }

    const ContinueHandler = () => {
        setIsVerified(true)
    }

    const StartSaving = () => {
        console.log("Saving")
    }

    const CheckMyInboxHandler = () => {

    }

    const previousHanldler = () => { }

    return (
        <div className="email-verify-container">
            {/* Button to open the main modal */}
            <button className="email-verify-open-button" onClick={openModal}>
                Open Email Verify Modal
            </button>

            {/* Main Email Verification Modal */}
            {isOpen && (
                <div className={"email-verify-modal__overlay " + (isVerfied ? "email-verify-modal__overlay__verified" : "")}>
                    <div className="email-verify-modal__content">
                        {isCodeVerfication && <div className="email-verify-modal__previous-icon" onClick={() => previousHanldler()}><svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        </div>}
                        <div className="db-shopping-logo">
                            {!isVerfied ? <svg width="64" height="64" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="150" height="150" rx="8" fill="#FFF000" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M48.6582 93.9286H43.4713V56.1438H47.1954C57.6541 56.1438 63.6455 59.0851 63.6455 74.4681C63.6455 86.6665 61.5245 93.9286 48.6582 93.9286ZM106.541 74.1777V83.9798H113.13V92.4762C111.301 93.3478 108.369 94.0009 105.81 94.0009C96.3011 94.0009 91.773 87.2477 91.773 74.3229C91.773 62.6433 96.0149 56.0352 102.372 56.0352C107.346 56.0352 109.759 59.1941 111.008 65.1124L128.83 62.1349C126.282 49.6447 117.286 43 103.396 43C91.3089 43 82.4764 47.7849 77.6635 56.5389C72.1194 46.9243 61.0058 44.2105 45.1536 44.2105H20V56.1438H26.2838V105.839H46.9759C60.4895 105.839 71.5652 102.723 77.3494 93.5254C81.5406 101.726 89.3437 107 101.714 107C107.857 107 113.934 105.221 117.871 102.715L119.92 105.839H130V74.1777H106.541Z" fill="#231F20" />
                            </svg> : <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1662 16.4709V45.746C10.1507 55.2451 13.0083 64.5267 18.3636 72.3723C23.7189 80.2178 31.3217 86.2604 40.1735 89.7067L44.2637 91.2937C46.9892 92.3479 50.0099 92.3479 52.7354 91.2937L56.8255 89.7067C65.6774 86.2604 73.2802 80.2178 78.6355 72.3723C83.9908 64.5267 86.8484 55.2451 86.8329 45.746V16.4709C86.842 15.3397 86.5251 14.2298 85.9201 13.274C85.3151 12.3182 84.4475 11.5569 83.4212 11.0812C72.419 6.24796 60.516 3.80594 48.4995 3.91669C36.4831 3.80594 24.58 6.24796 13.5779 11.0812C12.5516 11.5569 11.684 12.3182 11.079 13.274C10.4739 14.2298 10.1571 15.3397 10.1662 16.4709Z" fill="#FFF200" />
                                <path d="M48.4995 3.91669C36.4831 3.80594 24.58 6.24796 13.5779 11.0812C12.5516 11.5569 11.684 12.3182 11.079 13.274C10.4739 14.2298 10.1571 15.3397 10.1662 16.4709V45.746C10.1507 55.2451 13.0083 64.5267 18.3636 72.3723C23.7189 80.2178 31.3217 86.2604 40.1735 89.7067L44.2637 91.2937C45.6151 91.815 47.0511 92.0827 48.4995 92.0834V3.91669Z" fill="#FFFACC" />
                                <path d="M10.1662 16.4709V45.746C10.1507 55.2451 13.0083 64.5267 18.3636 72.3723C23.7189 80.2178 31.3217 86.2604 40.1735 89.7067L44.2637 91.2937C46.9892 92.3479 50.0099 92.3479 52.7354 91.2937L56.8255 89.7067C65.6774 86.2604 73.2802 80.2178 78.6355 72.3723C83.9908 64.5267 86.8483 55.2451 86.8329 45.746V16.4709C86.842 15.3397 86.5251 14.2298 85.9201 13.274C85.3151 12.3182 84.4475 11.5569 83.4212 11.0812C72.419 6.24796 60.516 3.80594 48.4995 3.91669C36.4831 3.80594 24.58 6.24796 13.5779 11.0812C12.5516 11.5569 11.684 12.3182 11.079 13.274C10.4739 14.2298 10.1571 15.3397 10.1662 16.4709Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M69.5836 28.833L46.4494 62.3057L28.9004 44.749" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}

                        </div>
                        <h2 className="email-verify-modal__title">{isVerfied ? "You're verified" : (isCodeVerfication ? "Enter the 6-digit code" : "Let's confirm your email.")}</h2>
                        <div className="email-verify-modal__body">
                            {!isCodeVerfication && <div className="email-input">
                                <div className="email-placefolder">{oldemail}</div>
                                <span
                                    className="email-input__icon"
                                    onClick={openChangeEmailModal}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        fill="lightblue"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M3 17.25V21h3.75l11-11.03-3.75-3.75L3 17.25zm3.04-.02L15.06 8.2l.79.79L6.82 18H6v-.77zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                    </svg>
                                </span>
                            </div>
                            }
                            <div className="email-input__description">
                                {isVerfied ? oldemail : (isCodeVerfication ? <div>A verification code has been sent to <br /> {newemail}. Your code will<br />  expire in 10 minutes. </div> : <div>Please take a minute to verify the email <br />
                                    that we have on file so we can<br /> keep your account secure.</div>)}

                            </div>

                            {!isVerfied && <div className="code-input">
                                {isCodeVerfication && <span
                                    className="code-input__icon"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                                        <path d="M3 7l9 6 9-6" />
                                    </svg>
                                </span>}
                                {isCodeVerfication && <input type="text" placeholder="6-digit code from email" value={code} onChange={(e) => setCode(e.target.value)} />}
                            </div>}
                        </div>
                        {!isCodeVerfication && !isVerfied && <button
                            className="email-verify-modal__send_verification-button"
                            onClick={() => SendVerificationEmail()}
                        >
                            Send verification email
                        </button>}
                        {isCodeVerfication && !isVerfied && <button
                            className={"email-verify-modal__send_verification-button " + (code.length < 6 ? "btn_disabled" : "")}
                            onClick={() => ContinueHandler()}
                        >
                            Continue
                        </button>}
                        {isCodeVerfication && !isVerfied && <button
                            className="email-verify-modal__check_inbox-button "
                            onClick={() => CheckMyInboxHandler()}
                        >
                            Check my inbox
                        </button>}
                        {isVerfied && <button
                            className="email-verify-modal__send_verification-button"
                            onClick={() => StartSaving()} style={{ marginTop: "20%" }}
                        >
                            Let's start saving
                        </button>}
                        <br />
                        {isCodeVerfication && !isVerfied &&
                            <div className="email-verify-modal__resend-code">
                                <p>Didn't get the code? Check your spamjunk or resend it</p>
                                <button>Resend code</button>
                            </div>}
                        {!isCodeVerfication && !isVerfied && <div className="remind-me">Remind me next time</div>}
                    </div>
                </div>
            )}

            {/* Change Email Modal */}
            {isChangeEmailModalOpen && (
                <div className="email-change-modal__overlay">

                    <div className="email-change-modal__content">
                        <div className="email-change-modal__close-icon" onClick={closeChangeEmailModal}>
                            &times;
                        </div>
                        <h2 className="email-change-modal__title">Change your email address</h2>
                        <input
                            type="email"
                            className="email-change-input"
                            placeholder="Enter new email"
                            onChange={(e) => setNewEmail(e.target.value)}
                            value={newemail}
                        />
                        <br />
                        <button
                            className={"email-change-modal__save-button " + ((newemail === "" || newemail == oldemail) ? "btn_disabled" : "")}
                            onClick={() => updateOldemail()}
                        >
                            Update email address
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Index;
