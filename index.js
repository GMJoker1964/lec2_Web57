//Ex1

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
// const data = '1, 8, 5, 7, 2';

// fs.writeFile('../num.text', data, {encoding: 'utf-8'},(err) => {
//     if(err) throw err;
//     console.log('success');
// })

//Ex 2 
// const writeFile = (path, data) => {
//     // Hoàn thiện hàm
//     return new Promise((resolve, reject) => {
//         fs.writeFile(path, JSON.stringify(data), {encoding: 'utf-8'}, (err) => {
//             if (err){
//                 throw err;
//                 reject(err);
//             }
//             resolve(true);
//         })
//     })

//   }
  
//   const writeFileToDisk = async (path, data) => {
//     try {
//       const isSuccess = await writeFile(path, data);
//       console.log(isSuccess) // true
//     } catch (err) {
//       console.log(err) // 'Lỗi'
//     }
// }

// writeFileToDisk('../ex2.txt', {value: 2});