const quotes = [
    {
    quote  : "일찍 일어나는 벌래는 새에게 먹힌다. ",
    author : "김혼란"
    },{ 
    quote  : "번아웃이 오면 쉬지말고 놀아라. ",
    author : "김혼란"
    },{
    quote  : "사람들은 놀라울 정도로 당신에게 관심이 없다. ",
    author : "김혼란"
    },{
    quote  : "무엇을 할지 고민이 된다면 눈감고 골라라. ",
    author : "김혼란"
    },{
    quote  : "위로를 받고 싶은 건지 조언을 구하고 싶은 건지 정해라. ",
    author : "김혼란"
    },{
    quote  : "말하기 전에 2초만 생각해라. ",
    author : "김혼란"
    },{
    quote  : "승질 내봤자 내 기분만 나빠진다. ",
    author : "김혼란"
    },{
    quote  : "상황을 타개할 획기적인 아이디어가 나오지 않는다면 놀아야 할 때가 온 것이다. ",
    author : "김혼란"
    },{
    quote  : "과한것 보다 적은게 좋다. ",
    author : "김혼란"
    },{
    quote  : "책임은 내가 지지만 모든 것을 혼자 감당할 필요는 없다. ",
    author : "김혼란"
    },{
    quote  : "할까 말까 고민될 때는 되도록 하는게 좋다. ",
    author : "김혼란"
    }];

    const quote = document.querySelector("#quotes span:first-child");
    const quoteName = document.querySelector("#quotes span:last-child");

    const randomQuote= quotes[Math.floor(Math.random() * images.length)];

    quote.innerText = randomQuote.quote;
    quoteName.innerText = randomQuote.author;
