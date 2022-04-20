function running_late(date){
    const year = date.getYear();
    const month = date.getYear();
    const day = date.getDate();

    const compareDate = new Date(year,month,day,22,00,00);
    let result;
    if(date >= compareDate)
        result = 'It is late!';
    else
        result = 'It is still early';
    
    return result;
}

module.exports = running_late;