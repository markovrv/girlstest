<template>
<div class="row contentrow">
    <div class="col-md-5" style="text-align: center;">
        <img src="img/titlePic.jpg" class="title-pic">
    </div>
    <div class="col-md-7">
        <div style="text-align: center;font-size: x-large;
    font-style: italic;padding-top: 14px;line-height: 95%;">Математическая игра</div>
        <div class="text-shadow">Между нами<br>девочками</div>
    </div>
    <div class="col-md-12" style="text-align: center;">
        <div class="avd_div"><a class="bucn_4_r" href="javascript://" @click="$store.commit('startGame')">Играть</a></div>
        <div class="avd_div"><a class="bucn_4_r" href="javascript://" @click="$store.commit('getAbout')">Авторы</a></div>
    </div>
</div>
</template>
