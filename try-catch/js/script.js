let json = '{"id":2}'

try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error("В этих данных нет имени!");
    }
} catch(err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    console.log(`Мы получили ошибку: ${err.name}`);
} finally {
    // finally не обязательная часть
    console.log('Я выполнюсь всегда!');
}


console.log('А я буду работать дальше');
