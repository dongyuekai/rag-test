import 'dotenv/config'
import 'cheerio'
import { CheerioWebBaseLoader } from '@langchain/community/document_loaders/web/cheerio'
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'

const cheeroiLoader = new CheerioWebBaseLoader(
  'https://juejin.cn/post/7233327509919547452',
  {
    // 取出main-area下的所有p标签
    selector: '.main-area p',
  }
)
const documents = await cheeroiLoader.load()
const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 400, // 每个分块的字符数
  chunkOverlap: 50, // 分块之间的重叠字符数
  separators: ["。", "！", "？"], // 分块的分割符
})
const splitDocuments = await textSplitter.splitDocuments(documents)
console.log('splitDocuments===', splitDocuments)