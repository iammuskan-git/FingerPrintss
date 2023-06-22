// const models = require('../models');

// function saves(req,res){
//     const posts = {
//         document: req.body.document,
//         email: req.body.email,
//         mobile: req.body.mobile,
//         fingerprint: req.body.fingerprint,
//         status: req.body.status,

//     }

//     models.Voter.create(posts).then(result => {
//         res.status(201).json({
//             message: "Voter created successfully",
//             voter: result
//         });
//     }).catch(error => {
//             res.status(500).json({
//                 message: "Something went wrong",
//                 error: error
//             });
//     });
// }


// function show(req, res){	
// 	const id = req.params.id;
// 	models.Voter.findByPk(id).then(result => {
//         if(!result){
//             return res.status(404).json({
//                 message:"Voter not found!!"
//             })
//         }else{
//             res.status(200).json({
//                 result
//             });
//         }
// }).catch(error => {
// 	res.status(500).json({						
// 	message: "Something went wrong"				
//     });
// });
// }


// function index(req, res){	
	
// 	models.Voter.findAll().then(result => {
//         if (result) {
//             res.status(200).json(result)
//         } else {
//             res.status(500).json({
//                 message: "Voter is null"
//             })
//         }
// }).catch(error => {
// 	res.status(500).json({						
// 	message: "Something went wrong"				
// });
// });
// }


// function update(req, res){
//     const id = req.params.id;
//      models.Voter.findByPk(id).then(post => {
//         if(post){
//              models.Voter.update(req.body, {where: {id: id}}).then(result => {
//                res.status(200).json({
//                    message: "Voter updated successfully",
//                });
//        }).catch(error => {
//            res.status(500).json({
//                message: "Something went wrong",
//                error: error
//            });
//        })
//    } else {
//        return res.status(404).json({
//            message: "Voter not found"
//        })
//    }
// })
// }


// function destroy(req, res) {
//     const id = req.params.id;
    
//     models.Voter.destroy({ where: { id: id } }).then(result => {
//         if (result) {
//             res.status(200).json({
//                 message: "Voter Deleted Successfully",
//                 voter: result
//             })
//         } else {
//             res.status(500).json({
//                 message: "Voter is null"
//             })
//         }
//     }).catch(error => {
//         res.status(500).json({
//             message: "Something went wrong",
//             error: error
//         })
//     });
// }
// module.exports= {
//     saves: saves,
//     show: show,
//     index: index,
//     update: update,
//     destroy: destroy
// };
