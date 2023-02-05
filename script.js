// Adding Event Listener to Form Click Event, on button click blog will be submitted for review and form will reset.
const submitButton = document.querySelector("button");

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("Congratulations, Your Blog is successfully submitted for review");
    document.getElementById("myForm").reset();    
});

