# 328. Navigating between pages with links

-   A big purpose of react router is so that you don't have to request the javascript code again and again
    -   Impact: Bad site performance
    -   Using hrefs makes it so that you would
-   Rather, use Link from react-router-dom
    -   Under the hood, it prevents the browser default from sending an HTTP request and rather looks at the route definitions and goes to the new screen

# 329. Layouts & Nested Routes

-   Using a Root Route makes it much much easier to maintain multiple paths

# 333. Defining & Using Dynamic Routes

-   Typically you encode IDs like database ids so you can later grab it
