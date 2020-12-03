<template>
<div class="row contentrow">
    <div class="col-md-12" style="text-align: center;">
        <img src="img/titlePic.jpg" class="title-pic">
    </div>
    <div class="col-md-12" style="text-align: center;">
        <br>
        Твой результат: <span style="font-size:200%">{{$store.getters.getResult}}</span> из <span style="font-size:200%">25</span> баллов.
        <br>***<br>
        {{$store.getters.getResults}}
        <br><br>
    </div>
    <div class="col-md-12" style="text-align: center;">
        <div class="avd_div"><a href="javascript://" class="bucn_4_r" @click="$store.commit('getIndex')">Назад</a></div>
    </div>
</div>
</template>
