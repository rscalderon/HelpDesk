import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'HelpDesk',
  } as ConnectOptions)
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const ticketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now() },
});

export default mongoose.model('Ticket', ticketSchema);
