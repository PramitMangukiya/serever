import { Router } from 'express'
import { adminController } from '../controllers'


const router = Router()

router.post("/new/deposit", adminController.new_deposit)
router.post("/new/withdraw", adminController.new_withdraw)
router.post("/deposit/update", adminController.deposit_update)
router.post("/withdraw/update", adminController.withdraw_update)
router.post("/deposit/rollBack", adminController.deposit_rollback_update)
router.post("/withdraw/details", adminController.withdraw_details)
router.post("/deposit/details", adminController.deposit_details)
router.post("/withdraw/verify", adminController.withdraw_Verify)
router.post("/withdraw/CheckBalance", adminController.withdraw_check_balance)
router.post("/user/verify/balance", adminController.user_withdraw_verify_balance)
router.post("/user/withdraw/details/:traId", adminController.get_withdraw_details_by_traId)
router.post("/upiDisbursment", adminController.upiDisbursment)
router.post("/payOut", adminController.bank_disbursment)
router.get("/getWalletBalance", adminController.get_wallet_amount_check)
router.post("/app/user/payout/systemAuthToken", adminController.phonipay_login)
router.get("/getStatus", adminController.acepy_status_check)
router.post("/app/user/payout/createSinglePayoutTransaction", adminController.phonipay_payout)
router.post("/ekoapi/v1/agent/user_code:user_code/settlement", adminController.aeps_payout)
router.post("/extracttext", adminController.deposit_bank_request)
router.post("/api/v1/orders", adminController.wizpay_upi_request)
router.get("/api/v1/orders/:id", adminController.wizpay_status_check)




router.post("/user/otp/verify", adminController.otp_verify)


router.post("/admin/add",adminController.add_booking)
router.post("/admin/edit",adminController.edit_booking_by_id)
router.delete("/admin/delete/:id",adminController.delete_booking_by_id)
router.post("/admin/get/all",adminController.get_all_booking)
router.get("/admin/:id",adminController.get_by_id_booking)
router.delete("/admin/delete",adminController.get_all_data_delete)
export const adminRouter = router


// website : { 
//     _id : 665aaae3bf06408a4b1be4b4
//     name : Playsta
//     url : [﻿uat.playstta.com](https://uat.playstta.com/) 
//     userType : website
//     uniqueId : WEB6537
// }
// traId : TRA224106898773933726704317
// commisionReceiverType : VENDOR / TES / PG
// commisionSenderType : VENDOR / AGENT / PG / TES
// commissionSender : {
//     _id: 65dcab940c891df78022a26a,
//     name: demoVendor,
//     userType: vendor
// }
// commissionReceiver : {
//     _id: 65dcab940c891df78022a26a,
//     name: wizpay,
//     userType: PG
// }
// commissionAmount : 100
// transactionType : withdraw/deposit,
// transactionCreatedAt : 2024-06-03T07:41:15.282Z
// transactionCompleteDate: 2024-06-03T07:41:15.282Z
// createdAt : 2024-06-03T07:41:15.282Z
// updatedAt : 2024-06-03T07:41:15.282Z




