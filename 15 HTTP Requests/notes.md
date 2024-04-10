# 227. How (Not) To Connect To A Database

-   Writing code that runs in the browser, aka React, the code runs in the browser of the visitor is not where you want to execute database calls
    -   The visitor will be able to access all the credentials to databases
    -   Optimization purposes too
-   Rather, you want to communicate with a backend server

# 232. Using async / await

-   async/await can be used within useEffect but it can't be used **on** used effect

# 233. Handling Loading States

-   Loading is done via states. Kinda an annoying solution as I always want to be checking if data is loading or not
-   There should be a package or something that exists

# 234. Handling HTTP Errors

-   Success responses are 200 or 300 while error response are 400 or 500
-   Wrap code that could throw an error with try/catch
-   **Fetching, Loading, and Error states are common states created in each component**
