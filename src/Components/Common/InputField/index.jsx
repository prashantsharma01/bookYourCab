import React from 'react'
import { InputTextContainer, Label, TextFieldWrapper } from './styles'

function InputField(props) {
    const renderLabel = () => {
        if (props.label) {
            return <Label>{props.label}</Label>
        } else {
            return null
        }
    }

    return (
        <TextFieldWrapper>
            <InputTextContainer>
                {renderLabel()}
                <input
                    type={props.type}
                    width={props.width}
                    value={(props.inputValue && props.inputValue.toString()) || ''}
                    onChange={e => props.onChange(e.target.value)}
                    placeholder={props.placeholder}
                />
            </InputTextContainer>
        </TextFieldWrapper>
    )
}

export default InputField