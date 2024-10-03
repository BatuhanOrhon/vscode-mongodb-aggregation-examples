use('linkedin-learning');

db.dropCollection('sales');

db.getCollection('products').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { quantity: { $gt: 500 } }},
  {
      $addFields: {
          discount: {
              $cond: [
                  { $lte: ["$price", 500] }, // Eğer price 500'e eşit veya küçükse
                  0.4, // İndirim oranı %40
                  0.5  // İndirim oranı %50
              ]
          }
      }
  },
  {
      $addFields: {
          salePrice: {
              $multiply: [
                  "$price", // Fiyatı al
                  { $subtract: [1, "$discount"] } // İndirimi fiyat üzerinden çıkar
              ]
          }
      }
  },
  { $out: "sales" }
]);

const arr = db.getCollection('sales').find({});


  
  // Print the results
  const result = arr.toArray();
  printjson(result);

