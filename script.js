'use strict';

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравстуйте' :
    (login == '') ? 'Нет логина' : 
    '';