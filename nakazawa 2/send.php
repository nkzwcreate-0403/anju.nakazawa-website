<?php
// フォームからの入力を受け取る
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// 確認用に表示
echo "<h1>送信内容の確認</h1>";
echo "<p><strong>お名前：</strong>" . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</p>";
echo "<p><strong>メールアドレス：</strong>" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</p>";
echo "<p><strong>お問い合わせ内容：</strong><br>" . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . "</p>";
?>