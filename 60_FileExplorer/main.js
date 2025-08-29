import fs from "fs/promises"
import fsm from "fs"
import path from "path";

const basepath = "C:\\Users\\vikas watore\\OneDrive\\Desktop\\SIGMA WebDevelopment\\60_FileExplorer";
let file = await fs.readdir(basepath);
console.log(file);


for (const items of file) {
    let ext = items.split(".")[items.split(".").length - 1]
    console.log(ext);
    if (ext != "js" && ext != "json" && items.split(".").length > 1) {

        if (fsm.existsSync(path.join(basepath, ext))) {
            //move the file to directory
            fs.rename(path.join(basepath, items), path.join(basepath, ext, items))
        } else {
            fs.mkdir(ext);
            fs.rename(path.join(basepath,items),path.join(basepath,ext,items))
        }
        console.log(items);
    }

}