window.onload = function(){
    $(".banner").unslider({
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay: 2000,              //  The delay between slide animations (in milliseconds)
        complete: function() {},  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: false              //  Support responsive design. May break non-responsive designs
    });
}

var register_form = document.getElementById("register_form");
var username = register_form.getElementsByTagName("input")[0];
var mail = register_form.getElementsByTagName("input")[1];
var password = register_form.getElementsByTagName("input")[2];
var re_password = register_form.getElementsByTagName("input")[3];
var tips = register_form.getElementsByTagName("span");

username.onblur = mail.onblur = password.onblur = re_password.onblur = function() {
	check();
}

function check()
{	
	if(!(/^[\u4E00-\u9FA5]+$/).test(username.value) || username.value.length < 2) {
		tips[0].className = "";
		tips[0].innerHTML = "用户名必须填写真实姓名";
		//return false;
	}
	else {
  		tips[0].innerHTML = "√";
  		tips[0].className = "right";
  	}
	if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/).test(mail.value)) {
  		tips[1].className = "";
  		tips[1].innerHTML = "邮箱格式不正确";
  		//return false;
  	}
  	else {
  		tips[1].innerHTML = "√";
  		tips[1].className = "right";
  	}
  	if(password.value.length == 0) {
  		tips[2].className = "";
  		tips[2].innerHTML = "密码不能为空";
  		//return false;
  	}
  	else {
  		tips[2].innerHTML = "√";
  		tips[2].className = "right";
  	}
	if(password.value != re_password.value) {
		tips[3].className = "";
		tips[3].innerHTML = "两次输入不相同";
		//return false;
	}
	else if(password.value.length != 0) {
		tips[3].innerHTML = "√";
  		tips[3].className = "right";
	}
	else {
  		tips[3].innerHTML = "";
  		tips[3].className = "";
  	}
}

