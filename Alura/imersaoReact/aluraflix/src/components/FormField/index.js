import React from 'react';
import PropTypes from 'prop-types'

import {FormFieldWrapper, Label, Input} from './styles'

const FormField = ({label, name, value, type, onChange, suggestions}) => {

    const tag = type === 'textarea' ? 'textarea' : 'input';
    const fieldId = `id${name}`

    const hasValue = Boolean(value.length);
    const hasSuggestions = Boolean(suggestions.length);

  return (
       <FormFieldWrapper>
            <Label
                htmlFor={fieldId}
            > 
                <Input 
                    as={tag}
                    id={fieldId}
                    type={type}
                    value={value}
                    name={name}
                    hasValue={hasValue}
                    onChange={onChange}
                    autoComplete={hasSuggestions ? 'off' : 'on'}
                    list={`suggestion${fieldId}`}
                />
                <Label.Text>
                {label}
                :
                </Label.Text>

                {hasSuggestions && (
                    <datalist id={`suggestion${fieldId}`}>
                        {suggestions.map((suggestion)=>(
                            <option value={suggestion} key={`suggestion_${fieldId}_${suggestion}`}>
                                {suggestion}
                            </option>
                        ))}
                    </datalist>
                )}
                
            </Label>
      </FormFieldWrapper>
  )
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: ()=>{},
    suggestions: []
    
}
FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    suggestions: PropTypes.arrayOf(PropTypes.string)
}

export default FormField;   