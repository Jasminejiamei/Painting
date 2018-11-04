// 弹出层 
        //添加账号，显示灰色 jQuery 遮罩层 
		$ (".button1").click(function(){
				var bh = $("body").height();
				var bw = $("body").width(); 
				$("#fullbg").css({ 
				height:bh, 
				width:bw, 
				display:"block" 
				}); 
				$("#dialog").show(); 
			})
		$('input[name=closeButton1]').click(function(){
				$("#fullbg,#dialog").hide(); 
			})

        //批量添加账号
		$ (".button2").click(function(){
				var bh = $("body").height();
				var bw = $("body").width(); 
				$("#fullbg").css({ 
				height:bh, 
				width:bw, 
				display:"block" 
				}); 
				$("#dialogSecond").show();
			}) 
		$('input[name=closeButton2]').click(function(){
				$("#fullbg,#dialogSecond").hide(); 
			})
		//文件名
		$ (".button4").click(function(){
			var bh = $("body").height();
			var bw = $("body").width(); 
			$("#fullbg").css({ 
			height:bh, 
			width:bw, 
			display:"block" 
			}); 
			$("#dialogname").show();
		}) 
		$('input[name=closeButton2]').click(function(){
			$("#fullbg,#dialogname").hide(); 
		})
	 
		//上传文件
		function setFilename(){
			var pictureFile = document.getElementById("pictureFile");
			pictureFile.click();
		}
		//编辑
		$(".write").click(function(){
			var bh = $("body").height();
				var bw = $("body").width(); 
				$("#fullbg").css({ 
				height:bh, 
				width:bw, 
				display:"block" 
				}); 
				$("#dialogDescribe").show();
			}) 
		$('input[name=closeButtonD]').click(function(){
				$("#fullbg,#dialogDescribe").hide(); 
			})

		//删除
		   $(function(){
				$("tbody>tr:odd").addClass("odd");
				$("tbody>tr:even").addClass("even");
			    //删除按钮点击事件
			    $(".delete").click(function(){
			     //获取按钮的父节点的父节点删除
			     $(this).parent().parent().remove();
			    });			    
			     $("tr").mouseenter(function(){
			     $(this).css({"opacity":1}).siblings().css({"opacity":1});
			    });
			     $("table").mouseleave(function(){
			     $("tr").css({"opacity":1});
			    });
<<<<<<< HEAD
=======
			    
>>>>>>> 62a3c6ba9867f0c3500cd27e105296b0f2fd3c1f
			   })

		

		//添加
		$(function() {
			$(".sureButtonadd").click(function() {
			var tr = "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
			//$("table").append(tr);
			$("table tr:eq(1)").before(tr);
			});
			});
<<<<<<< HEAD
		$('input[name=sureButtonadd]').click(function(){
			$("#fullbg,#dialog,#dialogSecond").hide(); 
			})
			   	
//备注
		$('.btnDropdown').click(function(){
			$('li').show();
		})
		$('.btnDropdown').blur(function(){
			$('li').hide();
		})

=======
			   	
			
>>>>>>> 62a3c6ba9867f0c3500cd27e105296b0f2fd3c1f
//表单认证
        $('input[name=username]').blur(function(){
                val=$(this).val(); // 获取用户名
                if(val.length==0){
                    a=0;
                    $(this).data({'num':0});
                    $(this).next().show(); // 显示提示消息
                    $("input[name=username]").css("border","1px solid red");
                }else{
                    a=1;
                    $(this).data({'num':1});
                    $(this).next().hide(); // 隐藏掉提示信息
                    $("input[name=username]").css("border","1px solid #c9cdc2");
                    }
              });

        $('input[name=password]').blur(function(){
                val=$(this).val();//旧密码
                if(val.length==0){
                    b=0;
                    $(this).data({'num':0});
                    $(this).next().show(); 
                    $("input[name=password]").css("border","1px solid red");
                }else{
                    b=1;
                    $(this).data({'num':1});
                    $(this).next().hide(); 
                    $("input[name=password]").css("border","1px solid #c9cdc2");
                }
              });        
 
//全选 全不选  
        console.log($('input[id=selectHead]')[0]);
        $(function(){
            $("#selectHead").click(function(){
				$("input").prop("checked",this.checked);
				
            });
        });

		$("tbody>tr").click(function(){
			$(this)
			.addClass('selected')
			.siblings()
			.removeClass('selected')
			.end()
			.find('checkbox').attr('checked',this.checked);
		})
<<<<<<< HEAD
=======
		
// 分页
    $().ready(function(){
        var curPage =$("#currentPage").val();
        var last =$("#totalPage").val();
        var page =Math.ceil(curPage/10);//向上取整函数
        //调用绘制分页样式函数
        draw(page,curPage);

        //绑定点击页码事件
        $(document).on("click",".pagination li a",function(){
            var str =$(this).html();
            if(!isNaN(str)){
                //移除之前的active
                $(".pagination li a").removeClass("active");
                $(this).attr("class","active");
                $("#currentPage").val(str);
            }
	});
	
	//绑定下一页点击事件
	$(document).on("click","#nextPage",function(){
		var num =$(".active").html();
		var curPage =$("#currentPage").val();
		var last =$("#totalPage").val();
		var page =Math.ceil((parseInt(num))/10);
		if(num < page*10 && num != last){
			//移除之前的active
			$(".pagination li a").removeClass("active");
			$("#"+(parseInt(num)+1)+"").attr("class","active");
			//$(".pagination li a[text="+(parseInt(num)+1)+"]").attr("class","active");//jQ1.6支持
			$("#currentPage").val(parseInt(num)+1);
		}else if(num == page*10 && num != last){
			//清空之前的数据
			$(".pagination").html("");
			draw(page+1,(parseInt(num)+1));
		}
	})
	
 
	//绑定上一页点击事
	$(document).on("click","#previousPage",function(){
		var num =$(".active").html();
		var curPage =$("#currentPage").val();
		var last =$("#totalPage").val();
		var page =Math.ceil((parseInt(num))/10);
		if(num <= page*10 && num != (page-1)*10+1){
			//移除之前的active
			$(".pagination li a").removeClass("active");
			$("#"+(parseInt(num)-1)+"").attr("class","active");
			//$(".pagination li a[text="+(parseInt(num)+1)+"]").attr("class","active");//jQ1.6支持
			$("#currentPage").val(parseInt(num)-1);
		}else if(num == (page-1)*10+1 && num != 1){
			//清空之前的数据
			$(".pagination").html("");
			draw(page-1,(parseInt(num)-1));
		}
	})
	
	//绘制页面分页样式
	function draw(page,curPage){
		//页面中的当前页
		var page =page;
		//后台传过来的页数
		var curPage = curPage;
		//后台传过来的总页数
		var datas =$("#totalPage").val();
		//每页显示多少条数据
		var pageSize =5;
		//在网页中一共要分多少页
		var totalPage = Math.floor((datas-1)/pageSize+1);
>>>>>>> 62a3c6ba9867f0c3500cd27e105296b0f2fd3c1f
		
