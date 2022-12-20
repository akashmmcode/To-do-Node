# To-do-App with NodeJS

## How to use
1 - Clone the repo <br>
2 - cd into the repo To-do-Node <br>
3 - Run `npm install` <br>
4 - Run `npm run dev` <br>
5 - Install Mysql on your machine <br>
6 - Go to database folder and edit `DATABASENAME,USERNAME,PASSWORD` of your DB's <br>
7 - Open http://localhost:5000/ in your browser <br>
8 - Access the above url on your browser or on postman <br>

## Features
### 1 - To Fetch all To-do's from the DB (GET request in postman)

```
http://localhost:5000/todos
```

### Response
```json
{
    "todos": [
        {
            "id": "45f7aaa7-0616-407e-a32b-ed77437d6a62",
            "title": "walking",
            "description": "55km",
            "completed": false,
            "createdAt": "2022-12-19T11:55:09.000Z",
            "updatedAt": "2022-12-19T11:55:09.000Z"
        },
        {
            "id": "e414f95e-4ff2-4908-990b-44387707d983",
            "title": "running",
            "description": "500km",
            "completed": false,
            "createdAt": "2022-12-19T11:51:50.000Z",
            "updatedAt": "2022-12-19T12:17:28.000Z"
        },
        {
            "id": "ff2267f0-31c7-4b40-98c3-966f89fd0073",
            "title": "swiming",
            "description": "vadancherry beach",
            "completed": false,
            "createdAt": "2022-12-19T12:20:49.000Z",
            "updatedAt": "2022-12-19T12:21:46.000Z"
        }
    ],
    "count": 3
}
```

### 2 - To Create a To-do (POST request in postman)
```
http://localhost:5000/todos
```

### Pass data as json with the below format to create a to-do
```json
{
    "title":"swiming",
    "description":"maplebeach"
}
```

### Response on success

```json
{
    "id": "ea483817-ed5d-4106-86b5-bb4f34643189",
    "title": "coding",
    "description": "javascript",
    "completed": false,
    "updatedAt": "2022-12-20T09:19:40.148Z",
    "createdAt": "2022-12-20T09:19:40.148Z"
}
```

### 3 - To Update a To-do (PUT request in postman)
```
http://localhost:5000/todos
```

## Pass data as json with the below format to update a to-do using ID
```json

{
            "id": "ff2267f0-31c7-4b40-98c3-966f89fd0073",
            "title": "",  //do the changes here
            "description": "", //do the changes here
            "completed": , //do the changes here
            "createdAt": "2022-12-19T12:20:49.000Z",
            "updatedAt": "2022-12-19T12:20:49.000Z"
        }
```

### Responce on Success
```json

{
    "id": "ff2267f0-31c7-4b40-98c3-966f89fd0073",
    "title": "swiming", //changed value
    "description": "miami beach", //chnaged value
    "completed": false,
    "createdAt": "2022-12-19T12:20:49.000Z",
    "updatedAt": "2022-12-20T09:26:40.000Z"
}
```
### 4 - To FETCH a To-do by ID (POST request in postman)
```
http://localhost:5000/todos/getTodoByID
```

## Pass data as json with the below format to fetch a to-do using ID

```json
{
    "id": "ff2267f0-31c7-4b40-98c3-966f89fd0073"
}
```

### Responce on Success
```json

{
    "id": "ff2267f0-31c7-4b40-98c3-966f89fd0073",
    "title": "swiming",
    "description": "miami beach",
    "completed": false,
    "createdAt": "2022-12-19T12:20:49.000Z",
    "updatedAt": "2022-12-20T09:26:40.000Z"
}
```

### 5 - To DELETE a To-do by ID (POST request in postman)
```
http://localhost:5000/todos/deleteTodoByID
```

## Pass data as json with the below format to delete a to-do using ID

```json
{
    "id": "ff2267f0-31c7-4b40-98c3-966f89fd0073"
}
```

### Responce on Success the remaining to-dos from the DB
```json

{
    "id": "ff2267f0-31c7-4b40-98c3-966f89fd0073",
    "title": "swiming",
    "description": "miami beach",
    "completed": false,
    "createdAt": "2022-12-19T12:20:49.000Z",
    "updatedAt": "2022-12-20T09:26:40.000Z"
}
```
