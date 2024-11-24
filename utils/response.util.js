const sendSuccessResponse = async (res, result) => {
    const { code = 200, status = 0, message, data = null } = await result;
    res.status(code).json({ status, message, data });
};
  
const sendErrorResponse = (res, err, code, status = 0, data = null) => {
    const message = err.message || 'Internal server error';
    res.status(code).json({ status: status, message, data });
};
  
module.exports = { 
    sendSuccessResponse, 
    sendErrorResponse 
};