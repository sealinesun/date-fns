/* eslint-env mocha */

var assert = require('power-assert')
var buildFormatFormatters = require('./')

describe('ru locale > buildFormatFormatters', function () {
  it('returns an object', function () {
    assert(typeof buildFormatFormatters() === 'object')
  })

  describe('MMM', function () {
    it('returns `янв.` for January', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 0)) === 'янв.')
    })

    it('returns `фев.` for February', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 1)) === 'фев.')
    })

    it('returns `март` for March', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 2)) === 'март')
    })

    it('returns `апр.` for April', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 3)) === 'апр.')
    })

    it('returns `май` for May', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 4)) === 'май')
    })

    it('returns `июнь` for June', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 5)) === 'июнь')
    })

    it('returns `июль` for July', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 6)) === 'июль')
    })

    it('returns `авг.` for August', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 7)) === 'авг.')
    })

    it('returns `сент.` for September', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 8)) === 'сент.')
    })

    it('returns `окт.` for October', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 9)) === 'окт.')
    })

    it('returns `нояб.` for November', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 10)) === 'нояб.')
    })

    it('returns `дек.` for December', function () {
      assert(buildFormatFormatters().MMM(new Date(2016, 11)) === 'дек.')
    })
  })

  describe('MMMM', function () {
    it('returns `январь` for January', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 0)) === 'январь')
    })

    it('returns `февраль` for February', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 1)) === 'февраль')
    })

    it('returns `март` for March', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 2)) === 'март')
    })

    it('returns `апрель` for April', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 3)) === 'апрель')
    })

    it('returns `май` for May', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 4)) === 'май')
    })

    it('returns `июнь` for June', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 5)) === 'июнь')
    })

    it('returns `июль` for July', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 6)) === 'июль')
    })

    it('returns `август` for August', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 7)) === 'август')
    })

    it('returns `сентябрь` for September', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 8)) === 'сентябрь')
    })

    it('returns `октябрь` for October', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 9)) === 'октябрь')
    })

    it('returns `ноябрь` for November', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 10)) === 'ноябрь')
    })

    it('returns `декабрь` for December', function () {
      assert(buildFormatFormatters().MMMM(new Date(2016, 11)) === 'декабрь')
    })
  })

  describe('dd', function () {
    it('returns `вс` for Sunday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 7)) === 'вс')
    })

    it('returns `пн` for Monday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 1)) === 'пн')
    })

    it('returns `вт` for Tuesday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 2)) === 'вт')
    })

    it('returns `ср` for Wednesday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 3)) === 'ср')
    })

    it('returns `чт` for Thursday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 4)) === 'чт')
    })

    it('returns `пт` for Friday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 5)) === 'пт')
    })

    it('returns `сб` for Saturday', function () {
      assert(buildFormatFormatters().dd(new Date(2016, 1 /* Feb */, 6)) === 'сб')
    })
  })

  describe('ddd', function () {
    it('returns `вск` for Sunday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 7)) === 'вск')
    })

    it('returns `пнд` for Monday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 1)) === 'пнд')
    })

    it('returns `втр` for Tuesday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 2)) === 'втр')
    })

    it('returns `срд` for Wednesday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 3)) === 'срд')
    })

    it('returns `чтв` for Thursday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 4)) === 'чтв')
    })

    it('returns `птн` for Friday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 5)) === 'птн')
    })

    it('returns `суб` for Saturday', function () {
      assert(buildFormatFormatters().ddd(new Date(2016, 1 /* Feb */, 6)) === 'суб')
    })
  })

  describe('dddd', function () {
    it('returns `воскресенье` for Sunday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 7)) === 'воскресенье')
    })

    it('returns `понедельник` for Monday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 1)) === 'понедельник')
    })

    it('returns `вторник` for Tuesday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 2)) === 'вторник')
    })

    it('returns `среда` for Wednesday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 3)) === 'среда')
    })

    it('returns `четверг` for Thursday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 4)) === 'четверг')
    })

    it('returns `пятница` for Friday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 5)) === 'пятница')
    })

    it('returns `суббота` for Saturday', function () {
      assert(buildFormatFormatters().dddd(new Date(2016, 1 /* Feb */, 6)) === 'суббота')
    })
  })

  describe('A', function () {
    it('returns `ночи` for 12-3 a.m.', function () {
      [0, 1, 2, 3].forEach(function (hours) {
        assert(buildFormatFormatters().A(new Date(2016, 1 /* Feb */, 11, hours)) === 'ночи')
      })
    })

    it('returns `утра` for 4-11 a.m.', function () {
      [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
        assert(buildFormatFormatters().A(new Date(2016, 1 /* Feb */, 11, hours)) === 'утра')
      })
    })

    it('returns `дня` for 12-4 p.m.', function () {
      [12, 13, 14, 15, 16].forEach(function (hours) {
        assert(buildFormatFormatters().A(new Date(2016, 1 /* Feb */, 11, hours)) === 'дня')
      })
    })

    it('returns `вечера` for 5-11 p.m.', function () {
      [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
        assert(buildFormatFormatters().A(new Date(2016, 1 /* Feb */, 11, hours)) === 'вечера')
      })
    })
  })

  describe('a', function () {
    it('returns `ночи` for 12-3 a.m.', function () {
      [0, 1, 2, 3].forEach(function (hours) {
        assert(buildFormatFormatters().a(new Date(2016, 1 /* Feb */, 11, hours)) === 'ночи')
      })
    })

    it('returns `утра` for 4-11 a.m.', function () {
      [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
        assert(buildFormatFormatters().a(new Date(2016, 1 /* Feb */, 11, hours)) === 'утра')
      })
    })

    it('returns `дня` for 12-4 p.m.', function () {
      [12, 13, 14, 15, 16].forEach(function (hours) {
        assert(buildFormatFormatters().a(new Date(2016, 1 /* Feb */, 11, hours)) === 'дня')
      })
    })

    it('returns `вечера` for 5-11 p.m.', function () {
      [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
        assert(buildFormatFormatters().a(new Date(2016, 1 /* Feb */, 11, hours)) === 'вечера')
      })
    })
  })

  describe('aa', function () {
    it('returns `ночи` for 12-3 a.m.', function () {
      [0, 1, 2, 3].forEach(function (hours) {
        assert(buildFormatFormatters().aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'ночи')
      })
    })

    it('returns `утра` for 4-11 a.m.', function () {
      [4, 5, 6, 7, 8, 9, 10, 11].forEach(function (hours) {
        assert(buildFormatFormatters().aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'утра')
      })
    })

    it('returns `дня` for 12-4 p.m.', function () {
      [12, 13, 14, 15, 16].forEach(function (hours) {
        assert(buildFormatFormatters().aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'дня')
      })
    })

    it('returns `вечера` for 5-11 p.m.', function () {
      [17, 18, 19, 20, 21, 22, 23].forEach(function (hours) {
        assert(buildFormatFormatters().aa(new Date(2016, 1 /* Feb */, 11, hours)) === 'вечера')
      })
    })
  })

  describe('Mo', function () {
    it('returns ordinal result of M formatter', function () {
      assert(buildFormatFormatters().Mo(null, {M: function () { return 1 }}), '1-й')
      assert(buildFormatFormatters().Mo(null, {M: function () { return 2 }}), '2-й')
      assert(buildFormatFormatters().Mo(null, {M: function () { return 3 }}), '3-й')
    })
  })

  describe('Do', function () {
    it('returns ordinal result of D formatter', function () {
      assert(buildFormatFormatters().Do(null, {D: function () { return 1 }}), '1-е')
      assert(buildFormatFormatters().Do(null, {D: function () { return 2 }}), '2-е')
      assert(buildFormatFormatters().Do(null, {D: function () { return 3 }}), '3-е')
    })
  })

  describe('DDDo', function () {
    it('returns ordinal result of DDD formatter', function () {
      assert(buildFormatFormatters().DDDo(null, {DDD: function () { return 1 }}), '1-й')
      assert(buildFormatFormatters().DDDo(null, {DDD: function () { return 2 }}), '2-й')
      assert(buildFormatFormatters().DDDo(null, {DDD: function () { return 3 }}), '3-й')
    })
  })

  describe('do', function () {
    it('returns ordinal result of d formatter', function () {
      assert(buildFormatFormatters().do(null, {d: function () { return 1 }}), '1-й')
      assert(buildFormatFormatters().do(null, {d: function () { return 2 }}), '2-й')
      assert(buildFormatFormatters().do(null, {d: function () { return 3 }}), '3-й')
    })
  })

  describe('Qo', function () {
    it('returns ordinal result of Q formatter', function () {
      assert(buildFormatFormatters().Qo(null, {Q: function () { return 1 }}), '1-й')
      assert(buildFormatFormatters().Qo(null, {Q: function () { return 2 }}), '2-й')
      assert(buildFormatFormatters().Qo(null, {Q: function () { return 3 }}), '3-й')
    })
  })

  describe('Wo', function () {
    it('returns ordinal result of W formatter', function () {
      assert(buildFormatFormatters().Wo(null, {W: function () { return 1 }}), '1-я')
      assert(buildFormatFormatters().Wo(null, {W: function () { return 2 }}), '2-я')
      assert(buildFormatFormatters().Wo(null, {W: function () { return 3 }}), '3-я')
    })
  })
})
