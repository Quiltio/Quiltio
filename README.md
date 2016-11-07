# Quiltio

ENDPOINTS

for users:

GET /api/user - list users
GET /api/user/id - get one user
POST /api/user - create a user
PATCH /api/user/id update a user
PUT /api/user/id change a entire resource
DELETE /api/user/id delete a user

The same for a team but with the resource /api/team

For login

POST /api/auth/local - with email and password
POST /api/auth/linkedin - with linkedin
