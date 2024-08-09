# 390. React Query: What & Why?

-   Library that helps with sending HTTP requests & keeping your frontend UI in sync with your backend data
-   useEffect and the fetch function could work but TanStack Query can simplify the code

# 291. Using TanStack Query

-   It does NOT send HTTP Requests
-   It comes with managing the requests, keeping track of the data, errors, etc. and so on
-   Every Query needs a key that can be used to cache the data that is yielded by the request
    -   You can configure how long data is cached
-   The key is an array of values that are internally stored so when you're using a similar array of similar values, React Query will use similar data
-   To use the isError value, you need to make sure that your queryFn throws an error

# Questions

1. Why does QueryKey need an array and not just a string
