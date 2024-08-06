# 382. Deployment Steps

1. Test Code: Manually & with automated tests
2. Optimize Code: Optimize user experience & performance
3. Build App: Run build process to parse, transform, & optimize code
    - Execute a script that will output a production ready bundle for your code
    - The server will get highly optimzed code
4. Upload App: Upload production code to hosting server
5. Configure Server: Ensure app is served securely & as intended

# 383. Understanding Lazy Loading

-   Load certain pieces of code only when needed
-   The initial load would take quite long because when the app is built, step 3, all the imports need to rectify before the app begins

# 384. Adding Lazy Loading

-   import yields a promise
