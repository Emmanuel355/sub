# Assignment: Implement a CRUD System

## Overview

Your task is to implement a CRUD (Create, Read, Update, Delete) system where a user can submit a form and view it on the landing page.

## Requirements

1. **Form Fields**: The form should have the following fields:

   - Name (required)
   - Email (required, unique)
   - Description

2. **Database**: Use the provided `docker-compose` file to start the database.

3. **ORM**: Use Prisma ORM for the model.

4. **API**: You can use server actions or set up API routes for handling requests.

## Steps

1. **Setup the Database**: Use the provided `docker-compose` file to start your database.

2. **Create the Form**: Implement a form with the required fields. Ensure that the 'Name' and 'Email' fields are set as required. Also, ensure that the 'Email' field is unique.

3. **Implement CRUD Operations**: Implement the following operations:

   - **Create**: When a user submits the form, create a new record in the database.
   - **Read**: Display the submitted information on the landing page.
   - **Update**: Allow users to update their information.
   - **Delete**: Allow users to delete their information.

4. **Use Prisma ORM**: Use Prisma ORM to interact with your database. This includes creating, reading, updating, and deleting records.

5. **Setup API**: You can use server actions or set up API routes for handling requests. This will be used to interact with the form and perform the CRUD operations.

## Submission

Once you have completed the assignment, please submit your code for review.

Good luck!
