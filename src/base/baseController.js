export const getResult = (res, code, data, message) => {
    return res.status(code).json({status: code,message,data: data});
};

export const getErrorResult = (res, code, message) => {
    return res.status(code).json({status: code,message: message});
};
