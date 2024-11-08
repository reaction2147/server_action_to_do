import { MongoClient, ServerApiVersion } from "mongodb";

export const connectDB = async () => {
    
  const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.zyp5f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  if (!MONGODB_URI) {
    throw new Error("MongoDB URI is not defined in environment variables");
  }

  const client = new MongoClient(MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    tlsInsecure: true // Disables SSL certificate validation
  });

  try {
    const response = await client.connect();
    console.log("MongoDB connected");
    
    return response
   
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};


