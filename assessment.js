'use strict';//厳格モードの宣言。記述ミスをエラーとして呼び出してくれる。
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

assessmentButton.onclick = function(){
    console.log('ボタンがおされました');
    // TODO 診断結果エリアの作成
    // TODO ツイートエリアの作成
}

const answers = [//配列を定数で宣言して、内容を格納
    '{userName}のいいところは声です',
    '{userName}のいいところは顔です',
    '{userName}のいいところは力です',
    '{userName}のいいところは脚力です',
    '{userName}のいいところは頭です',
    '{userName}のいいところはないです'

];

/**jsDoc形式のコメントの書き方。関数の説明に使われる。
 * 名前の文字列を渡すと診断結果を返す関数　　：関数の説明
 * @param{string} userName ユーザーの名前　　：引数の型と説明
 * @return{string} 診断結果                 　：戻り値の型と説明
 */
function assessment(userName){
    //全文字のコード番号を取得してそれを足し合わせる。
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    //文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replace(/\{userName\}/g, userName);//   /\{userName\}/g この部分は正規表現
    return result;
}

encodeURIComponent('あ');//文字列をURIエンコードする
→%E3%81%82'
decodeURIComponent('%E3%81%82');
→’あ’
