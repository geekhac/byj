 function initBeginBtn(){
        var c = document.getElementById("beginBtn");
        var ctx = c.getContext("2d");
        c.width = 0.258*document.body.clientWidth;
        c.height = 0.228*document.body.clientHeight;
        var line1 = c.width;
        var line2 = c.height;
        var line3 = 0.09*document.body.clientWidth;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(line1,0);
        ctx.lineTo(line1,line2);
        ctx.lineTo(line1-line3,line2);
        ctx.lineTo(0,0);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.beginPath();
        ctx.font = "1.6em xinQingNian";
        ctx.fillStyle = '#ffffff';
        var left=0.653*c.width;
        ctx.fillText("开",0.305*c.width,0.254*c.height);
        ctx.fillText("始",left,0.254*c.height);
        ctx.fillText("测",left,0.526*c.height);
        ctx.fillText("试",left,0.789*c.height);
    }

wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wx465cca506870dce1', // 必填，公众号的唯一标识
    timestamp: 1493525603, // 必填，生成签名的时间戳
    nonceStr: 'byj', // 必填，生成签名的随机串
    signature: '1c9978edf841b47f0838808c80e502c138591cb9',// 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});

window.onload = initBeginBtn;

$(function(){
    var Qst=function(){
         this.agclickMark=0;
         this.rigCount1 = 0;//学校7
         this.rigCount2 = 0;//技术4
         this.rigCount3 = 0;//娱乐6
         this.dom={
            $page:$('#fullPage'),
            $loading:$('.loading'),
            $first:$('.first'),
            $last:$('.last')

        };
        this.choice=[//每一页设置为数组的一项
            {
                page:1,
                canPgUp:false,//是否可以翻页，题未昨完不能翻页
                qu1:{
                    sel:'sin',//单选
                    opt:['14天','15天','20天','21天'],
                    ans:3,
                    isRig:false,
                    isFinish:false,
                    type: 1
                },
                qu2:{
                    sel:'sin',
                    opt:['李同学','正义的地球人','吴同学','王同学'],
                    ans:4,
                    isRig:false,
                    isFinish:false,
                    type: 3
                }
            },
            {
                page:2,
                canPgUp:false,//是否可以翻页
                qu1:{
                    sel:'sin',
                    opt:['世界第108大奇迹','观光塔','雾霾导弹发射中心','西电塔'],
                    ans:3,
                    isRig:false,
                    isFinish:false,
                    type: 1
                },
                qu2:{
                    sel:'sin',
                    opt:['7层','5层','8层','6层'],
                    ans:4,
                    isRig:false,
                    isFinish:false,
                    type: 1
                }
            },
            {
                page:3,
                canPgUp:false,//是否可以翻页
                qu1:{
                    sel:'sin',
                    opt:['16','17','18','19'],
                    ans:3,
                    isRig:false,
                    isFinish:false,
                    type:1
                },
                qu2:{
                    sel:'sin',
                    opt:['黄','蓝','绿','红'],
                    ans:4,
                    isRig:false,
                    isFinish:false,
                    type:1
                }
            },
            {
                page:4,
                canPgUp:false,//是否可以翻页
                qu1:{
                    sel:'sin',
                    opt:['新综','老综','东门','以上都有'],
                    ans:3,
                    isRig:false,
                    isFinish:false,
                    type:3
                },
                qu2:{
                    sel:'sin',
                    opt:['红色','蓝色','白色','不看裤子，只看腿'],
                    ans:4,
                    isRig:false,
                    isFinish:false,
                    type: 3
                }
            },
            {
                page:5,
                canPgUp:false,//是否可以翻页
                qu1:{
                    sel:'sin',
                    opt:['全运会','“互联网+”大学生创新创业大赛','全国卖萌大赛','全国大学生电子设计大赛'],
                    ans:3,
                    isRig:false,
                    isFinish:false,
                    type: 2

                },
                qu2:{
                    sel:'sin',
                    opt:['Xidian University','Xian Electronic Technology University','Xian Army Electronic University','以上都行'],
                    ans:4,
                    isRig:false,
                    isFinish:false,
                    type:2
                }
            },
            {
                page:6,
                canPgUp:false,//是否可以翻页
                qu1:{
                    sel:'sin',
                    opt:['在华盛顿街道游行集会','上墙纽约时代广场纳斯达克大屏','在鸟巢举办大型演出','将电子科技大学并入我校'],
                    ans:3,
                    isRig:false,
                    isFinish:false,
                    type: 3

                },
                qu2:{
                    sel:'sin',
                    opt:['main函数必须位于文件的开头','每行只能写一条语句','程序必须包含输入语句','变量按所定义的类型存储数据'],
                    ans:4,
                    isRig:false,
                    isFinish:false,
                    type:2
                }
            },
            {
                page:7,
                canPgUp:false,//是否可以翻页
                qu1:{
                    sel:'mul',
                    opt:['A楼','B楼','H(hanlin)楼','C楼'],
                    ans:[3,1],
                    isRig:false,
                    isFinish:false,
                    hasChoi:[],
                    type:1
                },
                qu2:{
                    sel:'mul',
                    opt:['学习','停水时洗澡停电时充电','看夜光手表','鼓掌'],
                    ans:[4,2],
                    isRig:false,
                    isFinish:false,
                    hasChoi:[],
                    type:3
                }
            },
            {
                page:8,
                canPgUp:false,//是否可以翻页
                qu1:{
                    sel:'mul',//多选
                    opt:['刘谋','何刚','罗永浩','闫妮'],
                    ans:[1,2],
                    isRig:false,
                    isFinish:false,
                    hasChoi:[],
                    type: 3
                },
                qu2:{
                    sel:'mul',
                    opt:['车工','磨工','铣工','钳工'],
                    ans:[2,3],
                    isRig:false,
                    isFinish:false,
                    hasChoi:[],
                    type: 2
                }
            },
            {
                page:9,
                canPgUp:false,//是否可以翻页
                qu1:{
                    sel:'mul',
                    opt:['厚德求真','团结勤奋','求实创新','砺学笃行'],
                    ans:[2,4],
                    isRig:false,
                    isFinish:false,
                    hasChoi:[],
                    type:1
                }
            }
        ];
        this.init();
    };
    Qst.prototype={

        constructor:Qst,
        init:function () {
            this.addPage();
            this.fullPage();
            this.loading();
            this.select();
            this.showResult();
            this.beginQuestion();
            wx.onMenuShareTimeline({
                title: '西电毕业季', // 分享标题
                link: 'http://1.geekhac.applinzi.com/byj/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://1.geekhac.applinzi.com/byj/1.png', // 分享图标
                success: function () {
                    console.log('分享咯');
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    console.log('咋了这事');
                    // 用户取消分享后执行的回调函数
                }
            });
        },



        // 创建带有选项的页面，把选择项填入相应的页面
        addPage:function () {
            var self=this;
            for(var i=0;i<this.choice.length;i++){
                var $page=$(document.createElement("div")).attr("class","slide page"+(i+1)).css("backgroundImage","url(./imgs/"+(i+1)+".png)");

                var $uQa=$(document.createElement("div")).attr({"class":"u-qa choice table","data-qu":i*2});
                var j,$choice,$tableCell=new Array(),$tableRow;
                for(j=0;j<4;j++){
                    $choice=$(document.createElement("button")).attr({"class":"choiBtn choi"+j ,"data-choi":j});
                    $choice.append( $(document.createElement("span")).attr("class","bac") )
                    .append( $(document.createElement("span")).attr("class","txt").text(self.choice[i].qu1.opt[j]) );
                    $tableCell[j]=$(document.createElement("div")).attr("class","tableCell")
                                .append($choice);

                }
                $tableRow=$(document.createElement("div")).attr("class","tableRow")
                                .append($tableCell[0]).append($tableCell[1]);
                $uQa.append($tableRow);
                $tableRow=$(document.createElement("div")).attr("class","tableRow")
                                .append($tableCell[2]).append($tableCell[3]);
                $uQa.append($tableRow);
                $page.append($uQa);
                if(i!==8){//最后一页不加dQa
                    var $dQa=$(document.createElement("div")).attr({"class":"d-qa choice table","data-qu":i*2+1});
                    for(j=0;j<4;j++){
                        $choice=$(document.createElement("button")).attr({"class":"choiBtn choi"+j,"data-choi":j});
                        $choice.append($(document.createElement("span")).attr("class","bac"))
                        .append($(document.createElement("span")).attr("class","txt").text(self.choice[i].qu2.opt[j]));
                        $tableCell[j]=$(document.createElement("div")).attr("class","tableCell")
                                .append($choice);

                    }
                    if(i!==4){
                        $tableRow=$(document.createElement("div")).attr("class","tableRow")
                                .append($tableCell[0]).append($tableCell[1]);
                        $dQa.append($tableRow);
                        $tableRow=$(document.createElement("div")).attr("class","tableRow")
                                .append($tableCell[2]).append($tableCell[3]);
                        $dQa.append($tableRow);
                    }else{
                        for(var n=0;n<4;n++){
                            $tableRow=$(document.createElement("div")).attr("class","tableRow")
                                .append($tableCell[n]);
                            $dQa.append($tableRow);
                        }
                    }
                    $page.append($dQa);

                }else{
                    $submit=$(document.createElement("button")).attr("class","submit");
                    $submit.append( $(document.createElement("span")).attr("class","bac"))
                    .append( $(document.createElement("span")).attr("class","txt").text("提交答案"));
                    $page.append($submit);
                }
                if(i==0){
                    $('<div class="tips" id="tip1"></div>')
                        .append($('<p class="p1">一旦选择，不可更改，请爸爸们谨慎答题</p>'))
                        .append($('<p class="p2">完成本页题目后<br>向左滑动翻页</p>'))
                        .append($('<img src="imgs/right1.png">'))//箭头
                        .append($('<button id="knowit">本爸爸知道了</button>'))
                        .appendTo($page);

                }
                this.dom.$last.before($page);//将创建的page都放在last页前面
                if(i==8) $("div.page9").addClass("stop");
            }

        },

        // 用户的选择操作
        select:function () {
            var self=this;
            $('button.choiBtn').click(function (e) {
                var qu=$(this).parent().parent().parent().data("qu");//第几道题
                console.log(qu);
                var page=Math.floor(qu/2);//第几页
                console.log(page);
                var num=qu%2===1?2:1;//本页中的第几道（1｜2）
                console.log(num);
                var selAns=$(this).data("choi");// 第几个选项
                console.log(selAns);
                var choice=self.choice[page]['qu'+num];
                if(choice.isFinish&&choice.sel==='sin'){//如果已经选过
                    return;
                }
                var rigCho=choice.ans;//正确答案
                console.log(rigCho);
                //选择样式控制
                var isRight;
                if(choice.sel==='sin'){//如果是单选
                    isRight=(selAns+1)==rigCho?true:false;
                    $(this).find('.bac').addClass(isRight?"right":"wrong");
                    self.choice[page]['qu'+num].isRig=isRight;
                    console.log(self.choice[page]['qu'+num].isRig);
                }else{//如果是多选
                    isRight=(rigCho).indexOf(selAns+1)!==-1?true:false;//判断正误
                    $(this).find('.bac').addClass(isRight?"right":"wrong");
                    if( self.choice[page]['qu'+num].hasChoi.indexOf(selAns+1)===-1){//不重复加入选项
                        self.choice[page]['qu'+num].hasChoi.push((selAns+1));
                    }
                    console.log( self.choice[page]['qu'+num].hasChoi);
                    console.log(self.choice[page]['qu'+num].isRig);
                }
                self.choice[page]['qu'+num].isFinish=true;

                //翻页控制
                if(page!==8){
                    //如果页面内两道题都选择完则可以翻页
                    if(self.choice[page].qu1.isFinish&&self.choice[page].qu2.isFinish){
                        self.choice[page].canPgUp=true;
                    }
                }
            });
        },
        // 翻页控制多选isRight
        fullPage:function () {
            var self=this;
            this.dom.$page.fullpage({
                controlArrows:false,
                loopHorizontal:false,
                scrollingSpeed:700,
                onSlideLeave: function(anchorLink,index,slideIndex,direction){//多选的isRight判断设置
                    //这里把参数不写全会不会有影响？
                    console.log(anchorLink,index,slideIndex,direction);;
                  if(slideIndex>=8&&slideIndex<=9){
                    var slide=self.choice[slideIndex-2];
                    var choiAns1 = slide.qu1.ans;
                    var choiAns2 = slide.qu2.ans;
                    var useChoi1 = slide.qu1.hasChoi;
                    var useChoi2 = slide.qu2.hasChoi;
                    if(choiAns1.length!=useChoi1.length)  slide.qu1.isRig = false;
                    else{
                       var isRight=false;
                        for(var x in useChoi1){
                            isRight=(choiAns1).indexOf(useChoi1[x])!==-1?true:false;
                            console.log(useChoi1[x]);
                            console.log(isRight);
                            if(isRight===false) break;//false!='false';
                         }
                        slide.qu1.isRig = isRight;
                    }
                    console.log(slide.qu1.isRig);
                    if(choiAns2.length!=useChoi2.length) slide.qu2.isRig = false;
                    else{
                        var isRight=false;
                        for(var x in useChoi2){
                            isRight=(choiAns2).indexOf(useChoi2[x])!==-1?true:false;
                            if(isRight===false) break;
                        }
                        slide.qu2.isRig = isRight;
                    }
                    console.log(slide.qu2.isRig);
                 }

                 if(slideIndex>=2&&slideIndex<11&&self.choice[slideIndex-2].canPgUp==false) return false;
                 if(direction=="left"&&self.agclickMark==0) return false;
                 if($("div.slide").eq(slideIndex).hasClass("stop")) return false;
                }

            });
        },
         // 加载页
        loading:function () {
                var self=this;
                 $("div#loadingAni").animate({"width":"55%"},3000)

                setTimeout(function(){$('div.loading').removeClass("stop");},2999);
                setTimeout(function(){self.dom.$page.fullpage.moveSlideRight();},3000);
        },

        beginQuestion: function(){
            var self = this;
            $('canvas').click(function(){
                $('div.slide').eq(1).removeClass("stop");
                self.dom.$page.fullpage.moveSlideRight();
            })
            $('button#knowit').click(function(){
                $('div.tips').remove();
            })
        },

        showResult: function(){
            var self = this;
            var mark = 0;
            $("button.submit").click(function(){
                //判断最后一题
                var choiAns = self.choice[8].qu1.hasChoi;
                var useChoi = self.choice[8].qu1.ans;
                if(choiAns.length!=useChoi.length)  self.choice[8].qu1.isRig = false;
                else{
                    var isRight=false;
                    for(var x in useChoi){
                        var isRight=(choiAns).indexOf(useChoi[x])!==-1?true:false;
                        if(isRight==false) break;
                    }
                    self.choice[8].qu1.isRig = isRight;
                }
                self.choice[8].canPgUp = true;
                console.log(self.choice[8].qu1.isRig);
                for(var x in self.choice){//统计正确率
                    var uqu = self.choice[x].qu1;
                    var dqu = self.choice[x].qu2;
                    if(uqu.isRig==true) console.log(uqu);
                    if(uqu.isRig==true&&uqu.type==1) self.rigCount1++;
                    if(uqu.isRig==true&&uqu.type==2) self.rigCount2++;
                    if(uqu.isRig==true&&uqu.type==3) self.rigCount3++;
                    if(dqu){
                        if(dqu.isRig==true) console.log(dqu);
                        if(dqu.isRig==true&&dqu.type==1) self.rigCount1++;
                        if(dqu.isRig==true&&dqu.type==2) self.rigCount2++;
                        if(dqu.isRig==true&&dqu.type==3) self.rigCount3++;
                    }
                }
                console.log(self.rigCount1+self.rigCount2+self.rigCount3);
                var rigPer=(self.rigCount1+self.rigCount2+self.rigCount3)/17;
                rigPer=(rigPer*100).toFixed(1);
                console.log(rigPer);
                $('span.rigPer').append(rigPer+"%");
                //判断形容词
                var adj;
                if(rigPer>=0&&rigPer<20) adj="智商欠费的";
                if(rigPer>=20&&rigPer<40) adj="一世萌新的";
                if(rigPer>=40&&rigPer<50) adj="一脸懵逼的";
                if(rigPer>=50&&rigPer<60) adj="吃瓜四年的";
                if(rigPer>=60&&rigPer<70) adj="混的不错的";
                if(rigPer>=70&&rigPer<80) adj="风生水起的";
                if(rigPer>=80&&rigPer<90) adj="人间精品的";
                if(rigPer>=90&&rigPer<100) adj="看过答案的";
                $('p.adj').append(adj);
                //判断名词
                var nounAns = [["B楼活地图","海棠楼管"],["期末大腿","均分王者"],["树林猎手","北雷群众"]];
                var rigPer1=self.rigCount1/7;
                var rigPer2=self.rigCount2/4;
                var rigPer3=self.rigCount3/6;
                console.log(rigPer1);
                console.log(rigPer2);
                console.log(rigPer3);
                var larger=rigPer1>=rigPer3?"rigPer1":"rigPer3";
                    console.log(larger);
                if(larger=="rigPer1") larger=rigPer1>=rigPer2?"rigPer1":"rigPer2";
                if(larger=="rigPer3") larger=rigPer3>=rigPer2?"rigPer3":"rigPer2";
                var noun;
                if(larger=='rigPer1') noun=nounAns[0][Math.floor(Math.random()*2)];
                if(larger=='rigPer2') noun=nounAns[1][Math.floor(Math.random()*2)];
                if(larger=='rigPer3') noun=nounAns[2][Math.floor(Math.random()*2)];
                  console.log(larger);
                $('p.noun').append(noun);
                 $('div.slide').eq(10).removeClass("stop");
                self.dom.$page.fullpage.moveSlideRight();

                //再做一遍和分享一下
                $('button.share').click(function(){
                    $lastPage = $('div.result_btn').parent();
                    $tip2=$('<div class="tips" id="tip2"></div>')
                            .append($('<img src="imgs/right2.png">'))//箭头
                            .append($('<p>点击右上角分享朋友圈<br>让大家看看你是怎样的西电人</p>'))
                            .appendTo($lastPage);
                    $tip2.click(function(){
                        $tip2.remove();
                    })

                })

                //清理答题记录和按钮响应

                $('button.again').click(function(){
                    self.agclickMark=1;
                    self.dom.$page.fullpage.setScrollingSpeed(0);
                    self.dom.$page.fullpage.moveTo(1,2);
                    self.dom.$page.fullpage.setScrollingSpeed(700);
                    self.agclickMark=0;
                    for(var i=0;i<self.choice.length;i++){
                        self.choice[i]['qu1'].isRig = false;
                        self.choice[i]['qu1'].isFinish = false;
                        self.choice[i].canPgUp = false;
                        if(self.choice[i]['qu1'].hasChoi)
                        self.choice[i]['qu1'].hasChoi = [];
                        if(self.choice[i]['qu2']) {
                            self.choice[i]['qu2'].isRig = false;
                            self.choice[i]['qu2'].isFinish = false;
                            if(self.choice[i]['qu2'].hasChoi)
                            self.choice[i]['qu2'].hasChoi = [];
                        }

                        console.log(self.choice[i].qu1);
                        console.log(self.choice[i].qu2);
                    }
                    var $button = $('button.choiBtn span.bac');
                    for(var i=0;i<$button.length;i++){
                        if($button.eq(i).hasClass('right')){
                            $button.eq(i).removeClass('right');
                        }
                        if($button.eq(i).hasClass('wrong')){
                            $button.eq(i).removeClass('wrong');
                        }
                    }

                    self.rigCount1 = 0;//学校7
                    self.rigCount2 = 0;//技术4
                    self.rigCount3 = 0;
                    $("p.adj").html("");
                    $("p.noun").html("");
                    $("span.rigPer").html("");
                    $("slide.first").addClass("stop");
                    $("slide.page9").addClass("stop");


                })


            })

        }




    };
    var qst = new Qst();

});