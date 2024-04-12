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

# 238. Using Optimistic Updating

-   It's essentially updating your local state before the data is pushed to your database
-   In this case, you want to set the state back to the original. Essentially rolling back that change
-   This is better visually for the customer so that they can see the changes that they're making
-   You will need to add an error modal to let the customer know if their data isn't being stored
