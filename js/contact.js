function val()
{
   var email=document.getElementById("email").value
   var name=document.getElementById("name").value
   var sub=document.getElementById("sub").value
   var msg=document.getElementById("msg").value
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(name==null || name==""){
    alert('Please enter your correct name');


   }
 else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
        else if(sub==null || sub==""){
            alert('please enter your subject...it is required field');
        }

        else if(msg==null || msg==""){
            alert('message field is required please fill it');
        }
      else{
         alert('thank u for contacting us ..we will replay you soon');
      }


 
}