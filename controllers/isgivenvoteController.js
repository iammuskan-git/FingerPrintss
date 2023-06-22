// const models = require('../models');

// function save(req,res){
//     const post = {
//         voter_id: req.body.voter_id,

//     }

//     models.IsGivenVote.create(post).then(result => {
//         res.status(201).json({
//             message: "IsGivenVote created successfully",
//             IsGivenVote: result
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
// 	models.IsGivenVote.findByPk(id).then(result => {
//         if(!result){
//             return res.status(404).json({
//                 message:"IsGivenVote not found!!"
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
	
// 	models.IsGivenVote.findAll().then(result => {
//         if (result) {
//             res.status(200).json(result)
//         } else {
//             res.status(500).json({
//                 message: "IsGivenVote is null"
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
//      models.IsGivenVote.findByPk(id).then(post => {
//         if(post){
//              models.IsGivenVote.update(req.body, {where: {id: id}}).then(result => {
//                res.status(200).json({
//                    message: "IsGivenVote updated successfully",
//                });
//        }).catch(error => {
//            res.status(500).json({
//                message: "Something went wrong",
//                error: error
//            });
//        })
//    } else {
//        return res.status(404).json({
//            message: "IsGivenVote not found"
//        })
//    }
// })
// }


// function destroy(req, res) {
//     const id = req.params.id;
    
//     models.IsGivenVote.destroy({ where: { id: id } }).then(result => {
//         if (result) {
//             res.status(200).json({
//                 message: "IsGivenVote Deleted Successfully",
//                 IsGivenVote: result
//             })
//         } else {
//             res.status(500).json({
//                 message: "IsGivenVote is null"
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
