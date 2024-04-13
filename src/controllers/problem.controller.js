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
     try {
        //nothing implemented
        throw new NotImplementedError('getProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res) {
    try {
        //nothing implemented
        throw new NotImplementedError('getallProblem');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res) {
    try {
        //nothing implemented
        throw new NotImplementedError('deleteProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res) {
    try {
        //nothing implemented
        throw new NotImplementedError('updateProblem');
    } catch (error) {
        next(error);
    }
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