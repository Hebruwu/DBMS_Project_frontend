# FLASK Application

1) Request for get_admin_details for admin having username test:

GET http://127.0.0.1:5000/eventhosting/admins/admin_details/test

Response:
```
{
  "AID": 1,
  "EMAIL": "test",
  "NAME": "test",
  "USERNAME": "test"
}
```

2) Request for get_student_details for student having username judith77:

GET http://127.0.0.1:5000/eventhosting/students/student_details/judith77

Response: 

```
{
  "CITIZENSHIP": "New Zealand",
  "DEPARTMENT": "",
  "EMAIL": "judith77@vt.edu",
  "GENDER": "O",
  "MAJOR": "Creative Technologies",
  "NAME": "Katherine Burns",
  "RACE": "Black or African American",
  "SID": 1,
  "USERNAME": "judith77",
  "YEAR": "Junior\r"
}
```

3) Authenticate Student

Request:
GET http://127.0.0.1:5000/eventhosting/students/authenticate
headers:
Content-Type: application/json
Body:

```
{
    "username": "test",
    "password": "test"
}
```

Response:
If Authentication Suceeded HTTP Status Code -> 200
If Authentication Failed HTTP Status Code -> 401
If Exception HTTP Status Code -> 500

4) Authenticate Admin

Request:
GET http://127.0.0.1:5000/eventhosting/admins/authenticate
headers:
Content-Type: application/json
Body:

```
{
    "username": "test",
    "password": "test"
}
```

Response:
If Authentication Suceeded HTTP Status Code -> 200
If Authentication Failed HTTP Status Code -> 401
If Exception HTTP Status Code -> 500

To run the Flask app locally install the requirements.txt file and click play on app.py in VSCode
