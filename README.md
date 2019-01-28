# Setup Development Environment

1. Install server/API dependencies `npm install`
2. Install client dependencies `cd client && npm install`
3. Run dev server `npm run dev` (from the project root)

# Setup Production Environment

1. Build client dependencies `cd client && npm run build`
2. Run `npm start` from project root

# Testing Strategy

-   Make sure functions have single responsibility and can be isolated for testing
-   Implement React unit testing with Jest
    -   Make sure components are correctly rendered on the page
-   Implement Mocha unit tests for helper functions and models
-   Use Integration testing to ensure compatibility between API and models

# Architecture Considerations in Scaling

-   Data should be stored in a DB table, like Mongo or SQL, and accessed using unique keys
-   Separate API and client into two distinct repos
-   Better to organize client by feature instead of overarching "components" folder
-   Determine better CSS/styling strategy; move styles outside of component file
