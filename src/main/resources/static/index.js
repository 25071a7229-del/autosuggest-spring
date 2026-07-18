// alert("hello from js")
console.log("hello from js")
var users=[
{
    "name":"john doe",
    "gender":"male",
    "img":"john.png"
},
{
    "name" : "jane doe",
    "gender" : "female",
    "img" : "jane.png"
}
]
 
var id=0;
function toggleUser(){
    id=(id+1)%2

    var userimage = document.getElementById("user-image");
    userimage.src= users[id].img;
    var username=document.getElementById("user-name");
    username.innerHTML=users[id].name;
    var usergender = document.getElementById("user-gender");
    usergender.innerHTML = users[id].gender;

}