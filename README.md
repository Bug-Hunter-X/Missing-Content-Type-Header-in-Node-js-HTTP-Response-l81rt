# Missing Content-Type Header in Node.js HTTP Response

This repository demonstrates a common error in Node.js HTTP servers: omitting the `Content-Type` header in the response.  This can lead to unexpected behavior in the browser, as it might not correctly interpret the response data.

## The Problem

The provided `bug.js` file shows an HTTP server that sends a response without specifying the `Content-Type` header. Browsers rely on this header to understand the type of data they are receiving (e.g., `text/html`, `application/json`). Without it, the browser might not render the content as expected, potentially displaying raw text or throwing errors.

## The Solution

The `bugSolution.js` file provides the corrected code.  The `Content-Type` header is set to `text/plain` to explicitly indicate that the response body contains plain text.  For different content types (like JSON), you would set the appropriate value.

This is a crucial aspect of creating robust and functional HTTP servers in Node.js.