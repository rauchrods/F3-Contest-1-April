let namev = document.querySelector("#name");
let profession = document.querySelector("#profession");
let age = document.querySelector("#age");

let adduserbtn = document.querySelector("#adduder");

let statusmsg = document.querySelector(".status-msg");

let Users = [];


adduserbtn.addEventListener("click", ()=>{
    // console.log("yo");

    // console.log( namev.value);
    // console.log( profession.value);
    // console.log( age.value);
    
    if(namev.value=="" || profession.value=="" || age.value=="" ){
        // console.log("hi");
        statusmsg.innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !"
        statusmsg.style.color ="#FF4343";
        statusmsg.style.display = "block";
    }

    else{
        statusmsg.innerHTML = "Success : Employee Added!"
        statusmsg.style.color ="#43FF78";
        statusmsg.style.display = "block";

      
        let user = {
            id: Users.length+1,
            name: namev.value,
            profession: profession.value,
            age: age.value
        }
        

        Users.push(user);
        namev.value = "";
        profession.value = "";
        age.value = "";
        console.log(Users);

        printUsers();
        alert("User added sucessfully");
    }
});

function printUsers(){
    let str="";
    for(let user of Users){
      str+=`
      <div class="emp-card">
      <div class="details">
          <span>${user.id}.</span>
          <span>Name: ${user.name}</span>
          <span>Profession: ${user.profession}</span>
          <span>Age: ${user.age}</span> 
      </div>
      <button id="del-user-btn" onclick="deleteUser(${user.id})">Delete User</button>
      </div>
      `
    };

    document.querySelector(".emp-li-container").innerHTML = str;
}

function deleteUser(del_id){
    for(let i = 0; i < Users.length; i++){
        if(Users[i].id == del_id){
            Users.splice(i, 1);
        }
    }
    let newid=1;
    for(let user of Users){
        user.id = newid;
        newid++;
    }
    console.log(Users);
    printUsers();
    alert("User deleted sucessfully");
}