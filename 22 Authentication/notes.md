# 367. How Authentication Works

-   Authentication is needed if certain backend routes needs to be protected
-   So the frontend application needs to authenticate before data is given
-   Two ways for client side to get permission:
    -   Server Side Sessions
        -   On the server, after a user was logged in, you store a unique identifier and then map that to the client using an ID and then the ID is sent back to the client and used every time you need data
        -   Requires a tight coupling between backend and frontend
    -   Authentication Tokens
        -   On the server, after a user is authenticated, we create but don't store a permission token and send it to the client
        -   its validty can only be done by the backend
        -   So for future requests, the backend looks at the token, checks if its valid, and then sends the data if so
