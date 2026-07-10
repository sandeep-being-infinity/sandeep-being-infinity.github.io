// alert("Hello from JS");
console.log("Hello from JS");

var users = [
    { name: "John Doe", gender: "Male", image: "john.png"},
    { name: "Jane Doe", gender: "Female", image: "jane.png"},
];

var curSelectedIdx = 0;

var btnToggle = document.getElementById("btn-toggle");
var userImage = document.getElementById("user-image");
var userName = document.getElementById("user-name");
var userGender = document.getElementById("user-gender");

btnToggle.addEventListener("click", function () {
    // curSelectedIdx = 1 - curSelectedIdx;
    curSelectedIdx = (curSelectedIdx + 1) % users.length;
    var curObj = users[curSelectedIdx];
    userImage.src = curObj.image;
    userName.textContent = curObj.name;
    userGender.textContent = curObj.gender;
});

var btnRandomUser = document.getElementById("btn-random-user");
btnRandomUser.addEventListener("click", function(){

    fetch("https://randomuser.me/api/")
        .then(function(data){
            return data.json();
        })
        .then(function(jsonResponse){
            var curUserObject = jsonResponse.results[0];
            userImage.src = curUserObject.picture.large;
            userName.textContent = curUserObject.name.title + " " + curUserObject.name.first + " " + curUserObject.name.last;
            userGender.textContent = curUserObject.gender;
        });
});