#Create a .env file in the root directory and add the following
NODE_ENV=development
PORT=5000
MONGO_URI= Go get yours from the mongoDB you created
JWT_SECRET=abc123
#The mongo DB URI is the only thing you need to add yours, then keep everything as it is.

#Commands in the root directory
npm i
to run the backend alone just run 'npm run server' in the root directory
to run both the backend and the frontend jut run 'npm run dev' in the root directory

#Commands in the frontend directory
npm i
run 'npm run dev' in the frontend directory to run the frontend alone
