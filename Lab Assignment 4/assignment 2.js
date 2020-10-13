use test
db.MongoDBHandsOn.aggregate([
    { $group : { _id: null, sum: {$sum:"$children"} } }
])
db.MongoDBHandsOn.aggregate([
    { $group : { _id: null, avg: {$avg:"$age"} } }
])