//starting for todo
let url=`http://localhost:3000/task`;
let response=fetchData(url);
response.then((res)=>{
    console.log(res);
    res.forEach(element => {
        displayData(element);
    });
    // this function is for show data  in when call dispaly function
}).catch((err)=>{
    console.log(err,"Error in showing data data");
})




// this function is for  function fetch data

async function fetchData(url){
   try {
    let res=await fetch(url);
    let data=res.json();
    return data;

   } catch (error) {
       console.log(error,"Error in fatching data");
       
   }

}

// this function is for  create display function

function displayData(data){

    let card=document.createElement("div");
    card.id="card";

    let title=document.createElement("p");
    title.textContent=data.title;
   
    if(data.status){
        title.color="red";
        
    }
    
    let status=document.createElement("input");
    status.type = "checkbox";
    status.checked =data.status;

    let editbtn=document.createElement("button");
    editbtn.textContent="Edit";
    editbtn.onclick= async function(){
        try {
            let data= await fetch(`http://localhost:3000/task/${data.id}`);
            let tempdata=data.json();
         localStorage.setItem("tempData",JSON.stringify(tempdata));

        
            
        } catch (error) {
            console.log(error, "UPDATE Error");
        }

        alert("Update Sucessfull")
     }
     //this function is for update

    let deletebtn=document.createElement("button");
    deletebtn.textContent="Delete";
    deletebtn.onclick=async function(){
        try {
         let res=await fetch(`http://localhost:3000/task/${data.id}`,{
             method:"delete"
         });
         // this function is for updateDom();
            
        } catch (error) {
            console.log(error, "Delete Error");
        }

        alert("Delete Sucessfull")
     }

    card.append(title,status,editbtn,deletebtn);
    document.querySelector("#container").append(card);

}

// this function is for function add item

function addItem (){

    console.log("Hello");
    let title=document.createElement("input");
    title.id="title-item";

    let status=document.createElement("input");
    status.type="checkbox";
    status.id="status-item";

    let add=document.createElement("button");
    add.textContent="Add Item";
    add.id="add";
    add.onclick=function(){
    
}
    document.querySelector("#item-add").append(title,status,add);
}
