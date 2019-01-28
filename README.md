# Setup

Install server/API dependencies

```
npm install
```

Install client dependencies

```
cd client && npm install
```

**or**

```
npm run setup
```

# Testing Strategy

# Architecture Considerations in Scaling

-   Data should be stored in a DB table, like Mongo or SQL, and accessed using unique keys
-   Better to organize client by feature instead of overarching "components" folder
-   Determine better CSS/styling strategy; move styles outside of component file
-   Create a "routes" or "controllers" folder to better organize API endpoints
