var selectedRow = null
var store1,store2,store3,store4;
let localData=JSON.parse(localStorage.getItem('userData'));

var insertbool=true;
var editID=null;

function onFormSubmit() {
    
    if (validate()) {
        var formData = readFormData();
        // if (selectedRow == null){
            console.log("initialBool1",insertbool);

            if(insertbool){
                insertNewRecord(formData);
            }
            else{
                console.log("initialBool2 Else",insertbool);
                updateRecord(formData);
            }

        // }
       
        resetForm();
    }
}

//
// let form =document.getElementById("form");
// console.log(form);
// form.addEventListener('submit',(e)=>{
//     console.log(e);
// })

function validate() {
    isValid = true;
    if (document.getElementById("lastname").value == "") {
        isValid = false;
        alert("Lastname  is mandatory* Please Fill this to sumbit")
        // document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        // document.getElementById("employeeList").hidden=false;
        // if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
        //     document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


var temp;


//to get local storage data 
  window.onload = function() {
   let mytable= document.getElementById("tablebody");

if(localStorage.getItem("userData")!==null){
    const getlocalarray=JSON.parse(localStorage.getItem("userData"));
    console.log("Store array:"+JSON.stringify(getlocalarray));
    userData=getlocalarray;
    console.log("After set:"+JSON.stringify(userData));
}
    


        let html='';
		for(let k in userData){
			html=html+`<tr><td>${userData[k].firstname}</td>
            <td>${userData[k].lastname}</td>
            <td>${userData[k].email}</td>
            <td>${userData[k].city}</td>
            <td> <a onClick="onEdit(${k})"><b>Edit</b></a>&emsp;&emsp;
            <a onClick="onDelete(${k})"><b>Delete</b></a></td>
            </tr>`;
		}
        // console.log(html)
		document.getElementById("tablebody").innerHTML=html;
        //loop
        // for(var i=1;i<4;i++){
        //     var tr=document.createElement('tr');
        //     var td1=document.createElement('td');
        //     var td2=document.createElement('td');

        //     var text1=document.createTextNode('td');
        //     var text2=document.createTextNode('td');
        //     td1.appendChild(text1);
        //     td2.appendChild(text2);

        //     tr.appendChild(td1)
        //     tr.appendChild(td2)

        //     table.appendChild(tr)


        // }



// temp=JSON.stringify(getlocalarray[0].firstname);
//     document.getElementById("firstname").value=localStorage.getItem("firstname");
//    document.getElementById("lastname").value = localStorage.getItem("lastName");
//    document.getElementById("email").value=localStorage.getItem("emailId");
//    document.getElementById("city").value=localStorage.getItem("cityName");


   

}

var userData=[]


function readFormData() {
    var formData = {};

    var localarray={store1,store2,store3,store4};
    formData["firstname"] = document.getElementById("firstname").value;
    // localStorage.setItem("userName",formData.firstname);
    formData["lastname"] = document.getElementById("lastname").value;
    // localStorage.setItem("lastName",formData.lastname);
    formData["email"] = document.getElementById("email").value;
    // localStorage.setItem("emailId",formData.email);
    formData["city"] = document.getElementById("city").value;
    // localStorage.setItem("cityName",formData.city);

    if(localStorage.getItem("userData")!==null){
        var data=JSON.stringify(formData)
        console.log("NewDATA:"+data)
        if(updateflag){
            console.log("its from update")

        }else{
            const getlocalarray=JSON.parse(localStorage.getItem("userData"));
            userData=getlocalarray;
            console.log("After set:"+JSON.stringify(userData));
        }
        
    }
    
    //
    if(!updateflag){
        userData.push(formData);
        console.log(userData);
        localStorage.setItem("userData",JSON.stringify(userData));
    }
   
    
    return formData;

    
}

function insertNewRecord(data) {
     var table= document.getElementById("employeeList");
    var newRow = table.insertRow(table.length);

       
    console.log("insertNewRecord")



    let html='';
    for(let k in userData){
        html=html+`<tr><td>${userData[k].firstname}</td>
        <td>${userData[k].lastname}</td>
        <td>${userData[k].email}</td>
        <td>${userData[k].city}</td>
        <td> <a onClick="onEdit(${k})"><b>Edit</b></a>&emsp;&emsp;
        <a onClick="onDelete(${k})"><b>Delete</b></a></td>
        </tr>`;
    }
    // console.log(html)
    document.getElementById("tablebody").innerHTML=html;




    // cell1 = newRow.insertCell(0);
    // cell1.innerHTML = data.firstname;

    // cell2 = newRow.insertCell(1);
    // cell2.innerHTML = data.lastname;

    // cell3 = newRow.insertCell(2);
    // cell3.innerHTML = data.email;

    // cell4 = newRow.insertCell(3);
    // cell4.innerHTML = data.city;

    // cell4 = newRow.insertCell(4);
    // cell4.innerHTML = `<a onClick="onEdit(this)"><b>Edit</b></a>&emsp;&emsp;
    //                    <a onClick="onDelete(this)"><b>Delete</b></a>`;


         }


function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

var updateflag=false;
var arredit;

function onEdit(td) {
    updateflag=true;
    editID=td;
    console.log("onEdit",td)

    const arrEdit=JSON.parse(localStorage.getItem("userData"));

    
    // selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = arrEdit[td].firstname;
    document.getElementById("lastname").value = arrEdit[td].lastname;
    document.getElementById("email").value = arrEdit[td].email;
    document.getElementById("city").value = arrEdit[td].city;

    insertbool=false;

    
    
}
function updateRecord(formData) {
    

    // selectedRow.cells[0].innerHTML = formData.firstname;
    // selectedRow.cells[1].innerHTML = formData.lastname;
    // selectedRow.cells[2].innerHTML = formData.email;
    // selectedRow.cells[3].innerHTML = formData.city;

    console.log("updateRecord:",editID)
    console.log("Update record for formdata:",formData)

    let localData= JSON.parse(localStorage.getItem('userData'))
    // console.log('oldData',localData)
     let updatedData = []
    for(let i=0; i<localData.length;i++){
        if(i == editID){
            // console.log('inside if old',localData[i])
            // console.log('inside if new',formData)

            updatedData.push(formData)
            console.log('updatedData',updatedData)
        }else{
            updatedData.push(localData[i]) // i check with length

        }
    }

    localStorage.setItem('userData',JSON.stringify(updatedData))
    location.reload();

    // localStorage.setItem("userData",JSON.stringify())
        // console.log("After Edit success: "+JSON.stringify(userData));
    // var arrupdate=JSON.parse(localStorage.getItem("userData"));
    // console.log(arrupdate)
    
    // console.log(html)
    // document.getElementById("tablebody").innerHTML=html;

   
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        // row = td.parentElement.parentElement;
        // document.getElementById("employeeList").deleteRow(row.rowIndex);
        // remove item from local storage
        // localStorage.removeItem("userData");
        const arr=JSON.parse(localStorage.getItem("userData"));
        arr.splice(td,1)
        localStorage.setItem("userData",JSON.stringify(arr))
        location.reload();

        
        // document.getElementById("employeeList").hidden=true;

        resetForm();
    }
}










