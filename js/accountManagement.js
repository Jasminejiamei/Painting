// 弹出层 
        //添加账号，显示灰色 jQuery 遮罩层 
		$ (".button1").click(function(){
				var bh = 1000 ;
				var bw = $("body").width(); 
				$("#fullbg").css({ 
				height:bh, 
				width:bw, 
				display:"block" 
				}); 
				$("#dialog").show(); 
			});
		$('input[name=closeButton1]').click(function(){
				$("#fullbg,#dialog").hide(); 
			});
		
        //批量添加账号
		$ (".button2").click(function(){
				var bh = 1000 ;
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
		//导出表格数据的文件名
		$ (".button4").click(function(){
			var bh = 1000 ;
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

		//文件确认
		$(function() {
			$(".sureButton").click(function() {
				$("#fullbg,#dialogname").hide();
				});
				});

		//备注
		$(function(){
			$(".btnDropdown").click(function(){
				$(".dropdown-menu").show();
			});
			$(".btnDropdown").blur(function(){
				$(".dropdown-menu").hide();
			});
		});
		//搜索框
		$(function(){	 
			$("input.formText").keyup(function(){
				$("table tbody tr").hide()
					.filter(":contains('"+($(this).val())+"')").show();
				});
		});
			
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
 

/*表格的渲染*/
    $.ajax({
            type:'GET',
			url:"https://www.easy-mock.com/mock/5be8dc67aebfd849286cd6ee/test.table/get.Tabledata",
			async :false,
			dataType:'json',
			//请求成功
			success:function(data){
				var thead = "<thead><tr><th><input type='checkbox' id='select-all' ></th>"
                var tbody = "<tbody>";
                var th = "";
                var tr = "";
                //thead部分
                $.each(data.data.colum,function (key,value) {
                            th = "<th>"+value+"</th>";
                            thead += th;
                        });//完成thead的组装，取的是data->data->colum的value
                
                        var rowArr = data.data.row;//行数组
                        var colArr = data.data.colum;//列数组
                        for(var i=0;i<rowArr.length;i++){
                        tr += "<tr><td><input type='checkbox'></td>";
                                var sumObj = data.data.dataContent[rowArr[i]];
                                if(sumObj){
                                    for(var k in sumObj){
                                        tr += "<td>"+sumObj[k]+"</td>";
                                    }
                                }
                        tr += "<td class='operating'><button class='edit-button' onclick='pop'><span>编辑</span></button > <button class='delete-button'><span>删除</span></button></td></tr>";
                    }
					tbody += tr;
                $('table').append(thead+tbody);
                // /*为每一行的末尾添加操作按钮样式*/
				// $("tbody > tr").append($(".operating").clone());
				$("#loading").hide();
            },
			
            error:function(jqXHR){
				//请求失败函数内容
				$("#loading").hide();
				alert("加载失败");
            }
		});   


//全选 全不选 
	$(function(){
		$("#select-all").click(function() {        
		if (this.checked){  
			$("tbody input[type='checkbox']").each(function(i){ 
				$(this).prop("checked", true); 
			});
		} else {   
			$("tbody input[type='checkbox']").each(function() {   
				$(this).prop("checked", false);  
				console.log($(this).attr("checked"));
			});
		}  
	})
	});


//表单颜色改变
	$(function () {
		$("thead").addClass("thead"); 
		$("tbody>tr:even").addClass("even");  /*给奇数行添加样式*/
		$("tbody>tr:odd").addClass("odd");  /*偶数行添加样式*/

		/*当单击表格行时，把当前设为选中状态样式
		，并把单选按钮设为选中状态*/
		$("tbody>tr").click(function () {
			$(this).addClass('selected')
			.siblings().removeClass('selected')
			.end()
		});
	});


/*点击事件*/
//表格中的添加
	$(function() {
		$(".sureButtonadd").click(function() {
			var tr=$("<tr></tr>");
			var td1=$("<td><input type='checkbox'></td>");





			var account=$("input [name='username']").val();
			var tr = "<tr><td><input type='checkbox'></td><td>account</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class='edit-button' onclick='pop'><span>编辑</span></button > <button class='delete-button'><span>删除</span></button></td></tr>";
			$("table tr:eq(1)").before(tr);
			$("#fullbg,#dialog,#dialogSecond,#dialogname").hide();
		})
	})
 
//表格中的编辑
	$(".edit-button").on("click", function() {
		var bh = 1000 ;
		var bw = $("body").width(); 
		$("#fullbg").css({ 
			height:bh, 
			width:bw, 
			display:"block" 
		}); 
		$("#dialogDescribe").show();
		}) 
		$('.closeButton').click(function(){
			$("#fullbg,#dialogDescribe").hide();
	})
		$('.sureButtonD').click(function(){
		$("#fullbg,#dialogDescribe").hide();
	})

//表格中的删除*/
	$(".delete-button").on(click,function(){
	     //获取按钮的父节点的父节点删除
	   $(this).parent().parent().remove();
	    });			    
	 	$("tr").mouseenter(function(){
	    	$(this).css({"opacity":1}).siblings().css({"opacity":1});
	    });
	     	$("table").mouseleave(function(){
	     	$("tr").css({"opacity":1});
	    });


/*点击列表头排序功能*/
$(document).ready(function() {
    var sort_direction=1; //排序标志，1为升序，-1为降序
    $('th').each(function(i) {
        $(this).click(function() {
            if(sort_direction==1) {
                sort_direction=-1;
            }
            else {
                sort_direction=1;
            }
            //获得行数组
            var trarr=$('table').find('tbody > tr').get();
            //数组排序
            trarr.sort(function(a, b) {
                var col1=$(a).children('td').eq(i).text().toUpperCase(); 
                var col2=$(b).children('td').eq(i).text().toUpperCase();
                return(col1 < col2) ? -sort_direction: (col1 > col2) ? sort_direction: 0;
            }
            );
            $.each(trarr, function(i, row) {
                //将排好序的数组重新填回表格
                $('tbody').append(row);
            }
            );
        }
        );
    }
    );
}


);