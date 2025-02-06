import mongoose from "mongoose";

// Connect to MongoDB

mongoose.connect('mongodb+srv://zyanyahuatli:UzamiJericko7@awicluster.7hskd.mongodb.net/sessions_db?retryWrites=true&w=majority&appName=AWICluster')
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));

export default mongoose;