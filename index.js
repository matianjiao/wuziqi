window.onload=function(){
	var el=document.getElementById('game');
	var row=15;
	var len=(el.offsetWidth-row)/row;
	// var len=50;
	// el.style.width=row*(len+1)+'px';
	// el.style.height=row*(len+1)+'px';
	for(var i=0;i<row;i++){
		for(var j=0;j<row;j++){
			var xiao=document.createElement('div');
			xiao.setAttribute('class','xiao');
			xiao.setAttribute('id',i+'_'+j);
			xiao.style.width=len+'px';
			xiao.style.height=len+'px';
			xiao.style.borderRadius='50%';
			xiao.style.webkitTransform='scale(0.9,0.9)';
			el.appendChild(xiao);			
		}
	}	
	el.style.borderRight='none';
	el.style.borderBottom='none';

	var els=document.getElementsByClassName('xiao');
	var kaiguan=true;
	var dict1={};
	var dict2={};
	var panduan=function(id,dict){
		var x=Number(id.split('_')[0]);
		var y=Number(id.split('_')[1]);
		var hang=1;
		var tx=x,ty=y;
		// 横
		while(dict[tx+'_'+(ty+1)]){ 
			ty++;
			hang++;
		}
		tx=x;ty=y;
		while(dict[tx+'_'+(ty-1)]){
			ty--;
			hang++;
		}
		if(hang==5)return true;
		// 列
		tx=x;
		ty=y;
		hang=1;
		while(dict[ (tx+1)+'_'+ty]){
			hang++;
			tx++;
		}
		tx=x;
		ty=y;
		while(dict[ (tx-1)+'_'+ty]){
			hang++;
			tx--;
		}
		if(hang==5)return true;

		// 斜着 左上右下
		tx=x;
		ty=y;
		hang=1;
		while(dict[(tx+1)+'_'+(ty+1)]){
			hang++;
			tx++;
			ty++;
		}
		tx=x;
		ty=y;
		while(dict[(tx-1)+'_'+(ty-1)]){
			hang++;
			tx--;
			ty--;
		}
		if(hang==5)return true;
		// 斜着 左下右上
		tx=x;
		ty=y;
		hang=1;
		while(dict[(tx-1)+'_'+(ty+1)]){
			hang++;
			tx--;
			ty++;
		}
		tx=x;
		ty=y;
		while(dict[(tx+1)+'_'+(ty-1)]){
			hang++;
			tx++;
			ty--;
		}
		if(hang==5)return true;
		
	}

	for(var i=0;i<els.length;i++){
		els[i].onclick=function(){
			var id=this.getAttribute('id');
			this.style.boxShadow='0 2px 5px black';
			if(this.hasAttribute('hascolor'))return;
			if(kaiguan){
				this.style.backgroundColor='black';
				this.style.zIndex='12';
				kaiguan=false;
				dict1[this.getAttribute('id')]=true;
				console.log(dict1);
				if(panduan(id,dict1)){
					//黑棋赢;
					var zhezhao1=document.getElementById('zhezhao1');
					setTimeout(function(){
						zhezhao1.style.display='block';
					},700);
					var anniu=document.getElementById('anniu');
				    anniu.onclick=function(){
					    window.location.reload();
					}
					
				}
			}else{
				this.style.backgroundColor='white';
				this.style.zIndex='12';
				kaiguan=true;
				dict2[this.getAttribute('id')]=true;
				if(panduan(id,dict2)){
					//白棋赢;
					var zhezhao2=document.getElementById('zhezhao2');
					setTimeout(function(){
						zhezhao2.style.display='block';
					},700);
					var anniu1=document.getElementById('anniu1');
				    anniu1.onclick=function(){
					    window.location.reload();
					}
				}
			}
			// console.log(dict2.length);
			// if((dict1.length+dict2.length)==row*row){
			// 	alert('平局');
			// }
			this.setAttribute('hascolor','true');
		}
	}

// 画线
	for(var i=0;i<row;i++){
		var xian=document.createElement('div');
		xian.style.width=el.offsetWidth+'px';
		xian.style.height='1px';
		xian.style.backgroundColor='#1B0E00';
		xian.style.position='absolute';
		xian.style.top=len/2+(len+1)*i+'px';
		el.appendChild(xian);

		var shuxian=document.createElement('div');
		shuxian.style.width='1px';
		shuxian.style.height=el.offsetWidth+'px';
		shuxian.style.backgroundColor='#1B0E00';
		shuxian.style.position='absolute';
		shuxian.style.left=len/2+(len+1)*i+'px';
		el.appendChild(shuxian);
		
	}


// 认输
	ren1.onclick=function(){
		setTimeout(function(){
			zhezhao3.style.display='block';
		},700);
	}
	anniu2.onclick=function(){
		window.location.reload();
	}

	ren2.onclick=function(){
		setTimeout(function(){
			zhezhao4.style.display='block';
		},700);
	}
	anniu3.onclick=function(){
		window.location.reload();
	}











};