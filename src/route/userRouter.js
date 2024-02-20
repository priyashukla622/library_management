const express=require("express")

const router=express.Router()

const {signup, login}= require('../controlles/userControllers');
const  addUser=require("../controlles/addUser")
const  addBook=require("../controlles/addBook")
const  viewUser=require("../controlles/viewsUser")
const  viewBook=require("../controlles/viewsBook")
const  deleteBook=require("../controlles/deleteBook")
const  deleteUser=require("../controlles/deleteUser")
const  editUser=require("../controlles/editUser")
const  editBook=require("../controlles/editBook")
const  issueBook=require("../controlles/issueBook")
const  returnBook=require("../controlles/returnBook")




router.post('/signup', signup);
router.post('/login', login);
// router.post("/addBook",addBook.addBook)
router.post("/addBook",addBook.addBook)
router.post("/addUser",addUser.addUser)
router.get("/viewUser",viewUser.viewUser)
router.get("/viewBook",viewBook.viewBook)
router.delete("/deleteBook",deleteBook.deleteBooks)
router.delete("/deleteUser",deleteUser.deleteUser)
router.post("/editUser",editUser.editUser)
router.post("/editBook",editBook.editBook)
router.post("/issueBook",issueBook.issueBook)
router.post("/returnBook",returnBook.returnBook)
module.exports=router;