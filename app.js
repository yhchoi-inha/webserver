const express = require('express'); // 익스프레스 모듈(익스프레스 내부에 http 모듈 내장)
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => { // req(요청에 대한 정보), res(응답에 관한 정보)
    // res.send('testing');
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '빈 포트 대기');
})