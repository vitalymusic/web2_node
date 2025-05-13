import $ from "jquery";

$(".openModal").click(()=>{
    $("#modal1").show();
})

$("p").css({
    border:"2px solid red",
    padding:"10px",
    marginTop:"20px"
})

$("p").on("dblclick",(e)=>{
    // $(e.target).hide();
    $(e.target).fadeOut(2000);

})
$("p").on("mouseenter",function(){
    $(this).toggleClass("alert")
})

$("h1").after(`
    <div class="data"></div>
`);
$("div.data").css({
    border:"2px solid red",
    // height:"30px"
})



$.get("https://jsonplaceholder.typicode.com/users/1/todos",(resp)=>{
    console.log(resp);
    let html = "";
    for(let item of resp){
        html+=`<p>${item.title}</p>`;
    }
    $("div.data").html(html);
})

