# secureFileSharing


How to run file

download zip file
extract zip file in your sytem
open file in VS code
open terminal in Vs code
run command npm i
run command nodemon index.js
How to call API

open PostMan Application and try running these commands

for signup http://localhost:8000/signup method: POST{
{
    key:email, value:example@gmail.com
},

{
    key:username, value:example User
},

{
    key:fullName, value:full Name
},

{
    key:password, value:#password
},

{
    key:confirmPassword, value:#password
}

}

for login localhost:8000/login method: GET{
    {
    key:email, value:example@gmail.com
},
   
{
    key:password, value:password
}
}

for upload the file localhost:8000/upload/file method: POST{
    key:browse , value: file Location
}

for sharing the file localhost:8000/upload/dump fileBox{
    key :email,value: email or username of receiver
}

#ScreenShots


1.Login
![image](https://github.com/Rushikeshsasamkar/MultiUser-File-Sharing-Nodejs/assets/44942941/6232c485-4348-4a85-a257-db3b1a032a50)


2. Sign-Up

   ![image](https://github.com/Rushikeshsasamkar/MultiUser-File-Sharing-Nodejs/assets/44942941/11b499df-117b-4153-9200-540106eb72f8)


3. upload the file

   ![image](https://github.com/Rushikeshsasamkar/MultiUser-File-Sharing-Nodejs/assets/44942941/2ea80949-ac65-4b37-b6e4-55d5d07e73cb)

   ![image](https://github.com/Rushikeshsasamkar/MultiUser-File-Sharing-Nodejs/assets/44942941/d0f99739-ab57-43df-9472-73769b19f298)

4. send the file:

   ![image](https://github.com/Rushikeshsasamkar/MultiUser-File-Sharing-Nodejs/assets/44942941/d762313e-ed1a-4106-8eb7-cc509075c41b)


