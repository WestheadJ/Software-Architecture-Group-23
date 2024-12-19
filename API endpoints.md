
# API Endpoints Documentation

## Overview
This document provides details about the API endpoints exposed by the server for the media API.

### Base URL
```
http://localhost:3000
```

---

## Endpoints

## **Root Endpoint**
**URL**: `/`

**Method** : `GET`

**Description** : Returns a "Hello World!" response to see if the server is reachable.

**Responses**:
  - `200 OK`: `hello world!`

---

### **Authentication**

#### Get Token
**URL**: `/auth/token/get-token`

**Method**: `POST`

**Description**: Generates an authentication token for a user.

**Request Body**:
  ```json
  {
    "email": "<user's email>"
  }
  ```

**Responses**:
  - `200 OK`:
    ```json
    {
      "token": "generated-token"
    }
    ```
  - `400 Bad Request`: 
  
    - No email given:
      ```json
      {
        "error":true, "message":"no email given"
      }
      ```

- `500 Internal Server Error`:
    ```json
    {
      "error":true, 
      "message":"<server error message>"
    }
    ```
  
#### Verify Token
**URL**: `/auth/token/verify`

**Method**: `POST`

**Description**: Verifies the provided token for a user.

**Request Body**:
  ```json
  {
    "email": "<user's email>",
    "token": "<user's token>"
  }
  ```

**Response**:
- `200 OK`: Token is valid.
    ```json
    {
      "auth": true
    }
    ```

- `401 Unauthorized`: 
  - Invalid Token
    ```json
    {
      "error": true, 
     "message":"Invalid token"
    }
    ```

- `500 Internal Server Error`:
   ```json
   {
      "error":true,
      "message":"<server error message>"
   }
   ```

#### Refresh Token
**URL**: `/auth/token/refresh`

**Method**: `POST`

**Description**: Refreshes an authentication token (currently not implemented).

**Request Body**:
  ```json
  {
    "email": "<user's email>",
    "token": "<user's token>"
  }
  ```

**Response**:
- `200 OK`: Token is valid.
    ```json
    {
      "token": "<new user's token>"
    }
    ```

- `401 Unauthorized`: 
  - Invalid Email / Token
    ```json
    {
      "error": true, 
     "message":"Invalid email or token"
    }
    ```

- `500 Internal Server Error`:
   ```json
   {
      "error":true,
      "message":"<server error message>"
   }
   ```

---

### **Media Search**

#### Search via Search Bar
**URL**: `/media/search/search-bar`

**Method**: `POST`

**Description**: Performs a simple search for media items.

**Request Body**:
  ```json
  {
    "email": "<user's email>",
    "token": "<user's token>",
    "query": "<search-term>"
  }
  ```

**Response**:
- `200 OK`: Returns matching results.
    ```json
    {
        "email": "<user's email>",
        "token": "<user's token>",
        "success": true,
        "data": [...],
        "results": count
    }
    ```

- `401 Unauthorized`: 
  - Invalid Email / Token
    ```json
    {
      "error": true, 
     "message":"Invalid email or token"
    }
    ```

- `400 Bad Request`: 
  - No query given
    ```json
    {
      "error": true, 
     "message":"No query given"
    }
    ```

- `500 Internal Server Error`:
   ```json
   {
      "error":true,
      "message":"<server error message>"
   }
   ```

#### General Search
**URL**: `/media/search`

**Method**: `POST`

**Description**: Performs an advanced search with pagination.

**Request Body**:
  ```json
  {
    "email": "<user's email>",
    "token": "<user's token>",
    "query": "<search-term>",
    "from": <from range value:int>,
    "to": <to range value:int>
  }
  ```
- **Response**:
  - `200 OK`: Returns matching results.
    ```json
    {
        "success": true,
        "data": [...],
        "results": count
    }
    ```

- `401 Unauthorized`: 
  - Invalid Email / Token
    ```json
    {
      "error": true, 
     "message":"Invalid email or token"
    }
    ```

- `400 Bad Request`: 
  - No query given
    ```json
    {
      "error": true, 
     "message":"No query given"
    }
    ```

- `500 Internal Server Error`:
   ```json
   {
      "error":true,
      "message":"<server error message>"
   }
   ```

#### Search Specific Item
**URL**: `/media/search/item`

**Method**: `POST`

**Description**: Searches for a specific media item by title, authors, and type.

**Request Body**:
  ```json
  {
    "email": "<user's email>",
    "token": "<user's token>",
    "mediaTitle": "<title>",
    "mediaAuthors": "<authors>",
    "mediaType": "<type>"
  }
  ```

**Response**:
  - `200 OK`: Item found.
    ```json
    {
        "success": true,
        "data": [...]
    }
    ```

- `401 Unauthorized`: 
  - Invalid Email / Token
    ```json
    {
      "error": true, 
     "message":"Invalid email or token"
    }
    ```

- `400 Bad Request`: 
  - No title, author or media type given
    ```json
    {
      "error": true, 
     "message":"No title, author or media type given"
    }
    ```

- `500 Internal Server Error`:
   ```json
   {
      "error":true,
      "message":"<server error message>"
   }
   ```

#### Search by Authors
**URL**: `/media/search/authors`

**Method**: `POST`

**Description**: Searches media items grouped by authors.

**Request Body**:
  ```json
  {
    "email": "<user's email>",
    "token": "<user's token>",
    "from": <from range value:int>,
    "to": <to range value:int>
  }
  ```
- **Response**:
  - `200 OK`: Returns authors.
    ```json
    {
        "success": true,
        "data": [...],
        "results": count
    }
    ```

- `401 Unauthorized`: 
  - Invalid Email / Token
    ```json
    {
      "error": true, 
     "message":"Invalid email or token"
    }
    ```

- `400 Bad Request`: 
  - No from or to given
    ```json
    {
      "error": true, 
     "message":"No from or to given"
    }
    ```

- `500 Internal Server Error`:
   ```json
   {
      "error":true,
      "message":"<server error message>"
   }
   ```

#### Search by Genres
**URL**: `/media/search/genres`

**Method**: `POST`

**Description**: Searches media items grouped by genres.

**Request Body**:
  ```json
  {
    "email": "<user's email>",
    "token": "<user's token>",
    "from": <from range value:int>,
    "to": <to range value:int>
  }
  ```
**Response**:
  - `200 OK`: Returns genres.
    ```json
    {
        "success": true,
        "data": [...],
        "results": count
    }
    ```

- `401 Unauthorized`: 
  - Invalid Email / Token
    ```json
    {
      "error": true, 
     "message":"Invalid email or token"
    }
    ```

- `400 Bad Request`: 
  - No from or to given
    ```json
    {
      "error": true, 
     "message":"No from or to given"
    }
    ```

- `500 Internal Server Error`:
   ```json
   {
      "error":true,
      "message":"<server error message>"
   }
   ```

#### Search by Media Types
**URL**: `/media/search/media-types`

**Method**: `POST`

**Description**: Searches media items grouped by media types.

**Request Body**:
  ```json
  {
    "email": "<user's email>",
    "token": "<user's token>",
    "from": <from range value:int>,
    "to": <to range value:int>
  }
  ```

**Response**:
  - `200 OK`: Returns media types.
    ```json
    {
        "success": true,
        "data": [...],
        "results": count
    }
    ```

- `401 Unauthorized`: 
  - Invalid Email / Token
    ```json
    {
      "error": true, 
     "message":"Invalid email or token"
    }
    ```

- `400 Bad Request`: 
  - No from or to given
    ```json
    {
      "error": true, 
     "message":"No from or to given"
    }
    ```

- `500 Internal Server Error`:
   ```json
   {
      "error":true,
      "message":"<server error message>"
   }
   ```

---

### **Media Reservations**

#### Check Reservations
**URL**: `/media/reservation`

**Method**: `PUT`

**Headers**:
```json
"Authorization": 
  {
    "email":"<user's email>",
    "token":"<user's token>"
  }
```

**Body**: 
```json
{
  "media_id":"<media id>"
}
```

**Description**: Returns current reservations (mocked response).

**Response**:
  - `200 OK`: `There are no current reservations.`
  - `401 Unauthorized`: 
  - Invalid Email / Token
    ```json
    {
      "error": true, 
     "message":"Invalid email or token"
    }
    ```

- `400 Bad Request`: 
  - No media id given
    ```json
    {
      "error": true, 
     "message":"No media id given"
    }
    ```
  - `500 Internal Server Error`:
    ```json
    {
        "error":true,
        "message":"<server error message>"
    }
    ```

#### Check Booked Media
**URL**: `/media/booked`

**Method**: `PUT`

**Headers**:
```json
"Authorization": 
  {
    "email":"<user's email>",
    "token":"<user's token>"
  }
```

**Body**: 
```json
{
  "media_id":"<media id>"
}
```

**Description**: Returns booked media (mocked response).

**Response**:
  - `200 OK`: `There is no media booked.`
  - `401 Unauthorized`: 
  - Invalid Email / Token
    ```json
    {
      "error": true, 
     "message":"Invalid email or token"
    }
    ```

- `400 Bad Request`: 
  - No media id given
    ```json
    {
      "error": true, 
     "message":"No media id given"
    }
    ```
  - `500 Internal Server Error`:
    ```json
    {
        "error":true,
        "message":"<server error message>"
    }
    ```

#### Reserve Media
**URL**: `/media/reserve`

**Method**: `PUT`

**Headers**:
```json
"Authorization": 
  {
    "email":"<user's email>",
    "token":"<user's token>"
  }
```

**Body**: 
```json
{
  "media_id":"<media id>"
}
```

**Description**: Reserves media (mocked response).

**Response**:
  - `200 OK`: `Reserved!`

  - `401 Unauthorized`: 
  - Invalid Email / Token
    ```json
    {
      "error": true, 
     "message":"Invalid email or token"
    }
    ```

- `400 Bad Request`: 
  - No media id given
    ```json
    {
      "error": true, 
     "message":"No media id given"
    }
    ```
  - `500 Internal Server Error`:
    ```json
    {
        "error":true,
        "message":"<server error message>"
    }
    ```
---
