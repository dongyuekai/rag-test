import { getEncoding, getEncodingNameForModel } from 'js-tiktoken'

const modelName = 'gpt-4'
const encodingName = getEncodingNameForModel(modelName)
// 我们打印一下gpt-4这个模型的编码的名字
console.log(encodingName)

const enc = getEncoding(encodingName)

// 用这个编码来计算下token数量
console.log('apple---', enc.encode('apple').length)
console.log('pineapple---', enc.encode('pineapple').length)
console.log('苹果---', enc.encode('苹果').length)
console.log('香蕉---', enc.encode('香蕉').length)
console.log('吃饭', enc.encode("吃饭").length);
console.log('一二三', enc.encode("一二三").length);
