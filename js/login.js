
    $(function(){
        $("#account").focus(function(){
            var txt_value=$(this).val();
            $(this).addClass("focus");
            if(txt_value==this.defaultValue){
                $(this).val("");
                $("div.user1").css("border","1px solid #1296DB");
                $("#one").hide();
            }
        });
        $("#account").blur(function(){
            a=1;
            var txt_value=$(this).val();
            $(this).removeClass("focus");
            if(txt_value==""){
                a=0;
                $(this).val("帐号");
                $("div.user1").css("border","1px solid red");
                $("#one").show();
            }
        });
        var $password = $(".password");
        $("#password").focus(function(){
            var txt_value=$(this).val();
            if(txt_value==this.defaultValue){
                $(this).val("");
                $("div.user2").css("border","1px solid #1296DB");
                $("#password").attr("type","password");
                $("#tow").hide();
                
            }
        });

        $("#password").blur(function(){
            b=1;
            var txt_value=$(this).val();
            if(txt_value==""){
                $(this).val("密码");
                $("div.user2").css("border","1px solid red");
                $("#password").attr("type","text");
                b=0;
                $("#tow").show();
            }
        });

 });
    $('form').submit(function(){
        $('input.account').blur(); 
        r=a+b;
        if(r==2){
        return true; // 提交表单
        }else{
        alert("请完善你的输入信息");
        return false; // 阻止表单提交
        }
    });
