// const models = require('../models');

// function save(req,res){
//     const post = {
//         document: req.body.document,
//         fingerprint: req.body.fingerprint,
//         mobile: req.body.mobile,
//         address: req.body.address,
//         email: req.body.email,
//         status: req.body.status,
//         gender: req.body.gender,
//         party_id: req.body.party_id
//     }

//     models.Candidate.create(post).then(result => {
//         res.status(201).json({
//             message: "Candidate created successfully",
//             candidate: result
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
// 	models.Candidate.findByPk(id).then(result => {
//         if(!result){
//             return res.status(404).json({
//                 message:"Candidate not found!!"
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
	
// 	models.Candidate.findAll().then(result => {
//         if (result) {
//             res.status(200).json(result)
//         } else {
//             res.status(500).json({
//                 message: "Candidate is null"
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
//      models.Candidate.findByPk(id).then(post => {
//         if(post){
//              models.Candidate.update(req.body, {where: {id: id}}).then(result => {
//                res.status(200).json({
//                    message: "Candidate updated successfully",
//                });
//        }).catch(error => {
//            res.status(500).json({
//                message: "Something went wrong",
//                error: error
//            });
//        })
//    } else {
//        return res.status(404).json({
//            message: "Candidate not found"
//        })
//    }
// })
// }


// function destroy(req, res) {
//     const id = req.params.id;
    
//     models.Candidate.destroy({ where: { id: id } }).then(result => {
//         if (result) {
//             res.status(200).json({
//                 message: "Candidate Deleted Successfully",
//                 candidate: result
//             })
//         } else {
//             res.status(500).json({
//                 message: "Candidate is null"
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
//     save: save,
//     show: show,
//     index: index,
//     update: update,
//     destroy: destroy
// };
