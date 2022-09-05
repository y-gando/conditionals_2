// 宣言したselectにHTML内の'select'を代入
const select = document.querySelector('select');
// 宣言したlistにHTML内の'ul'を代入
const list = document.querySelector('ul');
// 宣言したh1にHTML内の'h1'を代入
const h1 = document.querySelector('h1');

// selectが選択された時に実行される関数を定義
select.onchange = function () {
    // choiceにselectで入力された値を代入
    const choice = select.value;


    // ---- 条件式をここに書く ----

    // no.1 選択されている月を取得します (これは choice 変数に格納されています。この値は <select> 要素で選択された後の値で、例えば 1 月なら、"1" といった値です。)

    // daysに31を代入
    let days = 31;

    // no.2 days という変数に、選択された月の日数を設定します。そのためには、1 年の各月の日数を調べる必要があるでしょう。うるう年はこの例題の目的から外れるため、無視してください。

    // 4,6,9,11がchoiceと同等の場合、daysは30
    if (choice === '4' || choice === '6' || choice === '9' || choice === '11') {
        days = 30
        //2がchoiceと同等の場合、daysは28
    }else if (choice === '2') {
        days = 28
    }

    // -------------------------

    // createCalendar関数を実行。
    createCalendar(days, choice + ' 月');
}

// createCalendarの関数を定義
function createCalendar(days, choice) {
    // listのHTMLは何も入力されない
    list.innerHTML = '';
    // h1のテキストはchoiceの値
    h1.textContent = choice;
    //daysが1以上31未満になるまで+1を繰り返す
    for (let i = 1; i <= days; i++) {
        // listItemを宣言し、HTML内のliを代入
        const listItem = document.createElement('li');
        // listItemのテキストはiの値
        listItem.textContent = i;
        // listItemを返す
        list.appendChild(listItem);
    }
}

// createCalendar関数を実行
createCalendar(31, '1 月');
