const difference=function (intialDate,secondDate){
    var string_date;
    const DaysInMonth=(utc2)=>{
        var monthStart=new Date(utc2.getFullYear(),utc2.getMonth(),1);
        var monthEnd=new Date(utc2.getFullYear(),utc2.getMonth()+1,1)
        var monthLength=(monthEnd-monthStart)/(1000*60*60*24)
        return monthLength
    }

    var yAp,mAp,dAp,hAp,miAp,sAp;
    intialDate=new Date(intialDate)
    secondDate=new Date(secondDate)
    
    const utc2=new Date(Date.UTC(intialDate.getFullYear(), intialDate.getMonth(),intialDate.getDate(),intialDate.getHours(),intialDate.getMinutes(),intialDate.getSeconds()))
    const utc1=new Date(Date.UTC(secondDate.getFullYear(), secondDate.getMonth(),secondDate.getDate(),secondDate.getHours(),secondDate.getMinutes(),secondDate.getSeconds()))

    var years=utc1.getFullYear()-utc2.getFullYear();

    var months=utc1.getMonth()-utc2.getMonth()

    var days=utc1.getDate()-utc2.getDate()

    var hours=utc1.getHours()-utc2.getHours()

    var minutes=utc1.getMinutes()-utc2.getMinutes()

    var seconds=Math.abs(utc1.getSeconds()-utc2.getSeconds())

    if(minutes<0){
        minutes+=60
        hours--;
    }

    if(hours<0){
        hours+=24
        days--;
    }
    
    if(days<0){
        days+=DaysInMonth(utc1)
        months--;
    }

    if(months<0)
    {
        months+=12;
        years--;
    }

    if(years!=1)
    {
        yAp=' years';
    }
    else yAp=' year';
    if(months!=1)
    {
        mAp=' months';
    }
    else mAp=' month';
    if(days!=1)
    {
        dAp=' days';
    }
    else dAp=' day';
    if(hours!=1)
    {
        hAp=' hours';
    }
    else hAp=' hour';
    if(minutes!=1)
    {
        miAp=' minutes';
    }
    else miAp=' minute';
    if(seconds!=1)
    {
        sAp=' seconds';
    }
    else sAp=' second';

    days=days.toFixed(0)

    console.log(
    years+yAp+"  "+months+mAp+"  "+days+dAp+"  "+hours+hAp+'  '+minutes+miAp+'  '+seconds+sAp
    )

    if(years<=0)
    {
    string_date=months+mAp+"  "+days+dAp+"  "+hours+hAp+'  '+minutes+miAp+'  '+seconds+sAp
        if(months<=0){
            string_date=days+dAp+"  "+hours+hAp+'  '+minutes+miAp+'  '+seconds+sAp
                if(days<=0){
                    string_date=hours+hAp+'  '+minutes+miAp+'  '+seconds+sAp
                }
        }
    }
    else{
    string_date=years+yAp+"  "+months+mAp+"  "+days+dAp+"  "+hours+hAp+'  '+minutes+miAp+'  '+seconds+sAp
    }
    return string_date
}
export default difference