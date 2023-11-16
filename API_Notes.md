# API Requirements Per Page

## Login Page
- Two routes
    - Student
        - authenticate\_student
    - Admin
        - authenticate\_admin

## Sign Up
- Two routes:
    - Student
        - insert\_student
    - Admin
        - insert\_admin

## Accepted Events
- get\_invites
- Button to provide feedback
    - insert\_feedback

## Event Invites
- get\_invites
    - May be done with the same route as the "accepted events" and filtering will be done on front end.
- Button to accept or decline event:
    - update\_invite

## Student Account Details
- get\_student

## Admin Posted Events
- get\_events

## Create Event
- before send invite moves to the next page (Send Invites) we need to call insert\_event method of the API.

## Who's Attending
- We are skipping it for now

## Send Invites
- A function will need to be modified.
