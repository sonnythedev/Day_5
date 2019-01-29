/*** This is just an example of XmlHttpRequest object */


let url='https://jsonplaceholder.typicode.com/posts';


/*
"userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body"*/

function getPostDataXHR(){

const xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      //document.querySelector('#xhr_output').innerHTML=xhr.responseText;
      respArr=JSON.parse(xhr.responseText);
      let htmlOutput="";
      for(let i=0; i<respArr.length; i++){
          let eachPost=respArr[i];
          htmlOutput +="<div>User Id:" +eachPost.userId+"</div>";
          htmlOutput +="<div>Title:" +eachPost.title+"</div>";
          htmlOutput +="<div>Body:" +eachPost.body+"</div>";

          htmlOutput +="<hr/>";
       }

       document.querySelector('#xhr_output').innerHTML=htmlOutput;
     
    }
}

xhr.open("GET",url, true);
xhr.send();

}

function getPostDataFetch(){
    console.log(url);
    fetch(url)
    .then(
        resp=>{
            //console.log(resp.json());
            return resp.json();
        }
    )
    .then(
        data=>{
            console.log(data);
            respArr=data;
            let htmlOutput="";
            for(let i=0; i<respArr.length; i++){
                let eachPost=respArr[i];
                htmlOutput +="<div>User Id:" +eachPost.userId+"</div>";
                htmlOutput +="<div>Title:" +eachPost.title+"</div>";
                htmlOutput +="<div>Body:" +eachPost.body+"</div>";

                htmlOutput +="<hr/>";
            }

           document.querySelector('#xhr_output').innerHTML=htmlOutput;
        }
    )
    .catch(err=>document.querySelector('#xhr_output').innerHTML=err)

}

//getPostDataXHR();
getPostDataFetch();

