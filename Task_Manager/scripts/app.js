function saveTask(){
    console.log("saving...")
    //get values
    const title = $("#inputTitle").val();
    const description = $("#inputDescrition").val();
    const startData = $("#inputstartData").val();
    const Budget = $("#inputBudget").val();
    const Status = $("#inoutStatus").val();
    const color = $("#inputcolor").val();
    console.log(title,desc,startDate,budget,status,color);

    //biuld the object
    let x = new Task(title,desc,startDate,budget,status,color);
    console.log(task);




    //save to server
    $.ajax({
        type: "POST"
        url: "http://fsdiapi.azurewebsites.net/api/tasks/"  ,
        data: JSON.stringify(task)
        contentType: "application/json",
        success: function (response){
                console.log(response);
        },
        error: function(error)
        {
            console.log(error);
        }
    });


//display the task
}
function testRequest(){
    $.ajax({
        type: "GET",
        url:https:"//fsdiapi.azurewebsites.net/",
        success: function(response){
            console.log(response);
        },
        error: function(error)
        {
            console.log(error);
        }     

    });
}

function init(){
    console.log("This is a task manager");
    //load data

    
    //hook events
    $("#btnSave").click(saveTask);
    //document.getElementByID("btnSave")

}

windows.onload = init;
