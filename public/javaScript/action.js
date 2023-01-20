
$(document).ready(function(){
    console.log("hello");

    $("#addSubAdminFormId").on("submit",function(e){
        e.preventDefault();
        addSubAdminFun();
      })
  });

  function addSubAdminFun(){
    const name=$("#name").val();
    console.log("action.js "+name);
    $.ajax({
      url:"/admin/SuperAdminDashboard/addSubAdmin",
      method:"POST",
      data:{name},
      dataType:"json",
      contentType:"application/x-www-form-urlencoded",
      success:function(cb){
        console.log(cb.success);
        // newUL = '<li class="ms-5"><span><b>' +cb.docComment.commentedBy.firstName+"</b></span> - <span>"+ cb.docComment.date +"</span><br>"+"<span>"+cb.docComment.commentBody+ "</span></li>"+"<hr>";
        //   $("#ulId").append(newUL);
      }
    });
    // $("#commentFormId")[0].reset();
  }