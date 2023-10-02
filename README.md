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
},{
    key:username, value:example User
},{
    key:fullName, value:full Name
},{
    key:password, value:#password
},{
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



