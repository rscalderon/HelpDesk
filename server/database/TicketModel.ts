import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(
    'mongodb+srv://samourcalderon:Lhc7kzLqKHuJ7cv2@cluster0.pmha4cj.mongodb.net/',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'HelpDesk',
    } as ConnectOptions
  )
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const ticketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now() },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

// export query to controllers as access point to db
export default Ticket;
