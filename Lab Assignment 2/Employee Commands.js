db.Employee.insert({_id: 1, empName: "Aakashdeep Sil", dept: "Software", deptNo: 1001, mobile: "1234567890", email: "abc@gmail.com", age: 35})
db.Employee.insert({_id: 2, empName: "def", dept: "Software", deptNo: 1002, mobile: "1234509876", email: "def@gmail.com", age: 40})
db.Employee.save({_id: 3, empName: "ghi", dept: "Hardware", deptNo: 1003, mobile: "1234509867", email: "ghi@gmail.com", age: 25})
db.Employee.update({_id: 4, empName: "jkl", dept: "Hardware", deptNo: 1004, email: "jkl@gmail.com", age: 28}, {$set: {mobile: "1234509786"}}, {upsert: true})
db.Employee.update({_id: 2, empName: "def"}, {$set: {dept: "Hardware"}}, {upsert: false})
db.Employee.update({}, {$set: {location: "Bangalore"}}, {multi: true})
db.Employee.update({_id: 3}, {$set: {email: "klm@gmail.com"}})
db.Employee.find({})
db.Employee.find({deptNo: {$in: [1002,1003,1004]}}, {empName: 1, deptNo: 1, _id: 0})
db.Employee.find({empName: /^A/})
db.Employee.find({age: {$gt 30}})