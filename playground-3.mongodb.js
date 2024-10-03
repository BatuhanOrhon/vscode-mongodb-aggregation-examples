use('linkedin-learning');

const arr = db.getCollection('orders').aggregate([
    // Find all of the sales that occurred in 2014.
    { $group: { _id: "$customer.fullName", 
        totalOrders: { 
          $count:{} 
          },
        totalItemsPurchased: { 
          $sum: {
            $size: '$items'} 
          },
          totalSpent: { 
            $sum: '$total'
          } 
        }
      }
  ]);
  
  // Print the results
  const result = arr.toArray();
  printjson(result);

