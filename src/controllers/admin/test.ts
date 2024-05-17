// export * from './user'
import { apiResponse } from "../../common";
import { testModel } from "../../database";
import { reqInfo, responseMessage } from "../../helper"

const ObjectId = require('mongoose').Types.ObjectId

export const add_booking = async(req, res)=>{
    reqInfo(req)
    let body = req.body, {user} = req.headers, { longitude, latitude } = req.body;
    try{
        body.createdBy = ObjectId(user?._id)
        body.updatedBy = ObjectId(user?._id)

        const response = await new testModel(body).save()
        if(!response) return res.status(400).json(new apiResponse(400, responseMessage?.addDataError,{},{}))
        return res.status(200).json(new apiResponse(200, responseMessage?.addDataSuccess("test"),response,{}))
    }catch(error){
        console.log(error);
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const edit_booking_by_id = async(req, res)=>{
    reqInfo(req)
    let body = req.body, {user} = req.headers
    try{
        body.updatedBy = ObjectId(user?._id)
        const response = await testModel.findOneAndUpdate({_id:ObjectId(body._id), isDeleted:false}, body, {new:true})
        if(!response) return res.status(404).json(new apiResponse(404, responseMessage?.updateDataError("test"),{},{}))
        return res.status(200).json(new apiResponse(200, responseMessage?.updateDataSuccess("test"),response,{}))
    }catch(error){
        console.log(error);
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const delete_booking_by_id = async(req, res)=>{
    reqInfo(req)
    let {id} = req.params
    try{
        const response = await testModel.findOneAndUpdate({_id:ObjectId(id), isActive: true}, {isActive: false}, {new:true})
        if(!response) return res.status(400).json(new apiResponse(400, responseMessage?.getDataNotFound("test"),{},{}))
        return res.status(200).json(new apiResponse(200, responseMessage?.deleteDataSuccess("test"),response,{}))
    }catch(error){
        console.log(error);
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const get_all_booking = async(req, res) => {
    reqInfo(req)
    let {page, limit} = req.body, response:any, match = req.body, {user} = req.headers
    try{
       
        match.isActive = true
        response = await testModel.find(match)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
          
        const count = response.length
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("test"), {
            test_data: response,
            state: {
                page: page ,
                limit: limit ,
                page_limit: Math.ceil(count / limit) || 1,
            }
        }, {}))
    }catch(error){
        console.log(error);
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}

export const get_by_id_booking = async(req, res)=>{
    reqInfo(req)
    let {id}=req.params
    try{
        let response = await testModel.findOne({_id:ObjectId(id), isActive : true}).lean()
        if(!response) return res.status(400).json(new apiResponse(400, responseMessage?.getDataNotFound("test"),{},{}))
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("test"),response,{}))
    }catch(error){
        console.log(error);
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}


export const get_all_data_delete = async(req, res) => {
    reqInfo(req)
    try{
        await testModel.updateMany({isActive : true}, {$set : {isActive:false}}, {new : true})

        // if(!response) return res.status(400).json(new apiResponse(400, responseMessage?.getDataNotFound("test"),{},{}))
        return res.status(200).json(new apiResponse(200, responseMessage?.deleteDataSuccess("Data"), {}, {}))

    }catch(error){
        console.log(error);
        return res.status(500).json(new apiResponse(500, responseMessage?.internalServerError, {}, error))
    }
}