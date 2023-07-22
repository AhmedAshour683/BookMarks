var siteName = document.getElementById("siteName")
var siteUrl = document.getElementById("siteUrl")

var container=[];

if(  localStorage.getItem("webSites") == null )
{
    container = [] ;
}
else
{
      container =  JSON.parse(localStorage.getItem("webSites")) ;

      display()
}

var regex = /^(https)/

function addRow()
{
if(regex.test(siteUrl.value))

{

    var oneSite = {
        theSiteName: siteName.value,
        theSiteUrl: siteUrl.value
    }

    var cycle=""
    if(  localStorage.getItem("webSites") !== null ) {

        
        

        for( var b=0;b<container.length;b++){

            cycle=(JSON.parse(localStorage.getItem("webSites")))[b].theSiteUrl==oneSite.theSiteUrl 
            if(cycle==true){
            break
            }
            }   
            
    }
    

        else{
           
            cycle=false
            console.log(localStorage.getItem("webSites") )
            console.log(cycle)
            console.log("hi from null")
           
        }
    

     if(cycle==false){
    container.push(oneSite)
    localStorage.setItem("webSites",JSON.stringify(container))

    clear()
    display()
    }

    else
    {
        window.alert("this Site Already Stored")
    }

}

else
{
    window.alert("!! URL Must Start with https")
}

}

function clear(){
    siteName.value=""
    siteUrl.value=""
}





function display()
{
    var getter =""

for (var i=0 ;i<container.length;i++) {


    getter+=`<tr>
    <td>${i}</td>
    <td>${container[i].theSiteName}</td>
    <td><button class="btn btn-success px-4"><a href="${container[i].theSiteUrl}" class="text-decoration-none text-white" target="_blank">Visit</a></button></td>
    <td><button onclick="deleteElement(${i})" class="btn btn-warning">Delete</button></td>
</tr>
`
}
document.getElementById("tbody").innerHTML=getter
}


function deleteElement(Pindex){
    container.splice(Pindex,1)
    localStorage.setItem("webSites",JSON.stringify(container))
    display()

}

