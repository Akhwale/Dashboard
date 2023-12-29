const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;


// Simple Connection to the database
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database successfully!");
    const connectedDb = mongoose.connection.db;
    console.log("Connected database name:", connectedDb.databaseName);
  })
  .catch((err) => console.error("Connection error:", err));


// Port Assignment
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});


// Test Route
app.get("/", (req,res)=>{
    res.send("This is my dashboard project manze!");
});


// Finding total number of airbnbs listed

app.get("/listed", async (req, res) => {
    try {
        const count = await mongoose.connection.db.collection('listingsAndReviews').countDocuments();
        console.log(count);
        res.status(200).json({ count }); // Sending count as a JSON response
    } catch (error) {
        console.error("Error fetching data from 'listingsAndReviews'");
        res.status(500).json({ error: "Failed to fetch data from 'listingsAndReviews'" });
    }
});


// Finding total number of reviews

// app.get("/reviews", async(req,res) => {
//     try{
//         const reviews = await mongoose.connection.db.collection('listingsAndReviews').find({ reviews: { $exists: true, $ne: null } }).toArray();
//         console.log(reviews);
//     } catch(error){
//         console.error("Error fetching data from 'listingsAndReviews'");
//         res.status(500).json({error : "Failed to fetch data from 'listingsAndReviews'"});
//     }
// })

// app.get("/reviews", async (req, res) => {
//     try {
//         const reviews = await mongoose.connection.db.collection('listingsAndReviews').find({ reviews: { $exists: true, $ne: null } }).toArray();
//         console.log(reviews.length);
//         res.status(200).json({ reviews }); // Sending the reviews as JSON response
//     } catch (error) {
//         console.error("Error fetching data from 'listingsAndReviews'");
//         res.status(500).json({ error: "Failed to fetch data from 'listingsAndReviews'" });
//     }
// });





app.get("/reviews", async (req, res) => {
    try {
        const count = await mongoose.connection.db.collection('listingsAndReviews')
            .countDocuments({ reviews: { $exists: true, $ne: null } });

        res.status(200).json({ reviewsCount: count }); // Sending the count as JSON response
    } catch (error) {
        console.error("Error fetching review count from 'listingsAndReviews'");
        res.status(500).json({ error: "Failed to fetch review count from 'listingsAndReviews'" });
    }
});


app.get("/reviewsEmptyCount", async (req, res) => {
    try {
        const count = await mongoose.connection.db.collection('listingsAndReviews')
            .countDocuments({ reviews: { $exists: true, $eq: [] } });

        res.status(200).json({ emptyReviewsCount: count }); // Sending the count as JSON response
    } catch (error) {
        console.error("Error fetching count of documents with empty reviews from 'listingsAndReviews'");
        res.status(500).json({ error: "Failed to fetch count of documents with empty reviews from 'listingsAndReviews'" });
    }
});



app.get("/reviewsWithContentCount", async (req, res) => {
    try {
        const count = await mongoose.connection.db.collection('listingsAndReviews')
            .countDocuments({ reviews: { $exists: true, $not: { $size: 0 } } });

        res.status(200).json({ reviewsWithContentCount: count }); // Sending the count as JSON response
    } catch (error) {
        console.error("Error fetching count of documents with reviews content from 'listingsAndReviews'");
        res.status(500).json({ error: "Failed to fetch count of documents with reviews content from 'listingsAndReviews'" });
    }
});


app.get("/noOfCountries", async (req, res) => {
    try {
        const uniqueCountries = await mongoose.connection.db.collection('listingsAndReviews').distinct("address.country");
        const numberOfUniqueCountries = uniqueCountries.length;
        console.log(`Number of unique countries: ${numberOfUniqueCountries}`);

        res.status(200).json({ count: numberOfUniqueCountries }); // Sending the count as a JSON response with a key 'count'
    } catch (error) {
        console.error("Error occurred while fetching number of unique countries:", error);
        res.status(500).json({ error: "Error occurred while fetching number of unique countries" });
    }
});


app.get("/uniqueCountries", async (req, res) => {
    try {
        const uniqueCountries = await mongoose.connection.db.collection('listingsAndReviews').distinct("address.country");
        
        console.log(`Unique countries: ${uniqueCountries}`);
        
        res.status(200).json({ uniqueCountries }); // Sending the unique countries array as a JSON response

    } catch (error) {
        console.error("Error occurred while fetching unique countries:", error);
        res.status(500).json({ error: "Error occurred while fetching unique countries" });
    }
});


// Ammenities


app.get("/amenities", async (req, res) => {
    try {
        const count = await mongoose.connection.db.collection('listingsAndReviews')
            .countDocuments({ amenities: { $exists: true, $not: { $size: 0 } } });

        res.status(200).json({ reviewsWithContentCount: count }); // Sending the count as JSON response
    } catch (error) {
        console.error("Error fetching count of documents with reviews content from 'listingsAndReviews'");
        res.status(500).json({ error: "Failed to fetch count of documents with reviews content from 'listingsAndReviews'" });
    }
});


app.get("/noOfSpaces", async (req, res) => {
    try {
        const uniqueCountries = await mongoose.connection.db.collection('listingsAndReviews').distinct("name");
        const numberOfUniqueCountries = uniqueCountries.length;
        console.log(`Number of unique countries: ${numberOfUniqueCountries}`);

        res.status(200).json({ count: numberOfUniqueCountries }); // Sending the count as a JSON response with a key 'count'
    } catch (error) {
        console.error("Error occurred while fetching number of unique countries:", error);
        res.status(500).json({ error: "Error occurred while fetching number of unique countries" });
    }
});


// app.get("/property", async (req, res) => {
//     try {
//         const properties = await mongoose.connection.db.collection('listingsAndReviews').distinct("property_type");
//         console.log(properties);
//         res.status(200).json({ properties }); // Sending count as a JSON response
//     } catch (error) {
//         console.error("Error fetching data from 'listingsAndReviews'");
//         res.status(500).json({ error: "Failed to fetch data from 'listingsAndReviews'" });
//     }
// });


app.get("/property", async (req, res) => {
    try {
        const properties = await mongoose.connection.db.collection('listingsAndReviews').aggregate([
            { 
                $group: {
                    _id: "$property_type", // Grouping by property type
                    count: { $sum: 1 } // Counting instances of each property type
                }
            },
            { 
                $sort: { count: -1 } // Sorting by count in descending order
            },
            {
                $project: {
                    _id: 0,
                    propertyType: "$_id", // Renaming "_id" to "propertyType"
                    count: 1 // Including the count field
                }
            },
            {
                $limit: 10 // Limiting the output to the first 10 items
            }
        ]).toArray();

        console.log(properties);
        res.status(200).json({ properties }); // Sending properties and counts as a JSON response
    } catch (error) {
        console.error("Error fetching data from 'listingsAndReviews'");
        res.status(500).json({ error: "Failed to fetch data from 'listingsAndReviews'" });
    }
});


app.get("/barn", async(req,res)=>{
    try{
        const barns = await mongoose.connection.db.collection("listingsAndReviews").countDocuments({property_type:"Barn"});
        console.log(barns);
    }
    catch(error){
        console.log(error);
    }
})