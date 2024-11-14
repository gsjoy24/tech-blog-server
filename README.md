## Instructions on how to run the server locally 📝

- 1️⃣ Clone the repository to your machine if you have the access. Use this link to do it.
  ↦ <https://github.com/gsjoy24/getback-server>
- 2️⃣ Open the project in vs code and create a file named .env in the root of the folder.
- 3️⃣ Add the code bellow in the .env file

```
# you can use your database
DATABASE_URL=
PORT=5000
JWT_ACCESS_SECRET=
JWT_ACCESS_SECRET_EXPIRATION=
JWT_REFRESH_SECRET=
JWT_REFRESH_EXPIRATION=
PASS_SAIL=

APP_EMAIL=
APP_PASSWORD=

# admin credential
ADMIN_EMAIL=
ADMIN_PASSWORD=

```

- 4️⃣ Open the command prompt on the project path or terminal on the vs code by pressing Ctrl + `
- 5️⃣ Run the command 'npm i' or 'npm install' to install all the necessary dependencies.
- 6️⃣ To run the server on <http://localhost:3000>, run the command 'npm run start:dev'. if the server is running, you will see the code bellow on your machine.

```
// on terminal or cmd
Server is running on http://localhost: 3000

// on http://localhost:3000/
{
   "status": "success",
   "message": "server for lost and find is running!"
}
```

- 7️⃣ To run the production version, run the command 'npm run build' to build the project. After complete the build process, run 'npm run start:prod' to run the build or production version on the localhost.

#### This server is deployed on vercel

client-git: <https://github.com/gsjoy24/getback-client>
backend-git: <https://github.com/gsjoy24/getback-server>

client-live: <http://getback.vercel.app/>
backend-live: <https://lost-and-found-server-joy.vercel.app/>

admin -
email : <gour.joy24@gmail.com>
password : SuperAdmin0

user -
email :gour@gmail.com
password: password
