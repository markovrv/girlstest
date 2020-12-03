<?php

$post = json_decode(file_get_contents('php://input'), true);
$bd = new mysqli("localhost", "markovrv_girlstest", "9091433506", "markovrv_girlstest");
$bd->query("SET NAMES 'utf8' ");
$ip = $_SERVER['REMOTE_ADDR'];
$d = date("yy-m-d H:i:s");

if (isset($post['getid'])) {
    $bd->query("INSERT INTO `vizits` (status, ip, time) VALUES ('start', '" . $ip . "', '" . $d . "')");
    echo json_encode(['userId' => $bd->insert_id]);
} elseif (isset($post['rec'])) {
    $bd->query("INSERT INTO `vizits` (status, userId, ip, time, q, a) VALUES ('ans', " . $post['rec'] . ", '" . $ip . "', '" . $d . "', " . $post['q'] . ", " . $post['a'] . ")");
    echo json_encode(['status' => "OK"]);
} else {
    header("HTTP/1.1 500 Internal Server Error");
}
