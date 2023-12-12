import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`BlogData/${req.query.slug}`, "utf8", (error, data)=>{
    console.log(req.query.slug);
    if(error){
      res.status(500).json({error: "Blog does not exist"});
    }
    res.status(200).json(JSON.parse(data))
  })

}
