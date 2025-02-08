<?php
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['ip'])) {
  $ip = $data['ip'];
  file_put_contents('ip.txt', $ip . PHP_EOL, FILE_APPEND | LOCK_EX);
  echo "IP stored successfully";
} else {
  echo "No IP provided";
}
?>
