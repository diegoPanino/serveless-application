function running_late(date){
    const inputDate = new Date(date)
    const compareDate = new Date(date)
    
    compareDate.setHours(22,00,00);
    
    let result;
    
    if(inputDate >= compareDate)
        result = 'It is late!';
    else
        result = 'It is still early!';
    
    return result;
}
//exports.running_late = running_late;
module.exports = {
    running_late:running_late
}