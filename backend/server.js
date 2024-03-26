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


// Finding total number of airbnbs listed. This query displays the number of listed properties.

app.get("/listProp", async (req, res) => {
    try {
        const NoListProp = await mongoose.connection.db.collection('listingsAndReviews').countDocuments();
        res.status(200).json({ NoListProp });
    } catch (error) {
        console.error("Error fetching data from 'listingsAndReviews'", error);
        res.status(500).json({ error: "Failed to fetch data from 'listingsAndReviews'" });
    }
});


// Finding total number of reviews given in the dataset. i.e ones whose array is not empty

app.get("/listRev", async (req, res) => {
    try {
        const count = await mongoose.connection.db.collection('listingsAndReviews')
            .countDocuments({ reviews: { $exists: true, $not: { $size: 0 } } });

        res.status(200).json({ reviewsCount: count }); // Sending the count as JSON response
    } catch (error) {
        console.error("Error fetching count of documents with reviews content from 'listingsAndReviews'");
        res.status(500).json({ error: "Failed to fetch count of documents with reviews content from 'listingsAndReviews'" });
    }
});

// No of reviews with lank arrays


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

// No of countries listed.

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

// Unique countries diplayed by their names
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



// Pie chart 1 : No of Airbnbs per country

app.get("/piechart-1", async (req, res)=>{
    try{

        const piedata = await mongoose.connection.db.collection("listingsAndReviews").aggregate([
        
        {
           $group:{
            _id : "$address.country",
            count: { $sum: 1} 
           }
        },
        {
            $project : {
                _id : 0,
                country: "$_id",
                count: 1
            }
        },
        {
            $sort: { country: 1 }
        }
    
    ]).toArray();

       
        res.status(200).json({piedata});

    }
    catch(error){
        console.log(error);
    }
});



// Type of property

app.get("/proptype", async (req,res) =>{
    try{
        const bardata = await mongoose.connection.db.collection("listingsAndReviews").aggregate([
            {
                $group:{
                    _id: "$property_type",
                    count: { $sum : 1}
                }
            },
            {
                $project:{
                    _id:0,
                    propertyType : "$_id",
                    count: 1
                }
            },
            {
                $sort:{
                    count: -1
                }
            },
            {
                $limit:10
            }
        ]).toArray();

        console.log(bardata);
        res.status(200).json({bardata});
    }
    catch(error){
        console.log("error", error);
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




app.get("/propType", async (req,res)=> {
    try{
        const count = await mongoose.connection.db.collection("listingsAndReviews").distinct("property_type");

        const num = count.length;

        console.log(num);
        res.status(200).json({num});

    }
    catch(error){
        console.log("error");
        
    }
})

app.get("/barn", async(req,res)=>{
    try{
        const barns = await mongoose.connection.db.collection("listingsAndReviews").countDocuments({property_type:"Barn"});
        console.log(barns);
    }
    catch(error){
        console.log(error);
    }
});




app.get("/policy", async(req,res)=>{
    try{
        const policyData = await mongoose.connection.db.collection("listingsAndReviews").aggregate([
            {
                $group:{
                    _id:"$cancellation_policy",
                    count:{ $sum:1}
                    
                }
            },
            {
                $project:{
                    _id:0,
                    policy:"$_id",
                    count:1
                    
                }
            }
        ]).toArray();

        res.status(200).json({policyData});

    }
    catch(error){
        console.log("Error", error);
    }
});


app.get("/accomodation", async(Req, res)=>{
    try{

        const accom = await mongoose.connection.db.collection("listingsAndReviews").aggregate([
            {
                $group:{
                    _id: "$accommodates",
                    count: { $sum:1}
                }
            },
            {
                $project:{
                    _id:0,
                    accommodates: "$_id",
                    count:1
                }
            }
        ]).toArray();

        res.status(200).json({accom});

    }
    catch(error){
        console.log("error", error);
    }
});