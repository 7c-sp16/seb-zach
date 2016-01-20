/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({name:"Library West"}, function(err, listingData){
    if(err) throw err;

    console.log("\n\nFOUND LIBRARY WEST: ");
    console.log(listingData);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

    Listing.findOne({code:"CABL"}, function(err, listingData){
      if(err) throw err;

      if(listingData === null){
        console.log("\n\nDOCUMENT WITH CODE CABL DELETED ALREADY");
        return;
      }

      listingData.remove({code:"CABL"}, function(err){
        if(err) throw err;

        console.log("\n\nDELETED: ");
        console.log(listingData);
      });
    });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

   Listing.findOne({code:"PHL"}, function(err, listingData){
    if(err) throw err;

    listingData.address = "100 Phelps Lab P.O. Box 116350, Gainesville, FL  32611, United States";

    listingData.save(function(err){
      if(err) throw err;
      
      console.log("\n\nUPDATED ENTRY: ");
      console.log(listingData);
    });  
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

   Listing.find({},function(err, listingData){
    if(err) throw err;

    console.log("\n\nALL LISTINGS INCOMING: ");
    console.log(listingData);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();