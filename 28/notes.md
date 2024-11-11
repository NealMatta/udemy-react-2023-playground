# 523. Why you would replace Redux

-   Redux is a great tool when you need to manage state globally

# 526. Context API sumamry and why not to use it

-   Performance is not optimized for constant changing
-   Every component that uses useContext is rerendered so it can't be changed everywhere
-   It's really meant for things like authentication or theme

# 527. Getting Started with a Custom Hook as a Store

-   If a component uses a custom hook and that custom hook uses use state then that component that uses the custom hook will rerender when useState is chagned
