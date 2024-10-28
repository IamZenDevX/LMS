# LMS
Library Management System
# Introduction:

This project is a Library Management System meant to handle book, user, and transaction processing inside a library efficiently. This system offers consistent handling of library data, user roles, and borrowing transactions, designed to showcase CRUD tasks spanning many database formats and database connections.

# Key Features :

- **User Management:** Track user information utilizing fields for user type, personal information, administrative tasks including staff members as well as library visitors.
- **Book Management:** Title, alternate titles, author, categories, publisher, and current availability assist you to precisely manage book records.
- **Book Categories:** Sort books in groups so that they may be easily accessed and controlled from one another.
- **Transactions:** Record book borrow and return transactions completely including due dates, return status, and transaction types.

## **AVAILABLE API:**

| **Name** | **HTTP Method** | **Endpoint** | **Requirements** |  |
| --- | --- | --- | --- | --- |
| **Registration** | POST | http://localhost:4545/auth/register | Request Body: usertype:string, userfullname:string , admissionId:string,employeeId:string,age:number,gender:string,dob:Date,isadmin:Boolean,address:string,mobilenumber:string,email:String,password:string,points:number |  |
| **Login** | PUT | http://localhost:4545/auth/signin | Request Body : email:string, password:string |  |
| **Get User** | GET | http://localhost:4545/user/getuser/id/:id | Request Params: `id:string` |  |
| **Delete user** | DELETE | http://localhost:4545/user/deleteuser/id/:id | Request Params: `id:string` |  |
| **Update User** | PUT | http://localhost:4545/user/updateuser/id/:id | Request Params: `id:string`Request Body:usertype:string, userfullname:string , admissionId:string,employeeId:string,age:number,gender:string,dob:Date,isadmin:Boolean,address:string,mobilenumber:string,email:String,password:string,points:number |  |
| **Create a BookCategory** | POST | http://localhost:4545/bookcategory/addbookcat |  Request Body:`categoryname: string,` |  |
| **Get Book Category** | GET | http://localhost:4545/bookcategory/getcat | Reuest Params : id:string |  |
| **Create a Book** | POST | http://localhost:4545/book/addbook | Request Body: `poid: string, item:`     bookname:string,
  alternatetitle:string,
  author:string,
  language:string,
  categorie:objid → Category,
  publisher:string,
  bookcountavailable:number,
  bookstatus:  string,
  transactions:objid →Transaction |  |
| **Create a Book Transaction** | POST | http://localhost:4545/booktarnasction/addbooktran | Request Body: isadmin:boolean,
bookId:Number,
borrowerId:Number ,booknam:string,
borrowername: string,
transactiontype:string,
fromdat:Date,
todate:Date,
returndate:Date,
transactionStatu:  string |  |

## **Tools Used:**

![Zendevx Technology.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/08d9df57-b114-4701-bd1c-89548cd3661c/Zendevx_Technology.png)

## Testing Tools Used:

![PostMan Github.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/0d6d1c89-f506-4ac0-8d04-9f5ff3d35244/PostMan_Github.png)

### **Library:**

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- jsonwebtoken
- moment
- mongoose
- nodemon
- validator

## 1. **Database Structure**

The platform will require a relational database to manage Purchase Order and Items . Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) User

| **Field Name** | **Type** |
| --- | --- |
| usertype | String |
| userfullname | String |
| admissionId | String |
| employeeId | String |
| age | Number |
| gender | String |
| dob | Date |
| isadmin | Boolean |
| address | String |
|  mobilenumber | Number |
| email | String |
| password | String |
| points | Number |

### b) Book

| **Field Name** | **Type** |
| --- | --- |
| bookname | String |
| alternatetitle | String, |
| author | String, |
| language | String, |
|  categories | Ref. Object → bookcategory |
| publisher | String |
| bookcountavailable | String |
| bookstatus | String |
|  transactions | Ref. Object → booktransaction |

### c) BookCategory

| **Field Name** | **Type** |
| --- | --- |
| categoryname | String |
| book | Ref. Object → Book |

### d) bookTransaction

| **Field Name** | **Type** |
| --- | --- |
| bookId | String |
| borrowerId | String |
| bookname | String |
| transactiontype | String |
| fromdate | Date |
| todate | Date |
| returndate | Date |
| transactionstatus | String |

## Use Cases

1. **User Registration and Management**
    - **Add/Update/Delete Users**: User registration and administration allows you to register, change, or delete fresh system users.
    - **User Roles**: Assign roles—normal or administrative user—then exercise user rights.
2. **Book Management**
    - **Add/Update/Delete Books**: add new books, change existing entries, or delete old ones.
    - **Search Books**: Search author; book names, genre; availability; classification;
3. **Category Management**
    - See here a list of every book falling within a particular category: ** Sort books** according to **category**.
4. **Borrowing and Returning Books**
    - **Initiate Borrowing**: Note a fresh borrowing transaction and adjust the book's availability state.
    - **Return Book**: Record the return, note the transaction as whole, then change availability.
5. **Transaction Management**
    - **View Transaction History**: Track borrowing and return history in Transaction Management using either user or book.
    - **Overdue Alerts**: Examine past-due records and, if needed, notify customers or apply penalties.

# **Development with ZenDevx:**

!https://private-user-images.githubusercontent.com/185465554/377859615-7dd7220f-e83c-4490-9ac2-beab3bcf8c35.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjk4NTU4MTEsIm5iZiI6MTcyOTg1NTUxMSwicGF0aCI6Ii8xODU0NjU1NTQvMzc3ODU5NjE1LTdkZDcyMjBmLWU4M2MtNDQ5MC05YWMyLWJlYWIzYmNmOGMzNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAyNVQxMTI1MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MTM5MDBiZWYxYWNiYmMyMjYxMDZlYmJlY2I1Y2Q1ZGRiNzQyYjNlMjMwNTQ0NTE4OTI5ZWQ2YTdjM2FiNmRiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.RHfvv2w5at_ha1mH5CMqUhMod2CYy4hWaaJki-WUIvI

# **🐦 Connect With Me:**

           

![download (1).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/90e12aba-9757-4c54-ab2d-9357fddb8a83/download_(1).png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/23afd96a-1373-48f9-b3ea-d10ed0b03463/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/decfc413-8d87-4ea1-9982-958d8f7dc958/image.png)

I hope you like the project. Thanks for reading :)
