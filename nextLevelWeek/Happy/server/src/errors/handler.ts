import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
    [key: string]: string[]
}

const errorhandler: ErrorRequestHandler = (error, request, response, next) => {
    console.log(error);
    
    if (error instanceof ValidationError) {
        let yupErrors: ValidationErrors = {}

        error.inner.forEach(err => {
            yupErrors[err.path] = err.errors
        })

        return response.status(400).json({message: 'validation fails', errors: yupErrors})
    
    }

    return response.status(500).json({message: 'Interval server error'})
}

export default errorhandler