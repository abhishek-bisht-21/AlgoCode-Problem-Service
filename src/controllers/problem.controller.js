const { StatusCodes } = require('http-status-codes');
const NotImplementedError = require('../errors/notimplemented.error');
const BadRequest = require('../errors/badrequest.error');


function pingProblemController(req, res) {
    return res.json({message: 'Problem controller is up'});
}

function addProblem(req, res, next) {
    try {
        //nothing implemented
        throw new NotImplementedError('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res) {
     return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

function getProblems(req, res) {
     return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

function deleteProblem(req, res) {
     return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

function updateProblem(req, res) {
     return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}


/**
 * 
 * res
 * 
 * res.status -> return the same response object with status property set
 * .json -> return the same response object which has status set but this json to be returned is also set
 */