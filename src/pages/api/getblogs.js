import * as fs from 'fs';

export default function handler(req, res) {

  fs.readFile(`BlogData/${req.query.slug}.json`, "utf-8", (error, data)=>{
    if(error){
      res.status(500).json({error: "Blog does not exist"});
    }
    res.status(200).json(JSON.parse(data))
  })
}
