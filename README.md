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

To run the Flask app locally install the requirements.txt file and click play on app.py in VSCode
