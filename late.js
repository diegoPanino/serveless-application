function running_late(date){
    const year = date.getYear();
    const month = date.getYear();
    const day = date.getDate();

    const compareDate = new Date(year,month,day,22,00,00);
    if(date >= compareDate)
        return 'It is late!';
    else
        return 'It is still early';
}

module.exports = running_late;