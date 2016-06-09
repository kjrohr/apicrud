## Synopsis
This is a simple restful api demonstration with CRUD using test data from the postman application.

## Users /api/users
``` javascript
[
{
id: 3,
name: "Lindsay Hampton",
age: 22,
hobby: "Gaming",
createdAt: "2016-06-09T01:36:20.000Z",
updatedAt: "2016-06-09T02:26:14.000Z"
},
{
id: 5,
name: "Karl Rohr",
age: 25,
hobby: "Gaming",
createdAt: "2016-06-09T02:42:10.000Z",
updatedAt: "2016-06-09T02:42:10.000Z"
},
{
id: 6,
name: "Patrick Kinney",
age: 25,
hobby: "Gaming",
createdAt: "2016-06-09T02:42:28.000Z",
updatedAt: "2016-06-09T02:42:28.000Z"
}
]
```


## Dummy Data apps by ID - /api/users/users id goes here
### /api/users/3 would return Lindsay Hamptons information
``` javascript

{
id: 3,
name: "Lindsay Hampton",
age: 22,
hobby: "Gaming",
createdAt: "2016-06-09T01:36:20.000Z",
updatedAt: "2016-06-09T02:26:14.000Z"
}


```

## User by id - localhost:3000/api/users/userIDGoesHere
    Karl Rohr
