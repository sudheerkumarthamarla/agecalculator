document.addEventListener("DOMContentLoaded", function() {

    // Get DOM elements
    const dobInput = document.querySelector(".dob"); 
    const btn = document.querySelector(".btn");
    const result = document.querySelector(".final");
  
    
  
    function calculateAge() {
  
  
      const dobValue = dobInput.value;
      
     
      if(dobValue == "") {
        alert(" Please enter valid birthdate !");
        return;
      }
  
      // Calculate age
      const currDate = new Date();
      const birthDate = new Date(dobValue); 
      let age = currDate.getFullYear() - birthDate.getFullYear();
  
      const m = currDate.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && currDate.getDate() < birthDate.getDate())) {
          age--;
      }
  
      // Update result
      result.textContent = Your age is: ${age} years ${m} months old;
  
    }
  
    // Attach event listener
    btn.addEventListener("click", calculateAge);
  
  });