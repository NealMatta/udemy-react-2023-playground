# 227. How (Not) To Connect To A Database

-   Writing code that runs in the browser, aka React, the code runs in the browser of the visitor is not where you want to execute database calls
    -   The visitor will be able to access all the credentials to databases
    -   Optimization purposes too
-   Rather, you want to communicate with a backend server
