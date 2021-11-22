import mongoose from 'mongoose';

const dbUrl = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.ujs4d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const db = {
  url: dbUrl,
  mongoose: mongoose
}

export default db
