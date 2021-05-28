const task = {
  工程師: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  設計師: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  創業家: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']

const roles = ['工程師', '設計師', '創業家']

function randomResult(data) {
  let randomNum = Math.floor(Math.random() * data.length)
  return data[randomNum]
}

function trashTalk (input) {
  if (!input) {
    return '先找個對象 不然要跟誰說幹話'
  }
  let role = roles[Number(input)]
  let taskContent = randomResult(task[role])
  let phraseContent = randomResult(phrase)
  return `身為一個${role}, ${taskContent}, ${phraseContent}吧! `
}

module.exports = {trashTalk}
