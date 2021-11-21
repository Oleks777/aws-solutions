export function buildResponse(code, text, cors = false) {
    if(cors) {
        return {
            statusCode: code,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
              },
            body: JSON.stringify({
              message: text
            }),
        };
    }
    return {
        statusCode: code,
        body: JSON.stringify({
          message: text
        }),
    };
};