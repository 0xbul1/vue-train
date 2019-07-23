let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');
// 轮播图/sliders
let sliders = require('./sliders');
// console.log(path.resolve('./book.json'));

let pageCount = 5;//设置后台每次返回数据的数量

function read(cb){
    //readFile异步的
    fs.readFile((path.resolve(__dirname, './book.json')),'utf8',function(err,data){
        if(err || data.length == 0){
            console.log(err);
            cb([]);//如果有错或者文件没有长度，就是空数组
        }else{
            cb(JSON.parse(data));//将内容转成对象
        }
    });
}
// read(function(books){ //books是读到的所有图书数据
//     console.log(books);
// });
function write(data,cb){
    fs.writeFile((path.resolve(__dirname, './book.json')),JSON.stringify(data),cb);
}
// write({},function(){
//     console.log(成功写入);
// })

http.createServer((req,res)=>{
    // 跨域头 解决8080请求9527
    // https://www.cnblogs.com/king-ying/p/7248816.html
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.setHeader("X-Powered-By",' 3.2.1')
    // if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/

    let {pathname,query} = url.parse(req.url,true);//true把query转成对象
    if(pathname === '/page'){
        let offset = parseInt(query.offset) || 0;//拿到前端传递的offset
        read(function(books){
            //每次偏移量，在每次偏移的基础上增加5条
            let result =  books.reverse().slice(offset,offset+pageCount);//数据倒序输出
            let hasMore = true;//默认显示更多
            if(books.length <= offset+pageCount){//已经显示的偏移量大于了总共的数据条数
                hasMore = false;
            }
            res.setHeader('Content-type','application/json;charset=utf8');
            res.end(JSON.stringify({hasMore,books:result}));
        });
        return;
    }
    if(pathname === '/sliders'){
        //编码格式 
        res.setHeader('Content-type','application/json;charset=utf8');
        // res.end(sliders);
        return res.end(JSON.stringify(sliders));
    }
    if(pathname === '/hot'){
        read(function(books){ //books是读到的所有图书数据
            // console.log(books);
            res.setHeader('Content-type','application/json;charset=utf8');
            let hot = books.reverse().slice(0,6);
            //测试loading
            // setTimeout(()=>{
            //     res.end(JSON.stringify(hot));
            // },1800);
            res.end(JSON.stringify(hot));
        });
        return
    }
    if(pathname === '/books'){  //对书的增删改查restful？架构风格？朦朦胧胧迷迷糊糊
        let id = parseInt(query.id);    //取出的是字符串
        switch (req.method){//？id=1
            case 'GET':
                if(!isNaN(id)){ //查询一个
                    //不然是0或者负数没办法约束
                    read(function(books){
                        let book = books.find(item=>item.bookId===id);
                        if(!book){
                            book = {}
                        }
                    res.setHeader('Content-type','application/json;charset=utf8');
                    res.end(JSON.stringify(book));
                    });
                }else{  //获取所有图书
                read(function(books){
                    res.setHeader('Content-type','application/json;charset=utf8');
                    res.end(JSON.stringify(books.reverse()));
                    });
                }
                break;
            case 'POST':
                let str = '';
                req.on('data',chunk=>{
                    str+=chunk;
                });
                req.on('end',()=>{
                    let book = JSON.parse(str);
                    read(function(books){
                        book.bookId = books.length?books[books.length-1].bookId+1:1;
                        books.push(book);//将数据放到books中，books在内存中
                        write(books,function(){//将数据写到json
                            res.end(JSON.stringify(book));
                        });
                    });
                });
                break;
            case 'PUT':
                if(id){//获取修改的id
                    let str = '';
                    //请求体流接收
                    req.on('data',chunk=>{
                        str+=chunk;
                    });
                    req.on('end',()=>{
                        let book = JSON.parse(str);//book就是要改成的数据
                        read(function(books){
                            books=books.map(item=>{
                                if(item.bookId===id){//id相同那本书找到返回
                                    return book;
                                }
                                return item;//其他的原封不动返回
                            });
                            write(books,function(){//将数据写到json
                                res.end(JSON.stringify(book));
                            })
                        })
                    });


                }
                break;
            case "DELETE":
                read(function(books){
                books = books.filter(item=>item.bookId !== id);
                    write(books,function(){
                        res.end(JSON.stringify({}));//删除返回空对象
                    })
                });
                break; 
        }
        return
    }

    //解决服务端静态读取
    fs.stat((path.resolve(__dirname,'.'))+ pathname,function(err,stats){
        if(err){
            read.statusCode = 404;
            res.end('撒子都谋');
        }else{
            if(stats.isDirectory()){
                let p = require('path').join((path.resolve(__dirname,'.'))+ pathname,'./index.html')
                fs.createReadStream(p).pipe(res);
            }else{
                fs.createReadStream((path.resolve(__dirname,'.'))+ pathname).pipe(res);
            }
        }
    });
}).listen(9527);
