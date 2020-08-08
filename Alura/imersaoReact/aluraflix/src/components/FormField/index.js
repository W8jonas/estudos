import React from 'react';
import PropTypes from 'prop-types'

import {FormFieldWrapper, Label, Input} from './styles'

const FormField = ({label, name, value, type, onChange}) => {

    const tag = type === 'textarea' ? 'textarea' : 'input';


  return (
       <FormFieldWrapper>
            <Label> 
                <Input 
                    as={tag}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <Label.Text>
                {label}
                :
                </Label.Text>
            </Label>
      </FormFieldWrapper>
  )
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: ()=>{},
}
FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
export default FormField;   