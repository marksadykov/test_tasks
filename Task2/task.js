// new myMap() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.
// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of

function myMap(firstSet) {
    this._init();
    /* возможно в IE11 не сработает */
    /*
    firstSet && firstSet.forEach((item) => {
        this.set(item[0], item[1]);
    });
    */
    if (firstSet) {
        for(let i = 0; i < firstSet.length; i++) {
            this.set(firstSet[i][0], firstSet[i][1]);
        }
    }
}

myMap.prototype._init = function () {
    this._size = 0;
    this._keys = [];
    this._keyValue = {};
}

myMap.prototype.set = function (key, value) {
    this._keyValue[key] = value;
    this._keys.indexOf(key) < 0 && this._keys.push(key);
    this._size = this._keys.length;
    return this;
}

myMap.prototype.get = function (key) {
    return this._keyValue[key];
}

myMap.prototype.has = function (key) {
    return this._keys.indexOf(key) > -1;
}

myMap.prototype.delete = function (key) {
    const indexForDel = this._keys.indexOf(key);

    if(indexForDel < 0) {
        return false;
    }

    delete this._keyValue[key];
    this._keys.splice(indexForDel,1);
    this._size = this._keys.length;
    return true;
}

myMap.prototype.clear = function () {
    this._init();
}

myMap.prototype.size = function () {
    return this._size;
}

myMap.prototype.keys = function () {
    return this._keys;
}

myMap.prototype.values = function () {
    const values = [];
    for (let key in this._keyValue) {
        values.push(this._keyValue[key]);
    }
    return values;
}

myMap.prototype.entries= function () {
    const entries= [];
    for (let key in this._keyValue) {
        entries.push([key, this._keyValue[key]]);
    }
    return entries;
}

export default myMap;
