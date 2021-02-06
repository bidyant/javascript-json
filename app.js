var prv_btn=document.getElementById("prv_btn");
var lik_btn=document.getElementById("lik_btn");
var eml_btn=document.getElementById("eml_btn");
var dwn_btn=document.getElementById("dwn_btn");
var dwn_url=document.getElementById("dwn_url");
var cls_btn=document.getElementById("cls_btn");
var nxt_btn=document.getElementById("nxt_btn");
var ref_btn=document.getElementById("ref_btn");
var prf_btn=document.getElementById("prf_btn");
var mnu_btn=document.getElementById("mnu_btn");
var main_img=document.getElementById("main_img");
var p_name=document.getElementById("p_name");
var p_desc=document.getElementById("p_desc");
var eml_snd=document.getElementById("eml_snd");


ref_btn.addEventListener("click",()=>{
    window.location.reload();
});
dwn_btn.addEventListener("click",()=>{
   let src_img=document.querySelector("#content .card img");
   function download(uri, name) 
    {
        var link = document.createElement("a");
    }
    download(src_img.src,bidyant)
})


var pic=document.getElementById("pic");
var data;
function makerequest()
{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","data.json",true);
    xhr.responseType="text";     //to show text
    // xhr.responseType="document";  //for xml
    // xhr.setRequestHeader("content-type","text/json");
    xhr.onload=()=>{
        if(xhr.readyState===XMLHttpRequest.DONE) //also you can use 4
        {
            if(xhr.status===200)
            {
                //perfect
                //parse to js object
                data=JSON.parse(xhr.response);
                result(data);
            }
            else
            {
                //problem
                console.log("problem occured");
            }
        }
    };
    //sending http request
    xhr.send();
}
makerequest();
var i=0;
function result(info){
        main_img.src="./icons/giphy.gif";
        setTimeout(()=>{main_img.src=info[i].url},100);
        p_name.innerHTML=info[i].name;
        p_desc.innerHTML=info[i].desc;
        dwn_url.href=info[i].url;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
         if (reg.test(info[i].email) == false) 
            {
                eml_snd.href=info[i].email;
            }
            else
            {
                 eml_snd.href="mailto:"+info[i].email;
            }

}

function next_result(info)
{
     if(i+1 !=info.length)
    {
    i=i+1;
        main_img.src="./icons/giphy.gif";
        setTimeout(()=>{main_img.src=info[i].url},100);
        p_name.innerHTML=info[i].name;
        p_desc.innerHTML=info[i].desc;
        dwn_url.href=info[i].url;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
         if (reg.test(info[i].email) == false) 
            {
                eml_snd.href=info[i].email;
            }
            else
            {
                 eml_snd.href="mailto:"+info[i].email;
            }
    }
    else
    {
        alert("The end ! go backword");
    }
}
function prev_result(info)
{
    if(i!=0)
    {
    i=i-1;
        main_img.src="./icons/giphy.gif";
        setTimeout(()=>{main_img.src=info[i].url},100);
        p_name.innerHTML=info[i].name;
        p_desc.innerHTML=info[i].desc;
        dwn_url.href=info[i].url;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
         if (reg.test(info[i].email) == false) 
            {
                eml_snd.href=info[i].email;
            }
            else
            {
                 eml_snd.href="mailto:"+info[i].email;
            }
    }
    else
    {
        alert("please go forword");
    }
}
prv_btn.addEventListener("click",()=>{
    prev_result(data);
});
nxt_btn.addEventListener("click",()=>{
    next_result(data);
});
function like()
{
    console.log("object");
}
lik_btn.addEventListener("click",like);

prf_btn.addEventListener("click",()=>{
    alert("this feature will be added soon.");
});
mnu_btn.addEventListener("click",()=>{
    alert("this feature will be added soon.");
});
