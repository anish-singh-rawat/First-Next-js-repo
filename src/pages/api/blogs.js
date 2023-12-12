import * as fs from 'fs';

export default async function handler(req, res) {
  fs.promises.readdir("BlogData", (error, data)=>{
    let allBlogs = []
    data.forEach((item)=>{
      console.log(item);
      fs.readFile(('blogData/' + item), (datas)=>{
        allBlogs.push(datas)
      })
    })
    res.status(200).json(allBlogs)
  })
}
 