function ShowEmployeeDetails(){
    //name
    var name=document.getElementById("name").value;
   

    //age
    var age=document.getElementById("age").value;

    //gender
    var radios = document.getElementsByName('gender');
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    
    //address
    var empAddress=document.getElementById("address").value;
    console.log(empAddress);

    //dept
    var cb_1 = document.getElementById("myCheck1");  
    var cb_2 = document.getElementById("myCheck2"); 
    var cb_3 = document.getElementById("myCheck3");  
    var cb_4 = document.getElementById("myCheck4");  

    //position selection using dropdown 
    var selection=document.getElementById("select").value;
    console.log(selection);
      
    //fsd using radio
    var fsd = document.getElementsByName('FSD');
    var yes=document.getElementById("yes");
    var no=document.getElementById("no");
         
    var deptcheckbox=false;

    if((cb_1.checked==true && cb_2.checked==true &&
      cb_3.checked==true && cb_4.checked==true) || 
      (cb_1.checked==true && cb_2.checked==true &&
         cb_3.checked==true) || (cb_3.checked==true && cb_2.checked==true) 
         || (cb_2.checked==true && cb_3.checked==true && cb_4.checked==true) ||
         (cb_2.checked==true && cb_3.checked==true) || (cb_3.checked==true && cb_4.checked==true)
         || (cb_1.checked==true && cb_3.checked==true && cb_4.checked==true) ||
         (cb_1.checked==true && cb_2.checked==true) || (cb_1.checked==true && cb_3.checked==true) 
         || (cb_2.checked==true && cb_4.checked==true) || (cb_1.checked==true && cb_4.checked==true)){
             alert("Please Choose one Department")
             deptcheckbox=false;
      }
      else{
         deptcheckbox=true;
      }

    if(name!="" && age!="" && (male.checked || female.checked) && empAddress!="" && 
    (cb_1.checked || cb_2.checked || cb_3.checked || cb_4.checked) && deptcheckbox==true && selection!="" &&
    yes.checked || no.checked){
      //for hiding error text when data is there
      document.getElementById("name-error").hidden=true;
      document.getElementById("age-error").hidden=true;
      document.getElementById("gender-error").hidden=true;
      document.getElementById("address-error").hidden=true;
      document.getElementById("dept-error").hidden=true;
      document.getElementById("role-error").hidden=true;
      document.getElementById("fsd-error").hidden=true;



      document.getElementById("nameresult").innerHTML=name;
      document.getElementById("ageresult").innerHTML=age;

   //    for (var radio of radios)
   //  {
        if (male.checked) {
            document.getElementById("genderresult").innerHTML=male.value;
        }else if(female.checked){
         document.getElementById("genderresult").innerHTML=female.value;
        }
   //  }

      document.getElementById("addressresult").innerHTML=empAddress;

      
      
         if(cb_1.checked==true){
            document.getElementById("deptresult").innerHTML=cb_1.value;
            console.log(cb_1.value);
         }else if(cb_2.checked==true){
            document.getElementById("deptresult").innerHTML=cb_2.value;
         }else if(cb_3.checked==true){
            document.getElementById("deptresult").innerHTML=cb_3.value;
         }else if(cb_4.checked==true){
            document.getElementById("deptresult").innerHTML=cb_4.value;
         }


         document.getElementById("selectresult").innerHTML=selection;

         for (var dev of fsd)
         {
            if (dev.checked) {
            document.getElementById("fsdresult").innerHTML=dev.value;
        }
    }


    }else{

      if(name.length==0){
         document.getElementById("name-error").style.color="red";
         document.getElementById("name-error").innerHTML="*Name  is required";
      }else{
         document.getElementById("name-error").hidden=true;
      }

      if(age==""){
         document.getElementById("age-error").innerHTML="*Age is required";
      }else{
         document.getElementById("age-error").hidden=true;
      }

      if(male.checked==false && female.checked==false){
         document.getElementById("gender-error").innerHTML="*Select a gender";
      }else{
         document.getElementById("gender-error").hidden=true;
      }

      if(empAddress==""){
         document.getElementById("address-error").innerHTML="*This field is required";
      }else{
         document.getElementById("address-error").hidden=true;
      }

      if(cb_1.checked==false && cb_2.checked==false && cb_3.checked==false && cb_4.checked==false){
         document.getElementById("dept-error").innerHTML="*Select One department"
      }else if((cb_1.checked==true && cb_2.checked==true && cb_3.checked==true && cb_4.checked==true) || 
         (cb_1.checked==true && cb_2.checked==true && cb_3.checked==true) ||
          (cb_3.checked==true && cb_2.checked==true) 
            || (cb_2.checked==true && cb_3.checked==true && cb_4.checked==true) ||
            (cb_2.checked==true && cb_3.checked==true) || (cb_3.checked==true && cb_4.checked==true)
            || (cb_1.checked==true && cb_3.checked==true && cb_4.checked==true) ||
            (cb_1.checked==true && cb_2.checked==true) || (cb_1.checked==true && cb_3.checked==true) 
            || (cb_2.checked==true && cb_4.checked==true) || (cb_1.checked==true && cb_4.checked==true))
      {
         document.getElementById("dept-error").innerHTML="*Select One department"
      }
      else{
         document.getElementById("dept-error").hidden=true;
      }

      //dropdown selection empty check
      if(selection==""){
         document.getElementById("role-error").innerHTML="*Please select your role"
      }else{
         document.getElementById("role-error").hidden=true;
      }

      if(yes.checked==false && no.checked==false){
         document.getElementById("fsd-error").innerHTML="*This field is required"
      }else{
         document.getElementById("fsd-error").hidden=true;
      }


   }

}

function removeData(){
//    document.getElementById("name").value="";
//    document.getElementById("age").value="";
//    document.getElementById("male").checked="";
//    document.getElementById("female").checked="";
//    document.getElementById("address").value="";
//    document.getElementById("myCheck1").checked="";
//    document.getElementById("myCheck2").checked="";
//    document.getElementById("myCheck3").checked="";
//    document.getElementById("myCheck4").checked="";
//    document.getElementById("select").value="";
//    document.getElementById("yes").checked="";
//    document.getElementById("no").checked="";


   document.getElementById("nameresult").innerHTML="";
   document.getElementById("ageresult").innerHTML="";
   document.getElementById("genderresult").innerHTML="";
   document.getElementById("addressresult").innerHTML="";
   document.getElementById("deptresult").innerHTML="";
   document.getElementById("selectresult").innerHTML="";
   document.getElementById("fsdresult").innerHTML="";
      
}