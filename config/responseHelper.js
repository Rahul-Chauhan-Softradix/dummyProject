/** function for return Success Response */
 export const successResponse = (msg, data, code) => ({
    status: 1,
    message: msg,
    code,
    data: data || null,
  });
  /** function for return Error Response */
   export const errorResponse = (msg, data, code) => ({
    status: 0,
    message: msg,
    code,
    data: data || null,
  });