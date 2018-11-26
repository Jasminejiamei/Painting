$(function(){
    console.log($('input[name=username]')[0]);
    $('input[name=username]').blur(function(){
            val=$(this).val(); // 获取用户名
            if(val.length==0){
            a=0;
            $(this).data({'num':0});
            $(this).next().show(); // 显示提示消息
            $("div.user1").css("border","1px solid red");
            }else{
            a=1;
            $(this).data({'num':1});
            $(this).next().hide(); // 隐藏掉提示信息
            $("div.user1").css("border","1px solid #1296DB");
            }
    });

    console.log($('input[name=username]')[0]);
    $('input[name=password]').blur(function(){
            val=$(this).val();//旧密码
            if(val.length==0){
            b=0;
            $(this).data({'num':0});
            $(this).next().show(); 
            $("div.user2").css("border","1px solid red");
            }else{
            b=1;
            $(this).data({'num':1});
            $(this).next().hide(); 
            $("div.user2").css("border","1px solid #1296DB");
            }
    });

    console.log($('input[name=nwepassword]')[0]);  
    $('input[name=nwepassword]').blur(function(){
            val=$(this).val(); //新密码
            if(val.length<6||val.length>12){
                c=0;
                $(this).data({'num':0});
                $(this).next().show();
                $("div.user3").css("border","1px solid red");
            }else{
                c=1;
                $(this).data({'num':1});
                $(this).next().hide();
                $("div.user3").css("border","1px solid #1296DB");
            }     
            });
    console.log($('input[name=surepassword]')[0]); 
    $('input[name=surepassword]').blur(function(){
        pwd=$('input[name=nwepassword]').val(); 
        repwd=$(this).val();//新密码确认 
            if(pwd!=repwd){
            d=0; 
            $(this).data({'num':0});
            $(this).next().show();
            $("div.user4").css("border","1px solid red");
            }else{
            d=1;
            $(this).data({'num':1});
            $(this).next().hide(); 
            $("div.user4").css("border","1px solid #1296DB");
            }
    });  
})

// 表单提交 
    $('form').submit(function(){
     $('input.auth').blur(); 
        r=a+b+c+d;
        if(r==4){
        alert("修改成功");
        return true; // 提交表单
        }else{
        alert("请完善你的输入信息");
        return false; // 阻止表单提交
        }
    });