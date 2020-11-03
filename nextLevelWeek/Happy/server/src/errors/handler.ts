import { ErrorRequestHandler } from 'express'


const errorhandler: ErrorRequestHandler = (error, request, response, next) => {
    console.log(error);
    
    return response.status(500).json({message: 'Interval server error'})
}

export default errorhandler