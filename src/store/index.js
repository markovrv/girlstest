import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        activePage: 0,
        pages: {
            count: 15,
            content: [{
                    question: 'Даша и Ариша вдвоем спели песню за 2 минуты.<br>За сколько минут её споет одна девочка ?',
                    val: 1,
                    pics: ['1.png'],
                    correct: 2,
                    selected: 0,
                    ans: [
                        '1', '2', '4', 'не споет'
                    ]
                },
                {
                    question: 'Полетаем? Функция бывает:',
                    val: 1,
                    pics: ['2.png'],
                    correct: 4,
                    selected: 0,
                    ans: [
                        'ускоряющейся', 'растущей', 'взлетающей', 'возрастающей'
                    ]
                },
                {
                    question: 'Две кошечки съедают 2 сосиски за 2 минуты.<br>Сколько сосисок съедят 4 кошечки за 4 минуты?',
                    val: 2,
                    pics: ['3.png', 'cat.png', 'cat.png', 'cat.png', 'cat.png'],
                    correct: 2,
                    selected: 0,
                    ans: [
                        '4', '8', '16', 'не известно'
                    ]
                },
                {
                    question: 'Какие числа  бывают?',
                    val: 1,
                    pics: ['4.png', 'numbers.png'],
                    correct: 3,
                    selected: 0,
                    ans: [
                        'чудесные', 'красивые', 'фигурные', 'естественные'
                    ]
                },
                {
                    question: 'Волшебный домик построен в виде многогранника. Сколько у него граней?',
                    val: 2,
                    pics: ['5.png', 'girl.jpg'],
                    correct: 2,
                    selected: 0,
                    ans: [
                        '3 или больше', '4 или больше', '6 или больше', 'более 10'
                    ]
                },
                {
                    question: 'Мы, девочки, - и математики, и поэты. Сразу и математическим и филологическим термином <b>не является только</b>:',
                    val: 2,
                    pics: ['6.png'],
                    correct: 4,
                    selected: 0,
                    ans: [
                        'инверсия', 'сравнение', 'гипербола', 'эллипс'
                    ]
                },
                {
                    question: 'На озере росли лилии. Каждый день их число удваивалось. На 20 день заросло всё озеро. <b>На какой день заросла половина озера?</b>',
                    val: 2,
                    pics: ['7.png'],
                    correct: 4,
                    selected: 0,
                    ans: [
                        '10-й', '2-й', '5-й', '19-й'
                    ]
                },
                {
                    question: 'К чаю мама испекла квадратный тортик. Один из уголков отрезали.<br>Сколько стало углов?',
                    val: 1,
                    pics: ['8.png'],
                    correct: 2,
                    selected: 0,
                    ans: [
                        '3', '5', '4', 'не осталось'
                    ]
                },
                {
                    question: 'Маша заплатила за книгу по математике 200 рублей и ещё половину ее стоимости. Сколько стоит книга?',
                    val: 1,
                    pics: ['9.png'],
                    correct: 4,
                    selected: 0,
                    ans: [
                        '250', '300', '350', '400'
                    ]
                },
                {
                    question: 'Шестьдесят листов этой книги имеют толщину 1 сантиметр. Какова толщина всех листов книги, если в ней 240 страниц?',
                    val: 1,
                    pics: ['10.png'],
                    correct: 3,
                    selected: 0,
                    ans: [
                        '4', '8', '2', '6'
                    ]
                },
                {
                    question: 'На черно-белой фотографии черный цвет составляет 80% площади. Эту фотографию увеличили в 3 раза. Какой процент составляет белый цвет на увеличенной фотографии?',
                    val: 1,
                    pics: ['11.png'],
                    correct: 1,
                    selected: 0,
                    ans: [
                        '20%', '40%', '60%', '80%'
                    ]
                },
                {
                    question: 'Три воздушных шарика стоят на 12 рублей больше, чем один шарик.<br>Сколько стоит один шарик? ',
                    val: 1,
                    pics: ['12.png'],
                    correct: 3,
                    selected: 0,
                    ans: [
                        '4', '8', '6', '10'
                    ]
                },
                {
                    question: 'Ниночка учится жонглировать. В корзине у нее есть шары четырех цветов: синих – 3, красных – 5, желтых – 7, зеленых – 8. Сколько нужно взять ей шаров (не глядя), чтобы среди них наверняка оказались шары <b>всех цветов</b>?',
                    val: 3,
                    pics: ['13.png'],
                    correct: 2,
                    selected: 0,
                    ans: [
                        '16', '21', '20', '19'
                    ]
                },
                {
                    question: 'Поиграем фигурками! Какой многоугольник <b>не может</b> получиться при пересечении двух треугольников?',
                    val: 3,
                    pics: ['14.gif'],
                    correct: 4,
                    selected: 0,
                    ans: [
                        'треугольник', 'четырехугольник', 'пятиугольник', 'любой из перечисленных может получиться'
                    ]
                },
                {
                    question: 'Если сегодня суббота (почти выходной!), то какой день недели будет через 1000 дней?',
                    val: 3,
                    pics: ['15.png'],
                    correct: 3,
                    selected: 0,
                    ans: [
                        'воскресенье', 'понедельник', 'пятница', 'четверг'
                    ]
                },
            ]
        },
        results: [{
                ball: [0, 8],
                mess: 'Плоховато…  Но ты не расстраивайся. Сколько вокруг радостей! Но математикой все же занимайся – она тебе еще пригодится.'
            },
            {
                ball: [9, 13],
                mess: 'Не очень хорошо, но и не совсем плохо. Всё относительно. Вот тебе хороший совет: начинай заниматься математикой! Поверь, она тоже может приносить радость и удовольствие. Но это только тогда, когда всё получается.'
            },
            {
                ball: [14, 18],
                mess: 'Ты старалась, и результат налицо. А, может быть, как раз и не очень старалась. В этом случае рекомендации  относительно математики дать трудно. Главное – старайся! А можешь еще разочек попробовать. Но только в этот раз подумай как следует, прежде чем дать ответ!'
            },
            {
                ball: [19, 24],
                mess: 'Ты молодчина! Если, честно, есть ошибки. Но их немного. Поэтому абсолютно точно, что с математикой у тебя всё в порядке. Хорошо подумай, а не продолжить ли свое образование в этом направлении? Скажи, круто звучит: «Женщина-математик»?'
            },
            {
                ball: [25, 25],
                mess: 'Ты просто супер!!! Ошибок вообще нет, ни одной! Надо всерьез подумать о своем будущем в математике. А вдруг ты наше всё, и будем мы гордиться ещё одной Софьей Ковалевской!'
            },
        ],
        says: {
            corr: [
                'Ай да умница!',
                'Именно так, всё верно!',
                'Все правильно решила!',
                'Догадалась!',
                'Ай, да девочка!',
                'Какая же ты умная!',
                'Здорово получилось!',
                'Правильно!',
                'Верно!',
                'Какая молодец!',
                'Верный ответ!',
                'Всё верно!',
                'Супер!',
                'Молодчина!',
                'Отлично!',
            ],
            incorr: [
                'Ответ неверный',
                'Ошибочка вышла...',
                'Нет, не так...',
                'Неверно',
                'Ты, похоже, плохо подумала',
                'Как жаль, задачка не далась тебе...',
                'Баллов ты так не заработаешь...',
                'Неудача...',
                'Бывает...',
                'Ты поспешила, наверное...',
                'Ай-яй-яй... Всё не так...',
                'Как же так? Ошибка...',
                'Видимо, трудновата задача...',
                'Неверный ответ...',
                'Такой ответ не годится!',
            ],
            random: []
        },
        userId: 0,
    },
    getters: {
        correct(state) {
            return state.pages.content[state.activePage - 1].selected == state.pages.content[state.activePage - 1].correct
        },
        getResult(state) {
            let count = 0;
            state.pages.content.forEach((q) => { if (q.correct == q.selected) count += q.val });
            return count;
        },
        getHeadLine(state, getters) {
            return [
                "Вопрос №" + state.activePage + " из " + state.pages.count,
                "Баллы: " + getters.getResult
            ];
        },
        genSay(state, getters) {
            var rand = state.says.random[state.activePage - 1];
            if (getters.correct)
                return state.says.corr[rand];
            else
                return state.says.incorr[rand];
        },
        getResults(state, getters) {
            let result = getters.getResult;
            let out = "не найдено";
            state.results.forEach((res) => {
                if (res.ball[0] <= result && res.ball[1] >= result)
                    out = res.mess;
            });
            return out;
        },
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
        genRandSays(state) {
            var i, arr = [],
                res = [];
            for (i = 0; i < state.says.corr.length; i++) arr.push(i);
            for (i = 0; i < state.pages.count; i++) res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0])
            state.says.random = res;
        },
        selAns(state, data) {
            state.pages.content[state.activePage - 1].selected = data;
        },
        getIndex(state) {
            state.activePage = 0;
        },
        getAbout(state) {
            state.activePage = -1;
        },
        startGame(state) {
            state.activePage = 1;
        },
        nextPage(state) {
            if (state.activePage == state.pages.count)
                state.activePage = -2;
            else state.activePage++;
        },
    },
    actions: {
        getUserId({ state, commit }) {
            if (state.userId == 0)
                Axios
                .post("https://rza.kirov.ru/api/index.php", { getid: '' })
                .then(r => commit('setUserId', r.data.userId));
        },
        recAns({ state }) {
            if (state.userId > 0)
                Axios
                .post("https://rza.kirov.ru/api/index.php", {
                    rec: state.userId,
                    q: state.activePage,
                    a: state.pages.content[state.activePage - 1].selected
                }).then(() => {});
        },
    },
    modules: {}
})