
let insertbool = true; // for knowing new record creation or edit a record
let editID = null;
let userData = [];
let updateflag = false; // used for when edit starts

function onFormSubmit() {
    if (validate()) {
        const formData = readFormData();
        if (insertbool) { insertNewRecord() }
        else { updateRecord(formData) }
        resetForm();
    }
}

function validate() {
    let isValid = false;
    if (document.getElementById("lastname").value == "") {
        alert("Lastname  is mandatory* Please Fill this to sumbit")
    } else if (document.getElementById("firstname").value == "") {
        alert("Firstname  is mandatory* Please Fill this to sumbit")
    } else if (document.getElementById("email").value == "") {
        alert("Email  is mandatory* Please Fill this to sumbit")
    } else if (document.getElementById("city").value == "") {
        alert("City  is mandatory* Please Fill this to sumbit")
    } else {
        isValid = true;
        // document.getElementById("employeeList").hidden=false;
        // if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
        // document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

//to get local storage data 
window.onload = function() {
    if (localStorage.getItem("userData") !== null) {
        const getlocalarray = JSON.parse(localStorage.getItem("userData"));
        userData = getlocalarray;
        console.log("After set:"+JSON.stringify(userData));
    }
    insertNewRecord();
}

function readFormData() {
    let formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["email"] = document.getElementById("email").value;
    formData["city"] = document.getElementById("city").value;

    if (localStorage.getItem("userData")!== null) {
        const data = JSON.stringify(formData)
        console.log("NewDATA:"+data)
        if (!updateflag) {
            const getlocalarray = JSON.parse(localStorage.getItem("userData"));
            userData = getlocalarray;
            console.log("After set:"+JSON.stringify(userData));
        }
    }
    
    if (!updateflag) {
        userData.push(formData);
        localStorage.setItem("userData", JSON.stringify(userData));
    }
    return formData;
}

function insertNewRecord() {
    let html = '';
    for (let k in userData) {
        html = html+`<tr><td>${userData[k].firstname}</td>
        <td>${userData[k].lastname}</td>
        <td>${userData[k].email}</td>
        <td>${userData[k].city}</td>
        <td> <a onClick="onEdit(${k})"><b>Edit</b></a>&emsp;&emsp;
        <a onClick="onDelete(${k})"><b>Delete</b></a></td>
        </tr>`;
    }
    document.getElementById("tablebody").innerHTML=html;
}


function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
}

function onEdit(td) {
    updateflag = true;
    editID = td;
    console.log("onEdit",td)

    const getStoreData=JSON.parse(localStorage.getItem("userData"));
    document.getElementById("firstname").value = getStoreData[td].firstname;
    document.getElementById("lastname").value = getStoreData[td].lastname;
    document.getElementById("email").value = getStoreData[td].email;
    document.getElementById("city").value = getStoreData[td].city;
    insertbool = false;   
}

function updateRecord(formData) {
    console.log("updateRecord:",editID);
    let localData = JSON.parse(localStorage.getItem('userData'));
    let updatedData = [];
    for (let i = 0; i < localData.length; i++) {
        if (i === editID) {
            updatedData.push(formData);
        } else {
            updatedData.push(localData[i]) // i check with length
        }
    }

    localStorage.setItem('userData', JSON.stringify(updatedData));
    location.reload();  
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        const data = JSON.parse(localStorage.getItem("userData"));
        data.splice(td, 1);
        localStorage.setItem("userData", JSON.stringify(data));
        location.reload();
        resetForm();
    }
}










