// const express = require('express');
// const mongodb = require('mongodb');

// const router = express.Router();


// // Get posts

// router.get('/', async (req, res) => {
//   const posts = await loadPostsCollection();
//   res.send(await posts.find({}).toArray());
// });


// // Add posts
// router.post('/', async (req, res) => {
//   const posts = await loadPostsCollection();
//   await posts.insertOne({
//     title: req.body.title,
//     description: req.body.description,
//     address1: req.body.address1,
//     address2: req.body.address2,
//     address3: req.body.address3,
//     from: req.body.from,
//     to: req.body.to,
//     createdAt: new Date()
//   });
//   res.status(201).send();
// });

// // Delete posts
// router.delete('/:id', async (req, res) => {
//   const posts = await loadPostsCollection();
//   await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
//   res.status(200).send();
// });


// async function loadPostsCollection() {
//   const client = await mongodb.MongoClient.connect('mongodb+srv://Spyder:abcd@datab4se-yg3wt.mongodb.net/test?retryWrites=true', {
//     useNewUrlParser: true
//   });
//   return client.db('Datab4se').collection('Gingerbeer');
// }
// // Sept988imus


// module.exports = router;