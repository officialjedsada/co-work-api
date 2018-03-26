var express = require('express');
var router = express.Router();
var multer = require('multer');
var multers = multer();

var register_controller = require('../app/controllers/api/register/register_controller');
var reserve_status_controller = require('../app/controllers/api/reserve/reserve_stattus_controller');
var manage_users_controller = require('../app/controllers/api/manages/manage_users_controller');
var manage_coworking_controller = require('../app/controllers/api/manages/manage_coworking_controller');
var manage_room_controller = require('../app/controllers/api/manages/manage_room_controller');
var manage_admin = require('../app/controllers/api/manages/manage_admin_controller');
var forgot_password_controller = require('../app/controllers/api/register/forgot_password/forgot_password_controller');
var register_provider_controller = require('../app/controllers/api/register/register_provider_controller');
var upload_controller = require('../app/controllers/api/upload/upload_images_controller');
var send_confirm_controller = require('../app/controllers/api/send_email/confirm_register_controller');
var send_forgot_controller = require('../app/controllers/api/send_email/forgot_password_controller');
var login_controller = require('../app/controllers/api/login/login_controller');
var list_cowork_controller = require('../app/controllers/api/list_cowork/list_cowork_controller');
var change_password_controller = require('../app/controllers/api/register/forgot_password/change_password_controller');


/* Api for register */
router.post('/register', multers.any(),register_controller.store);
router.post('/register/provider',  register_provider_controller.store);
router.get('/register/verify/:id', register_controller.verify);

/* Api for forgot password */
router.post('/register/forgot-password', multers.any(), forgot_password_controller.forgot_password);

/* Api for login */
router.post('/email-login', login_controller.email_login);
router.post('/facebook-login', login_controller.facebook_login);
router.post('/admin-login', login_controller.admin_login);

/* Api for file image upload */
router.post('/upload-image', upload_controller.upload);

/* Api for send email */
router.post('/send-email/confirm-singup', send_confirm_controller.index);
router.post('/send-email/forgot-password', send_forgot_controller.index);

/* Api change password */
router.post('/change-password', change_password_controller.index);

/* Api list co-work */
router.get('/list-cowork', list_cowork_controller.index);
router.post('/list-cowork', list_cowork_controller.store);
//router.post('/detail-cowork',multers.any(), list_cowork_controller.detail);

/* Api for provider */
router.post('/provider/contact',  register_provider_controller.get_contact);

/* Api for admin */
router.post('/admin/judgement-cowork', manage_admin.judgeMentCowork);
router.post('/admin/show-comment', manage_admin.showComment);
router.post('/admin/judge-comment', manage_admin.judgeMentComment);
router.post('/admin/approve/', manage_admin.approveCoWork);
router.get('/admin/co-work-list', manage_admin.showListCoWork);

/* Api for reserve */
router.post('/get-room', reserve_status_controller.index);

/* Api for select user data by user_id for admin and user {android} */
router.post('/admin/detail-user/', manage_admin.showUserDetail);

/* Api for manages */
router.get('/register', manage_users_controller.index);
router.get('/provider', manage_users_controller.get_provider);
router.post('/insert-room', reserve_status_controller.store);
router.get('/list-room', manage_room_controller.index);
router.delete('/register/delete/:id', manage_users_controller.delete);
router.delete('/register/delete-overall', manage_users_controller.delete_overall);
router.delete('/list-cowork/delete/:id', manage_coworking_controller.delete);
router.delete('/list-cowork/delete-overall', manage_coworking_controller.delete_overall);

module.exports = router;