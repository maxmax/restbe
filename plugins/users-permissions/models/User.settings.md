{
  "connection": "default",
  "info": {
    "name": "user",
    "description": ""
  },
  "attributes": {
    "username": {
      "type": "string",
      "minLength": 3,
      "unique": true,
      "configurable": false,
      "required": true
    },
    "email": {
      "type": "email",
      "minLength": 6,
      "configurable": false,
      "required": true
    },
    "provider": {
      "type": "string",
      "configurable": false
    },
    "password": {
      "type": "password",
      "minLength": 6,
      "configurable": false,
      "private": true
    },
    "resetPasswordToken": {
      "type": "string",
      "configurable": false,
      "private": true
    },
    "role": {
      "model": "role",
      "via": "users",
      "plugin": "users-permissions",
      "configurable": false
    },
    "dream-job": {
      "type": "text"
    },
    "countries": {
      "model": "countries",
      "via": "user"
    },
    "mydreamjob": {
      "type": "text"
    },
    "birthDate": {
      "type": "date"
    },
    "phone": {
      "type": "string"
    }
  },
  "collectionName": "users-permissions_user"
}