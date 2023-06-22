// const models = require('../models');

// function save(req,res){
//     const post = {
//         candidate_id: req.body.candidate_id,

//     }

//     models.Voting.create(post).then(result => {
//         res.status(201).json({
//             message: "Voting created successfully",
//             voting: result
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
// 	models.Voting.findByPk(id).then(result => {
//         if(!result){
//             return res.status(404).json({
//                 message:"Voting not found!!"
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
	
// 	models.Voting.findAll().then(result => {
//         if (result) {
//             res.status(200).json(result)
//         } else {
//             res.status(500).json({
//                 message: "Voting is null"
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
//      models.Voting.findByPk(id).then(post => {
//         if(post){
//              models.Voting.update(req.body, {where: {id: id}}).then(result => {
//                res.status(200).json({
//                    message: "Voting updated successfully",
//                });
//        }).catch(error => {
//            res.status(500).json({
//                message: "Something went wrong",
//                error: error
//            });
//        })
//    } else {
//        return res.status(404).json({
//            message: "Voting not found"
//        })
//    }
// })
// }


// function destroy(req, res) {
//     const id = req.params.id;
    
//     models.Voting.destroy({ where: { id: id } }).then(result => {
//         if (result) {
//             res.status(200).json({
//                 message: "Voting Deleted Successfully",
//                 voting: result
//             })
//         } else {
//             res.status(500).json({
//                 message: "Voting is null"
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
