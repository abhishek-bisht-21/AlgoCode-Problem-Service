const NotImplementedError = require('../errors/notimplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({message: 'Problem controller is up'});
}

async function addProblem(req, res, next) {
    try {
        console.log("incoming req body: ", req.body);
       const newproblem = await problemService.createProblem(req.body);
       return res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Successfully created a new problem',
        error: {},
        data: newproblem
       })
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