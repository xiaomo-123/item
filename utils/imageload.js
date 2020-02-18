let base = 0;
let Img = function (src) {
  this.src = src;
  this.status = false;
  this.fail = false;

}

let loop = (o, res) => {   
  let tem = Object.keys(o); 
  //loop中的o是全部数据，要全部遍历 console.log('loop中的res',res);
  //loop中的v指的是imageList，默认为item循环项
  //loop中的o,res 是传递过来的值 ，res为空数组，imageList数组中的1.jpg.....所有数据

//console.log('loop中v的数据',v);
  tem.map(v => {
    if (typeof o[v] === 'object') {    
      //typeof返回值是字符串，object为空类型，typeof o[v]=null,就往下走
      loop(o[v], res);
      //返回函数入口o[v]
     
    } else {
      //如果v的值='BASE'为网络地址名称，base=o[v],
      // 否则就将o[v]中的值,一般都是imageList数组图片名称，添加进数组
      if (v === 'BASE') {
      
        base = o[v];
      } else {
        res.push(o[v]);
      }
    }
  });
}

function ImageLoader(obj) {
  let arr = []; 
  //obj只有一条记录，包含所有内容
 console.log("obj",obj);
  if (obj.loading) {
    // 如果选择loading，则使用loadingcallback回调函数，没有选择不会执行
    this.loadingcallback = obj.loading;    
  }
  //console.log("obj.loading");
  if (obj.loaded) {
    // 如果选择loaded，则使用loaded回调函数
    this.loadedcallback = obj.loaded;
  }
// 如果传入base网络地址值，则将base传参进来
  if (obj.base) {
    base = obj.base
  }
// 最先执行的是insert方法，遍历同步回调，对obj.souce中的imagelis进行遍历，并增加生成数组记录
//Img数组结构： 0: Img {src: "1.jpg", status: true, fail: false}
//console.log(arr);
    //loop中的o是全部数据，要全部遍历 console.log('loop中的res',res);
  //loop中的v 是imageList数组 即source中的数组
  //loop中的res 是imageList数组中的1.jpg.....所有数据
//obj.source的内容进行初始化
//项目内容初始化，将内容插入数组数组arr，tem数组用于决定v的值，生成新的数组res,最后使用获取图片信息的回调函数
  this.insert = (item) => { //项目内容初始化数组arr，5次遍历，res数组遍历重新生成5次，一共10次
    arr.push(item);    
  };

  this.init = (o) => {    
    let res = [];
    loop(o, res);   //传递参数o,res到临时数组回调函数
  
    res.map((v) => {  //将arr数组根据临时数组重新生成，v变量为遍历数组
      this.insert(new Img(v));//重新遍历，生成新的数组,将原有数组状态改变
    });    
    this.load();//使用获取图片信息的回调函数
  };

//console.log("o");

  this.load = () => {
    this.start = (new Date).getTime();
    //加载图片时，遍历arr数组的数据
    arr.map((v) => {
      let src = base ? base + v.src : v.src;
      //console.log(src);
      wx.getImageInfo({
        src: src,
        success: res => {
          //获取图片信息，成功则让数组v的状态为真                     
          v.status = true;
          v.src=res.path;
        },
        fail: err => {
          v.fail = true;
        }
      })
    });
     //200毫妙就异步执行一次，如果isloaded状态为真，
     //加载完成，则让统计变量count增加，停止时间计数器
         let timer = setInterval(() => {     
      let status = this.isLoaded();      
      if (status) {
        clearTimeout(timer);        
      }
    }, 200);

    setTimeout(() => {
      clearTimeout(timer);
    }, 60000);
  };
//200毫妙执行一次isLoaded，统计数为0，失败数为0 
  //遍历数组arr,
  //若数组v.status=false,将状态赋值为false
    //否则，统计数加1，若v.fail为真，则状态为真，fail+1
    //isLoaded函数，遍历数组中成功的图片加载数量，只为统计成功的数量
  this.isLoaded = () => {
    let status = true,
      count = 0,
      fail = 0;         
    arr.map((v) => {
      //这个来进行判断getImageInfo函数是否已经加载完成
      if (!v.status) {    
        //没有加载完成，则让状态为假  
        status = false;
      } else {
         //加载完成，则让统计数加1
          count += 1;      
      }
      if (v.fail) {     
        status = true;
        fail += 1;
      }
    });
    //如果状态为真，则执行loaded加载完成回调函数
    // status 、timecost、 success、 fail、  totalcount为变量，不是数组
    // console.log(count);
    //  console.log(arr[count].src);
          
    if (status) {
      if (this.loadedcallback) {
        this.loadedcallback({
          status: true,         
          timecost: (new Date).getTime() - this.start,
          success: count,
          arr:arr,
          fail: fail,
          totalcount: arr.length          
        })        
      }
    } else {

      //如果状态为假，则表示正在执行loading加载回调函数
      if (this.loadingcallback) {
        this.loadingcallback({
          status: false,
          percent: count / arr.length
        });
      }
    }
    return status;
  };
  //最先执行的位置，传入图片信息的值 ，则执行初始化init回调函数
  if (obj.source) {
    this.init(obj.source);//obj.source的数据类型，包括source和"BASE"两个参数
    // source: [ImageSource]， "BASE": "https://7975-yun-njsxx-1300970458.tcb.qcloud.la/","imageList":
  }
}
module.exports = ImageLoader