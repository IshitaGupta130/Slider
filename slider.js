// JavaScript Document
var currentImage=0;
var  imageWidth;
var num,num_t;
var ul,ul_t;
var ele,ele_t;
var shiftval;
var prev,next;
function init(){
	
	 ele = document.getElementById('img-list');
	 ele_t = document.getElementById('thumb-list');
	 ul = $('#img-list').children();
	 ul_t= $('#thumb-list').children();
     num = $('#img-list li').length;
	   num_t = $('#thumb-list li').length;
	imageWidth = ul[0].children[0].offsetWidth;
			var totwidth = parseInt(imageWidth*num)+'px';
			$(".thumb-slider").css('width',parseInt($("#thumbs-nail").width()/num_t));
			
	$('#img-list').css('width',totwidth);
	prev = document.getElementById("prev");
	next = document.getElementById("next");
	//.onclike = slide(-1) will be fired when onload;
	/*
	prev.onclick = function(){slide(-1);};
	next.onclick = function(){slide(1);};*/
	$(".thumb-slider").click(function(){
	 var ls = $(this).parent();
        var index = ls.children().index(this);
       
		slideTo(index);
	});
	prev.onclick = function(){ onClickPrev();};
	next.onclick = function(){ onClickNext();};
	//slider(ele);
	}
	function slideTo(imageToGo){
	var direction;
	var numOfImageToGo = Math.abs(imageToGo - currentImage);
	// slide toward left

	direction = currentImage > imageToGo ? 1 : -1;
	currentPostion = -1 * currentImage * imageWidth;
	var opts = {
		duration:1000,
		delta:function(p){return p;},
		step:function(delta){
			ele.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
		},
		callback:function(){currentImage = imageToGo;}	
	};
	animate(opts);
}

function onClickPrev(){
	if (currentImage == 0){
		slideTo(num - 1);
	} 		
	else{
		slideTo(currentImage - 1);
	}		
}

function onClickNext(){
	if (currentImage == num - 1){
		slideTo(0);
	}		
	else{
		slideTo(currentImage + 1);
	}		
}

	function slider(ele){ 
	
	
    animate({
        delay:17,
        duration: 3000,
        delta:function(i){return Math.max(0, -1 + 2 * i)},
        step:function(delta){
		//alert(delta +" " +  currentImage + " " + imageWidth);
		shiftval = parseInt((currentImage * imageWidth) + (delta * imageWidth));
            ele.style.left = "-"+ shiftval + "px";
				//alert(ele.style.left);
    },
        callback:function(){
            currentImage++;
        // if it doesn’t slied to the last image, keep sliding
            if(currentImage < num-1){
                slider(ele);
        }
       // if current image it’s the last one, it slides back to the first one
            else{
                var leftPosition = (num - 1) * imageWidth;
               // after 2 seconds, call the goBack function to slide to the first image 
                setTimeout(function(){goBack(leftPosition)},2000); 
                setTimeout(function(){slider(ele)}, 4000);
            }
        }
    });
}
function animate(opts){
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed / opts.duration
        if(progress > 1){
            progress = 1;
        }
        var delta = opts.delta(progress);
        opts.step(delta);
        if (progress == 1){
            clearInterval(id);
           opts.callback();
         }
    }, opts.dalay);
}
function goBack(leftPosition){
    currentImage = 0; 
    var id = setInterval(function(){
        if(leftPosition >= 0){
            ele.style.left = "-" + parseInt(leftPosition) + "px";
            leftPosition -= imageWidth / 20;
        }
        else{
            clearInterval(id);
        } 
    }, 17);
}

window.onload = init;
	
