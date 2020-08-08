import React from 'react';
import PropTypes from 'prop-types'


const FormField = ({label, name, value, type, onChange}) => {
  return (
      <div>
            <label> 
               {label}: 
                {
                    type == "textarea" 
                    ?<textarea 
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                    :<input 
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                }
            </label>
      </div>
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
    onChange: PropTypes.func,
}
export default FormField;   