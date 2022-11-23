import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //divの作成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)の作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストへ追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    //button
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //完了リストから削除
      deleteFromcompleteList(backButton.parentNode);

      //未完了リストへ戻す要素を取得
      const backTarget = backButton.parentNode;

      //テキストの取得
      const text = backTarget.firstElementChild.innerText;
      //未完了リストへ追加
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)の作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素を未完了リストから消す
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストへ追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList =
  ("click",
  (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  });

//完了リストから指定の要素を削除
const deleteFromcompleteList =
  ("click",
  (target) => {
    document.getElementById("complete-list").removeChild(target);
  });

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
