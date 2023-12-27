
		//声明计算器功能函数
			function testMath(val){
				//获取计算器文本框中的内容
				var inp=document.getElementById("data");
				//使用switch实现计算器的运算
				switch(val){
					case "=":
					inp.value=eval(inp.value);
					break;
					case "c":
					inp.value="";
					break;
					default:
					inp.value=inp.value+val;
					break;
				}
			}
		