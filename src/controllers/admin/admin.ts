import axios from "axios";
import { apiResponse } from "../../common";
import { reqInfo, responseMessage } from "../../helper";
import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';
import crypto from 'crypto';

export const new_deposit = async(req, res) => {
    try{
        console.log("new deposit req => ", req.body);
        // console.log("amount => ", req.body.amount);
        // setTimeout(() => {
            // if(!req.body.traId) 
            if(!req.body.metaData) return res.status(400).json({status : 400, message : "metaData not found"})
            return res.status(200).json(new apiResponse(200, "Your message", {}, {}));
        // }, 20000);
        // return res.status(200).json({status : 200, message : "edfedtfed"})

    }catch(error){
        // console.log(error);
    }
}
//lastUpdateDepositTime

export const new_withdraw = async(req, res) => {
    try{
        console.log("new withdraw req => ",req.body);
        let message = "avc"
        // setTimeout(() => {
            return res.status(200).json(new apiResponse(200, "Your message", {}, {}));
        // }, 15000);
        // return res.status(400).json(new apiResponse(400, message, {}, {}))

    }catch(error){
        // console.log(error);
    }
}

export const deposit_update = async(req, res) => {
    try{
        console.log("deposit update => ", req.body);
        return res.status(200).json({status : 200, message : "edfedtfed"})


    }catch(error){
        // console.log(error);
    }
}
export const deposit_rollback_update = async(req, res) => {
    try{
        console.log("deposit rollback update => ", req.body);   
        return res.status(200).json({status : 200, message : "edfedtfed"})
    }catch(error){
        // console.log(error);
    }
}
export const withdraw_update = async(req, res) => {
    try{
        console.log("withdraw update update => ", req.body);
        // return res.status(400).json({status : 400, message : "edfedtfed"})
        return res.status(200).json({status : 200, message : "edfedtfed"})

    }catch(error){
        // console.log(error);
    }
}

export const withdraw_details = async( req, res) => {
    let {traId} = req.body
    try{
        const response = await axios.post(`http://localhost:4000/user/withdraw/details/${traId}`)
        console.log("response => ",response);
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("response"), response.data.data, {}))
    }catch(error){
        // console.log(error);
    }
}

export const deposit_details = async( req, res) => {
    let {traId} = req.body
    console.log("traId => ", traId);
    try{
        const response = await axios.post(`http://localhost:4000/user/deposit/details/${traId}`)
        console.log("deposit details response => ",response);
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("response"), response.data.data, {}))
    }catch(error){
        // console.log(error);
    }
}

export const withdraw_Verify = async(req, res) => {
    let {body}=req;
    try{
        const response = await axios.post("http://localhost:4000/user/withdraw/verify", {...body})
        // const response = await axios.post("https://tes_api_dev.cloudd.live/api/v1/user/withdraw/verify", {...body})
        console.log("withdraw Verify => ",response.data);
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("response"), response.data.data, {}))
        // return res.status(400).json(new apiResponse(400, responseMessage?.getDataSuccess("response"), response.data.data, {}))
    }catch(error){
        // console.log(error);
    }
}

export const withdraw_check_balance = async(req, res) => {
    let {body}=req;
    try{
        console.log("withdraw check balance => ",body)
        // const response = await axios.post("https://tes_api_dev.cloudd.live/api/v1/user/withdraw/verify", {...body})
        let message = "abc"
        let message1 = "Hii How Are You"
        // return res.status(400).json(new apiResponse(400, message, {}, {}))
        return res.status(200).json(new apiResponse(200, message, message1, {}))
    }catch(error){
        // console.log(error);
    }
}

export const otp_verify = async( req, res) => {
    let {body} = req.body, {token} = req.query
    try{
        console.log("req => ",req.query);
        // const response = await axios.post(`http://localhost:4000/user/withdraw/details/${traId}`)
        // console.log("response => ",response);
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("response"), {}, {}))
    }catch(error){
        // console.log(error);
    }
}

export const user_withdraw_verify_balance = async( req, res) => {
    let {body} = req.body, {token} = req.query
    try{
        console.log("live user request => ",body);
        // const response = await axios.post(`http://localhost:4000/user/withdraw/details/${traId}`)
        // console.log("response => ",response);
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("response"), {}, {}))
    }catch(error){
        // console.log(error);
    }
}

export const get_withdraw_details_by_traId = async(req, res) => {
    reqInfo(req)
    let {traId} = req.params, {token} = req.query
    try{
        console.log("live user request => ",traId);
        const response = await axios.post(`http://localhost:4000/user/withdraw/details/${traId}`)
        console.log("response => ",response);
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("response"), response, {}))
    }catch(error){
        // console.log(error);
    }
}

let metaData = {
    PaymentAPIId: 1,
    amount: 100,
    promoCode: "Sports3%Bonus",
    transactionId:"26756399-e2a4-2388-a96c-cb3b41bc1086"
}

export const upiDisbursment = async(req, res) => {
    reqInfo(req)
    let {traId} = req.body, {token} = req.query
    try{
        console.log("live user request => ",req.body);
        // return res.status(400).json({STATUS : "FAILED", MSG : "Transaction Status Message", RRN  : "Bank Reference Number", Name : "Beneficiary Name"})
        return res.status(403).json({STATUS : "FAILED", MSG: 'Unauthorised IP Address', ip: '35.204.6.132'})

    }catch(error){
        // console.log(error);
    }
}

export const bank_disbursment = async(req, res) => {
    reqInfo(req)
    let {traId} = req.body, {token} = req.query
    try{
        console.log("bank_disbursment => ",req.body);
        return res.status(200).json({STATUS : "SUCCESS", MSG : "Transaction Status Message", RRN  : "Bank Reference Number", Name : "Beneficiary Name"})
        // return res.status(400).json({STATUS : "FAILED", MSG : "Transaction Status Message", RRN  : "Bank Reference Number", Name : "Beneficiary Name"})
        // return res.status(200).json({STATUS : "SUCCESS", MSG: 'DONE'})
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})

    }catch(error){
        // console.log(error);
    }
}

export const acepy_status_check = async(req, res) => {
    reqInfo(req)
    let {traId} = req.body, {token} = req.query
    try{
        console.log("acepy_status_check => ",req.query);
        // return res.status(400).json({STATUS : "PENDING", MSG : "Transaction Status Message", RRN  : "Bank Reference Number", Name : "Beneficiary Name"})
        // return res.status(400).json({STATUS : "FAILED", MSG : "Transaction Status Message", RRN  : "Bank Reference Number", Name : "Beneficiary Name"})
        return res.status(200).json({STATUS : "SUCCESS", MSG: 'DONE'})
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})

    }catch(error){
        // console.log(error);
    }
}

export const get_wallet_amount_check = async(req, res) => {
    reqInfo(req)
    let {traId} = req.body, {token} = req.query
    try{
        console.log("get_wallet_amount_check => ",req.body);
        // return res.status(400).json({STATUS : "FAILED", MSG : "Transaction Status Message", RRN  : "Bank Reference Number", Name : "Beneficiary Name"})
        return res.status(200).json(10)
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})

    }catch(error){
        // console.log(error);
    }
}

export const phonipay_login = async(req, res) => {
    reqInfo(req)
    try{

        let response = {
            "accessToken":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmNyeXB0ZWRUb2tlbiI6IlUyRnNkR1ZrWDEvRFpkb05oQmxja1N2UHhJZnc0bXFrVkZlU2phZk5VaUtGVGpjWkRVclhrWWlPS2N2VEZFeDAvR0VoZjJwSzhpbytSTHVwZmI1bERMdCsraCtqK251R3gxaTJVRjB1UUt5ZGxvRXlxejZGaERJYlhFQ1R1RjRZTnpSc0FrYkd0T0toSEk2dklRZXlKMUhaUUNRUzZVTWczV21JdFlZeE5sWXo4NG8wSTFTT29XRnpGSCtoaXk1L1NaQm5CVzFUSTYvRWhMOE54ZUFXK3djN3A3dG12cXU1UFUrNXRTVTZqYU1EY0hCNjg3WHIvSjNyclMzaXF1ajFEc3dRSHlxTFhxQUFyZVk4Q0duWDM1aUFWanZveDRHZmY5dG1xODFWQUlpNktNd255dElrZGRMam5Qb3J4d0NnQlM5WkNBblE1SUlHa2VDUW8zcU9aZGNlalpNWk9uMG4zSXdvU1lNNnI5VT0iLCJpYXQiOjE3MTE1MjkxOTksImV4cCI6MTcxMTYxNTU5OX0.wXbgVAQmjpod5OHoG3pZUcCtithNlyTmyBzIIauoWys",
            "tokenType": "Bearer",
            "userDetail": {
            "userName": "alex@phonipay.com",
                "role": "PAYOUT"
            },
            "meta": {
                "message": "User Successfully Logged.",
                "status_code": 200,
                "status": true
            }
        }
            
        console.log("get_wallet_amount_check => ",req.body);
        // return res.status(400).json({STATUS : "FAILED", MSG : "Transaction Status Message", RRN  : "Bank Reference Number", Name : "Beneficiary Name"})
        return res.status(200).json(response)
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})

    }catch(error){
        // console.log(error);
    }
} 

export const phonipay_payout = async(req, res) => {
    reqInfo(req)
    try{

        let response = {
            data : [
                {
                    "transactionId": "5afb198e-5b42-497a-a689",
                    "paymentStatus": null,
                    "utr": null,
                    "amount": 500,
                    "transactionReference": null,
                    "orderSignature": null,
                    "paymentMode": "IMPS",
                    "createdAt": "2024-03-27T08:51:45.570Z"
                }
            ],
            "meta": {
                "message": "Withdrawal Transaction Successfully Saved.",
                "status_code": 200,
                "status": false
            }
                
        }
            
        console.log("get_wallet_amount_check => ",req.body);
        // return res.status(400).json({STATUS : "FAILED", MSG : "Transaction Status Message", RRN  : "Bank Reference Number", Name : "Beneficiary Name"})
        return res.status(200).json(response)
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})

    }catch(error){
        // console.log(error);
    }
} 

export const aeps_payout = async(req, res) => {
    reqInfo(req)
    let {user_code} = req.params, {header} = req.headers, {body} = req.body
    try{
        // console.log("req => ",req);
        console.log("userCode => ",user_code);
        console.log("headers => ",req.headers);
        console.log("body => ",req.body);

        // return res.status(400).json({STATUS : "FAILED", MSG : "Transaction Status Message", RRN  : "Bank Reference Number", Name : "Beneficiary Name"})
        return res.status(200).json({})
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})

    }catch(error){
        // console.log(error);
    }
} 

export const deposit_bank_request = async(req, res) => {
    reqInfo(req)
    try{
        console.log("deposit_bank_request scrapping => ",req.body);

        // return res.status(400).json({STATUS : "FAILED", MSG : "Transaction Status Message", RRN  : "Bank Reference Number", Name : "Beneficiary Name"})
        return res.status(200).json(
            {
                "clientid": req.body.clientid,
                "date": "02:29 PM, 28 Dec 2022",
                "imageurl": "https://cdn.cloudd.live/hattrick.games/ManualDeposit/8117/20220231307588.jpeg",
                "ismatched": true,
                "receiver": "Gohilrajubhaiprabinb",
                "status": 200,
                "upiref": "234567890932"
            }
        )
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})

    }catch(error){
        // console.log(error);
    }
}

export const wizpay_upi_request = async(req, res) => {
    reqInfo(req)
    try{
        console.log("wizpay_upi_request headers => ",req.headers);

        return res.status(200).json(
            {
                "success": true,
                "message":	"Order	created	successfully.",
                "status": 201,
                "data": {
                "refID":	"81bd72b6-ca76-4bc0-9fde-d09587adb6f9",
                "redirectURL": "http://localhost:4000/user/deposit/?id=4AnozI8WH",
                "orderStatus": "pending"
                }
            }
        )
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})

    }catch(error){
        // console.log(error);
    }
}

export const paycial_deposit_request = async(req, res) => {
    reqInfo(req)
    try{

        return res.status(200).json(
            {
                status: true,
                message: 'Payment link',
                data: {
                        url: "https://paycials.com/make-payment?id=663f81a51cc70ff140" 
                    }
            }
        )
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})

    }catch(error){
        // console.log(error);
    }
}

export const paycial_deposit_status_check = async(req, res) => {
    reqInfo(req)
    try{
        let {id} = req.params
        console.log("id = >",id);
        return res.status(200).json(
            // {
            //     "status": true,         //if true => credit coins
            //     "message": "Transaction is approved",
            //     "data": {
            //         "status": "approved",
            //         "phone": "999999999",
            //         "amount": 100,
            //         "utr": "4te453we45te435",
            //         "orderId": "4N7847HFRK",
            //         "approvedAt": "2024-05-08T10:13:38.827Z"
            //     }
            // }
            // {
            //     "status": false,
            //     "message": "Transaction is not approved",
            //     "data": {
            //         "status": "rejected",
            //         "phone": "999999999",
            //         "amount": 100,
            //         "utr": "4784947889",
            //         "orderId": "4N7847HFRK",
            //         "approvedAt": "2024-05-08T10:13:38.827Z"
            //     }
            // }
            {
                "status": false,
                "message": "Transaction not found",
            }
        )
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})

    }catch(error){
        // console.log(error);
    }
}

export const paycial_deposit_callback_check = async(req, res) => {
    reqInfo(req)
    let bodyData = req.body
    try{
        let responseData = {
            "status": true,         //if true => credit coins
            "message": "Transaction is approved",
            "data": {
                "status": "rejected",
                "phone": "999999999",
                "amount": 107,
                "type" : "payout",
                "utr": "4te453we45te435",
                "orderId": "TRA550310737040514236761475",
                "approvedAt": "2024-05-08T10:13:38.827Z"
            }
        }
        const password = '08b405b32ba7cb000382e0b12e054390fe39ad5e2b9d939fc931c0f6bf56b5e7';

        console.log("bodyData => ",bodyData);
        let body = encryptData(password, JSON.stringify(bodyData))
        console.log("body => ",body);
        let response = await axios.post("http://localhost:4000/paycials/payin", {...body})
        console.log("response => ",response);
        // return res.status(200).json(
        //     // {
        //     //     "status": false,
        //     //     "message": "Transaction is not approved",
        //     //     "data": {
        //     //         "status": "rejected",
        //     //         "phone": "999999999",
        //     //         "amount": 100,
        //     //         "utr": "4784947889",
        //     //         "orderId": "4N7847HFRK",
        //     //         "approvedAt": "2024-05-08T10:13:38.827Z"
        //     //     }
        //     // }
        //     {
        //         "status": false,
        //         "message": "Transaction not found",
        //     }
        // )
        // return res.status(400).json({BeneficiaryName : ["BeneficiaryName is not valid!"]})
        return res.status(200).json(new apiResponse(200, responseMessage?.getDataSuccess("response"), {}, {}))

    }catch(error){
        console.log("error",error);
    }
}


export const deposit_verification_payment_ss = async() => {
    try {
        // let body = {
        //     body : [
        //         {
        //             "date": new Date(),
        //             "particulars": "yy5676",
        //             "cheque_reference_no": 45848484,
        //             "debit": 100,
        //             "credit": 210,
        //             "balance": 10000,
        //             "channel":  "IMPS", // IMPS
        //             "utr": "35r3w45", //21343243 ,  21343243
        //             "account_number" : 46545645646,
        //             "upiUtrId" : ""
        //         },
        //         {
        //             "date": new Date(),
        //             "particulars": "yy5676",
        //             "cheque_reference_no": 45848484,
        //             "debit": 100,
        //             "credit": 100,
        //             "balance": 10000,
        //             "channel":  "UPI", // IMPS
        //             "utr": "234wrf3453w5r3wr", //21343243 ,  21343243
        //             "account_number" : 46545645646,
        //             "upiUtrId" : ""
        //         },
        //         // {
        //         //     "date": new Date(),
        //         //     "particulars": "d54rr",
        //         //     "cheque_reference_no": 45848484,
        //         //     "debit": 158,
        //         //     "credit": 158,
        //         //     "balance": 10000,
        //         //     "channel":  "UPI", // IMPS
        //         //     "account_number" : 46545645646,
        //         //     "upiutrid" : "77845" //this deposit upi amount key for the 2000 
        //         // }
        //     ]
        // }
        let body = {
            "date": new Date(),
            "particulars": "d54rr",
            "cheque_reference_no": 45848484,
            "debit": 158,
            "credit": 158,
            "balance": 10000,
            "channel":  "UPI", // IMPS
            "utr" : "435r4wr54wr4w4rw33rw",
            "account_number" : 46545645646,
            "upiutrid" : "HT70LT8TY8S0"
        }
        
        const response = await axios.post("http://localhost:4000/statement/deposit/paymentss/verification", {...body}, {timeout : 20000})
        // const response = await axios.post("https://tes_api_dev.cloudd.live/statement/deposit/paymentss/verification", {...body}, {timeout : 20000})
        // const response = await axios.post("https://tes-api-uat.cloudd.live/statement/deposit/paymentss/verification", {body}, {timeout : 20000})
        console.log("response => ",response);
    } catch (error) {
        console.log(error);
    }
}

export const aeps_response = async() => {
    try{
        let body = {
            "tx_status": 0,
            "amount": 120.0,
            "payment_mode": "5",
            "txstatus_desc": "SUCCESS",
            "fee": 5.0,
            "gst": 0.76,
            "sender_name": "Flipkarti",
            "tid": 12971412,
            "beneficiary_account_type": null,
            "client_ref_id": "TRA525037096489188376670322",
            "old_tx_status": 2,
            "old_tx_status_desc": "Initiated",
            "bank_ref_num": "87694239",
            "ifsc": "SBIN0000001",
            "recipient_name": "Virender Singh",
            "account": "234243534",
            "timestamp": "2019-11-01 18:03:48"
        }
        const response = await axios.post("http://localhost:4000/admin/payment/gateway/payout/response", {...body}, {timeout : 20000})
        console.log("reponse ", response);
    }catch(error){
        console.log(error);
    }
}

export const wizpay_status_check = async(req,res) => {
    reqInfo(req)
    let {id} = req.params
    try{
        console.log("id => ",id);
        return res.status(200).json(
            {
                "merchantOrderID": "TRA802797249734806862357708",
                "refID": "5046ca93-dc65-414e-b1ac-7443d16a2a55",
                "type": "payin",
                "paymentStatus": "approved",
                "approvedBy": "user",
                "createdAt": "2024-06-11T21:52:40.000Z",
                "updatedAt": "2024-06-11T21:53:28.000Z",
                "amount": 1000,
                "customerUPIID": "",
                "returnUrl": "https://api.paycorrect.fun/user/deposit/?id=ZIUtWQXM4",
                "utr": "416346715147",
                "vendor": "tesadmin",
                "website": ""
            }
        )
    }catch(error){
        console.log(error);
    }
}

export const withdraw_callback = async() => {
    try{
        let body = {
            "type":	"payin",
            "amount": 300,
            "orderId" : "TRA689260713722635591520990",
            "utr" :	"rishad@okicici-approved",
            "status": "approved"
        }
        const response = await axios.post("http://localhost:4000/deposit/payout", {...body}, {timeout : 20000})
        console.log("response => ",response);
    }catch(error){
        console.log(error);
    }
}

export const paycials_payout_request = async(req, res) => {
    let body = req.body, {id} = req.params
    try {
        console.log('body => ',body);
        console.log('clientId => ',id);
        const password = '08b405b32ba7cb000382e0b12e054390fe39ad5e2b9d939fc931c0f6bf56b5e7';
        let data = await decryptData(password, body)
        console.log("data => ",data);
        if(data.orderId){
           return await paycials_payOut_callback(req, res)
        }
        return res.status(200).json({
            "status": true,
            "message": "Payout request created successfully",
            "data": {
                "amount": 10,
                "clientId": "663f81a51cc70ff140ced8dc",
                "orderId": "CFO9327M8989896",
                "receipt": "E5TVO1722417030859"
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const paycials_payOut_status_check = async(req,res) => {
    reqInfo(req)
    let {id} = req.params
    try{
        console.log("id => ",id);
        return res.status(400).json(
            {
                "status": true,         //if true => credit coins
                "message": "Transaction is approved",
                "data": {
                    "status": "approved",
                    "phone": "999999999",
                    "amount": 100,
                    "utr": "",
                    "orderId": "4N7847HFRK",
                    "approvedAt": "2024-05-08T10:13:38.827Z"
                }
            }
        )
    }catch(error){
        console.log(error);
    }
}

export const paycials_payOut_callback = async(req, res) => {
    // reqInfo(req)
    // let {id} = req.params
    let body = req.body
    try{
        // console.log("id => ",id);
        const password = '08b405b32ba7cb000382e0b12e054390fe39ad5e2b9d939fc931c0f6bf56b5e7';
        let newData = await decryptData(password, body)
        let data = {
                "status": "rejected",
                "phone": "999999999",
                "amount": newData.amount,
                "utr": "",
                "orderId": newData.orderId,
                "approvedAt": "2024-05-08T10:13:38.827Z"
        }
        let response = await encryptData(password, data)
        console.log("response => ",response);

        let reponse = await axios.post("http://localhost:4000/paycials/payout", {...response}, {timeout : 60000})
        console.log("reponse = ",reponse);
    }catch(error){
        console.log(error);
    }
}

const algorithm = 'aes-256-cbc';
const password = '08b405b32ba7cb000382e0b12e054390fe39ad5e2b9d939fc931c0f6bf56b5e7';

export const encrypt = (text: string): { iv: string; encryptedData: string } => {
    const key = crypto.scryptSync(password, 'salt', 32);
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return { iv: iv.toString('hex'), encryptedData: encrypted };
}

export const decryptData = (encryptionKey, encryptedObj) => {
    const keyBuffer = Buffer.from(encryptionKey, 'hex');
    const ivBuffer = Buffer.from(encryptedObj.iv, 'hex');
    // console.log("keyBuffer => ",keyBuffer);
    // console.log("ivBuffer => ",ivBuffer);
    const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, ivBuffer);
    // console.log("decipher => ",decipher);
    let decrypted = decipher.update(encryptedObj.encryptedData, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    console.log(JSON.parse(decrypted))

    return JSON.parse(decrypted);
};

const encryptData = (encryptionKey, data) => {
    const iv = crypto.randomBytes(16);
    const keyBuffer = Buffer.from(encryptionKey, "hex");
    const cipher = crypto.createCipheriv("aes-256-cbc", keyBuffer, iv);
    let encrypted = cipher.update(JSON.stringify(data), "utf-8", "hex");
    encrypted += cipher.final("hex");
    return {
      iv: iv.toString("hex"),
      encryptedData: encrypted,
    };
};