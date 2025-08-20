

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

import { SectionNormal } from "components/Section"
import { 
    ButtonNormal,
    ButtonMessenger
} from "components/Button"
import {
    FormWrap,
    FormRow,
    FormError,
    FormInputField as Input,
    FormSelectField as Select,
    FormTextAreaField as TextArea,
} from "components/Form"

import SupportContentsBox from "./SupportContentsBox"

import bgLightning from "assets/lightning.png"

import {
    SELECTION_TYPE,
    SELECTION_REASON,
} from "../_const"

const SupportContents = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('This field is required'),
        username: Yup.string().required('This field is required'),
        subject: Yup.string().required('This field is required'),
        message: Yup.string().required('This field is required'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        reset();
    }, []);

    /**
     * @func: (react-hook-form) submit
     */
    const onSubmit = (fields) => {
        console.log(...fields);
    }


    return(
        <SectionNormal 
            extraClass="ran-support__contents"
            bg={bgLightning}
        >

            <SupportContentsBox />

            
            <div className="ran-support__formholder">
                <h2 className="frame__header">Submit a Ticket</h2>

                <FormWrap
                    extraClass="ran-support__form"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <FormRow label="Request Type" extraClass="request">
                        <Select
                            {...register('reqType')}
                            options={SELECTION_TYPE}
                            extraClass={errors.reqType ? 'is--invalid' : ''}
                        />
                        {errors.reqType?.message && <FormError errorMessage={errors.reqType?.message} />}
                    </FormRow>

                    <FormRow label="E-mail" extraClass="email">
                        <Input
                            {...register('email')}
                            type="email"
                            extraClass={errors.email ? 'is--invalid' : ''}
                        />
                        {errors.email?.message && <FormError errorMessage={errors.email?.message} />}
                    </FormRow>
                    
                    <FormRow label="Username">
                        <Input
                            {...register('username')}
                            extraClass={errors.username ? 'is--invalid' : ''}
                        />
                        {errors.username?.message && <FormError errorMessage={errors.username?.message} />}
                    </FormRow>

                    <FormRow label="What Happened" extraClass="reason">
                        <Select
                            {...register('reason')}
                            options={SELECTION_REASON}
                            extraClass={errors.reason ? 'is--invalid' : ''}
                        />
                        {errors.reason?.message && <FormError errorMessage={errors.reason?.message} />}
                    </FormRow>

                    <FormRow label="Subject">
                        <Input
                            {...register('subject')}
                            extraClass={errors.subject ? 'is--invalid' : ''}
                        />
                        {errors.subject?.message && <FormError errorMessage={errors.subject?.message} />}
                    </FormRow>

                    <FormRow label="Message">
                        <TextArea
                            {...register('message')}
                            extraClass={errors.message ? 'is--invalid' : ''}
                        />
                        {errors.message?.message && <FormError errorMessage={errors.message?.message} />}
                    </FormRow>

                    <ButtonNormal
                        btnLbl="Submit"
                    />

                </FormWrap>
            </div>


            <div className="ran-support__extras">
                <div className="frame__desc">
                    <p>
                        After filing a ticket, our team will review your request. Rest assured that we will get back to you as soon as possible. We appreciate your patience and are committed to resolving your issue quickly. If you have any additional information to share, feel free to reply to your filed ticket.
                        <br/><br/>
                        If you’re having an issue with your top-up or in-game purchase, you can message us directly in our messenger.
                    </p>
                </div>

                <ButtonMessenger />
            </div>
            
        </SectionNormal>
    )
}

export default SupportContents;