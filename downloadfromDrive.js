
import { existsSync, mkdirSync, createReadStream } from "fs"
import { join } from "path"

const writeupDir = join(process.cwd(), "public/writeups")

if (!existsSync(writeupDir)){
    mkdirSync(writeupDir, {recursive: true})
}

