function validation()
{
   var email=document.getElementById("email").value
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}

      else{
         alert('you have subscribe successfully');
      }


 
}