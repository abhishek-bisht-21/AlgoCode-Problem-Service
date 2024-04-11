const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotImplementedError extends BaseError {
	constructor(methodName) {
		super("NotimplementedError", StatusCodes.NOT_IMPLEMENTED, `${methodName} Not Implemented !!`, {});
	}
}

module.exports = NotImplementedError;