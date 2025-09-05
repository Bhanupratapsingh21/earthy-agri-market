/**
 * Send a standardized success response
 * @param {import("express").Response} res - Express Response object
 * @param {*} data - Payload data
 * @param {string} [message="Success"] - Optional message
 * @param {number} [statusCode=200] - HTTP status code
 */
export function resSuccess(res, data, message = "Success", statusCode = 200) {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
}

/**
 * Send a standardized error response
 * @param {import("express").Response} res - Express Response object
 * @param {*} error - Error object or message
 * @param {string} [message="Internal Server Error"] - Optional fallback message
 * @param {number} [statusCode=500] - HTTP status code
 */
export function resError(
    res,
    error,
    message = "Internal Server Error",
    statusCode = 500
) {
    console.error(error);
    return res.status(statusCode).json({
        success: false,
        message,
        error: error instanceof Error ? error.message : String(error),
    });
}
