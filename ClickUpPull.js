//here we have the logic that drives the button
//it will pull information down from ClickUp based on ownership of tasks
//Currently it will require the list IDs


function pullClickup() {
    var clickupAuthKey = document.getElementById("clickupAuthKey").value;
    var request = new XMLHttpRequest();
    var testData = {};

    //In order to get a CORS passable answer for the browser window we have to use https://cors-anywhere.herokuapp.com/corsdemo in the browser, this allows us to make
    //use of the service temporarily.  Syntax is then 'https://cors-anywhere.herokuapp.com/'+'API Address here'
    request.open('GET', 'http://localhost:8080'+'/https://api.clickup.com/api/v2/user');
    
    request.setRequestHeader('Authorization', 'pk_48215650_NS1ZMBOG45FWMAKNKAWCEU7TQ7PE3DOD');
    console.log(request.getResponseHeader)
    
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
      }
    };
    
    request.send();	
    /*
    Try-catch block example
    try{
        console.log(clickupAuthKey);
    }
    catch(error) {

        console.log(error.message)

    }*/
    

}
console.log("test");
