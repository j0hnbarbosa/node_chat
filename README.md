# A simple chat made using NodeJs 

# How to execute
### Run: 
```bash
npm install
``` 

### Open a new terminal and run to Start the API server: 
```bash
npm run api
```

### Open a new terminal and run to Start the WEB server:
```bash
npm run web
```

### To execute the api server and the web server at the same time just run: 
```bash
npm run start 
```

## TO-DO
  ### First steps
  - [ ] Make it works
  - [ ] Refactore the code after it works
  #### User part
  - [x] Create user login screen
  - [x] Save user in the database
  - [x] Validate if a user has a valid token
  - [] Add a button to exit in all pages that the user need a token to access

  #### Chat part
  - [ ] Verify users that are online
  - [ ] Must be able to talk with a specifc user
  - [ ] Must be able to talk with all users online
  
  #### Others fixes
  - [ ] Email should be unique
  - [ ] Stores the JWT in the httpOnly coockie
  - [ ] Every time a user do a request the expire time should be reseted if the user not do a request during the expire time disconect the user.
  
