// const models = require('../models');

// function save(req, res) {
//     const post = {
//         name: req.body.name,
//         symbol: req.body.symbol,
//     }

//     models.Party.create(post).then(result => {
//         res.status(201).json({
//             message: "Party created successfully",
//             candidate: result
//         });
//     }).catch(error => {
//         res.status(500).json({
//             message: "Something went wrong",
//             error: error
//         });
//     });
// }
// function show(req, res) {
//     const id = req.params.id;
//     models.Party.findByPk(id).then(result => {
//         if (!result) {
//             return res.status(404).json({
//                 message: "Party not found!!"
//             })
//         } else {
//             res.status(200).json({
//                 result: result
//             });
//         }
//     }).catch(error => {
//         res.status(500).json({
//             message: "Something went wrong"
//         });
//     });
// }
// function index(req, res) {

//     models.Party.findAll().then(result => {
//         if (result) {
//             res.status(200).json(result)
//         } else {
//             res.status(500).json({
//                 message: "Party is null"
//             })
//         }
//     }).catch(error => {
//         res.status(500).json({
//             message: "Something went wrong"
//         });
//     });
// }

// function update(req, res) {
//     const id = req.params.id;
//     models.Party.findByPk(id).then(post => {
//         if (post) {
//             models.Party.update(req.body, { where: { id: id } }).then(result => {
//                 res.status(200).json({
//                     message: "Party updated successfully",
//                 });
//             }).catch(error => {
//                 res.status(500).json({
//                     message: "Something went wrong",
//                     error: error
//                 });
//             })
//         } else {
//             return res.status(404).json({
//                 message: "Party not found"
//             })
//         }
//     })
// }


// function destroy(req, res) {
//     const id = req.params.id;

//     models.Party.destroy({ where: { id: id } }).then(result => {
//         if (result) {
//             res.status(200).json({
//                 message: "Party Deleted Successfully",
//                 result: result
//             })
//         } else {
//             res.status(500).json({
//                 message: "Party is null"
//             })
//         }
//     }).catch(error => {
//         res.status(500).json({
//             message: "Something went wrong",
//             error: error
//         })
//     });
// }
// module.exports = {
//     save: save,
//     show: show,
//     index: index,
//     update: update,
//     destroy: destroy
// };
