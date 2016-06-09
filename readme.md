## Synopsis
This is a simple restful api demonstration with CRUD using test data from the postman application.

## Dummy Data apps: App1 - /api/apps
``` javascript
  {
    id: '0032c47b-4a7b-4232-9cc3-6af718244ea8',
    title: "App1",
    description: "Description of app1",
    artAssets:
       [
         {title: 'test', srcLink: 'http://www.google.com'},
         {title: 'test2', srcLink: 'http://www.images.google.com'}
       ],
     releaseDate: "2016-06-15T22:29:20.000Z",
     createdAt: "2016-05-15T22:29:20.000Z",
     updatedAt: "2016-05-15T22:29:20.000Z",
     user: {
        id: "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
         name: 'Karl Rohr'
       }
  }
```

## Dummy Data apps: App2 - /api/apps
``` javascript
    {
    id: '0032c47b-4a7b-4232-9cc3-6af718244ea7',
    title: "App2",
    description: "Description of app2",
    artAssets:
        [
          {title: 'test', srcLink: 'http://www.google.com'},
          {title: 'test2', srcLink: 'http://www.images.google.com'}
        ],
    releaseDate: "2016-06-15T22:29:20.000Z",
    createdAt: "2016-05-15T22:29:20.000Z",
    updatedAt: "2016-05-15T22:29:20.000Z",
    user: {
          id: "ae25e5a4-73db-4969-9f6c-acf8246b7fab",
          name: 'Lindsay Hampton'
        }
     }
```

## Dummy Data apps: App3 - /api/apps

``` javascript
     {
     id: '0032c47b-4a7b-4232-9cc3-6af718244ea6',
     title: "App3",
     description: "Description of app3",
     artAssets:
       [
         {title: 'test', srcLink: 'http://www.google.com'},
         {title: 'test2', srcLink: 'http://www.images.google.com'}
       ],
     releaseDate: "2016-06-15T22:29:20.000Z",
     createdAt: "2016-05-15T22:29:20.000Z",
     updatedAt: "2016-05-15T22:29:20.000Z",
     user: {
         id: "ae25e5a4-73db-4969-9f6c-acf8246b7fac",
         name: 'Patrick Kinney'
       }
     }
```

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


## Dummy Data apps by ID - /api/apps/appIDGoesHeree
# This is an example
``` javascript

{
    id: '0032c47b-4a7b-4232-9cc3-6af718244ea7',
    title: "App2",
    description: "Description of app2",
    artAssets:
        [
          {title: 'test', srcLink: 'http://www.google.com'},
          {title: 'test2', srcLink: 'http://www.images.google.com'}
        ],
    releaseDate: "2016-06-15T22:29:20.000Z",
    createdAt: "2016-05-15T22:29:20.000Z",
    updatedAt: "2016-05-15T22:29:20.000Z",
    user: {
          id: "ae25e5a4-73db-4969-9f6c-acf8246b7fab",
          name: 'Lindsay Hampton'
        }
}


```

## User by id - localhost:3000/api/users/userIDGoesHere
    Karl Rohr
