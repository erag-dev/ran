
import AppImg from "components/AppImg"
import { AppModalDefault } from "components/AppModal"
import Button from "components/Button"

import footPrints from "assets/sign.svg"

import "./_styles.sass"

const AppModalLetter = ({
    modalState,
    callbackIsOpen,
}) => {

    const handleRedirect = () => console.log('test');

    return (
        <AppModalDefault
            extraClass="modal--letter"
            modalSize="size--l"
            modalState={modalState}
            callbackIsOpen={callbackIsOpen}
        >

            <h2 className="frame__header"><span>Adopt-a-Pet</span> Form</h2>

            <div className="frame__desc desc--1">
                <p>Thank you for your interest in adopting a furry friend from Snuggle Seeker! We’re thrilled that you’re considering opening your heart and home to a pet in need. Please fill out the form from the link below to help us understand your preferences and lifestyle. This information will assist us in matching you with the perfect companion.</p>
            </div>

            <Button 
                isDiv={true}
                onClick={() => handleRedirect()}
                btnLbl="Go to Adoption Form"
                extraClass="align--c"
            />

            <div className="frame__desc desc--2">
                <p>Rest assured that any information you provide in this adoption application is kept confidential and used solely for the purpose of matching you with the perfect pet. We are committed to protecting your data and ensuring a secure adoption process.</p>
            </div>

            <div className="modal--letter__remarks">
                <p>Lots of love,</p>
                <AppImg src={footPrints} />
                <p>Snuggle Seeker</p>
            </div>

        </AppModalDefault>
    )
}

export default AppModalLetter;