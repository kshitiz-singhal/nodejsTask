# **API Document**

## User registration

* **URL**
  
  /registration

* **Method:**
  
  `POST`

* **BODY**
  
  type: application/json
  
  {
  
   "empid":"E1",
  
   "firstname":"<firstname>",
  
   "lastname":"<lastname>",
  
   "orgname":"<organame>",
  
   "email":"<EmailId>",
  
   "password":"<password>"
  
  }

* **Success Response:**
  
  * **Code:** 200 
    
    {
    **message:** `"User registered succesfully" `
    
    }

* **Error Response:**
  
  * **Code:** 400  
    
    {
    
     "**message**": `"Failed! EmployeeID is already in use!"`
    
    }

## User Login

- **URL**
  
  /signin

- **Method:**
  
  `POST`

- **BODY**
  
  type: application/json
  
  {
  
  "email":"<email>",
  
  "password":"<password>"
  
  }

- **Success Response:**
  
  - **Code:** 200
    
    { **Access token:** `"<token>"`
    
    }

- **Error Response:**
  
  - **Code:** 401
    
    {
    
    "**message**": `"Invalid Password"`
    
    }
  
  - **Code:** 404
    
    {
    
    "**message**": `"User not found"`
    
    }
    
    

## Get all user details

- **URL**
  
  /alluser

- **Method:**
  
  `GET`

- **BODY**
  
  null

- **Success Response:**
  
  - **Code:** 200
    
    [
    
    {
    
    },
    
    {
    
    }
    
    ]
    
    

- **Error Response:**
  
  - **Code:** 401
    
    {
    
    "**message**": `"Invalid Password"`
    
    }
  
  - **Code:** 404
    
    {
    
    "**message**": `"No records found"`
    
    }

## Get single user detail

- **URL**
  
  /getuser

- **Method:**
  
  `POST`

- **BODY**
  
  type: application/json
  
  {
  
  "<searchparameter>":"<value>"
  
  }

- **Success Response:**
  
  - **Code:** 200
    
    { 
    
    "empid":"<string>",
    
    "firstname":"<string>",
    
    "lastname":"<string>",
    
    "orgname":"<string>",
    
    "email":"",
    
    }

- **Error Response:**
  
  - **Code:** 404
    
    {
    
    "**message**": `"<search parameter> doesnot exist"`
    
    }
    
    | Search Parameter | value    |
    | ---------------- | -------- |
    | empid            | <string> |
    | firstname        | <string> |
    | lastname         | <string> |