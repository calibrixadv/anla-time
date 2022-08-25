export default{
    name:'dateSchema',
    type:'document',
    title:'Date',
    fields:[
        {
            name:'name',
            type:'text',
            title:'Name',
            validation:(Rule)=>Rule.required()
        },
        {
            name:'second_name',
            type:'text',
            title:'Second Name'
        },
        {
            name:'first_date',
            type:'datetime',
            title:'First date:',
            validation:(Rule)=>Rule.required()
        },
        {
            name:'second_date',
            type:'datetime',
            title:'Second date:',
        },
        {
            name:'update',
            type:'boolean',
            title:'Update to current time:',
        },
        {
            name:'event_name',
            type:'text',
            title:'Occasion Name:',
            validation:(Rule)=>Rule.required()
        },
        {
            name:'tags',
            type:'array',
            of:[{type:'string'}],
            title:'tags Name:',
            validation:(Rule)=>Rule.required()
        },
        {
            name:'description',
            type:'text',
            title:'Description',
            validation:(Rule)=>Rule.required()
        },
        {
            name:'image',
            type:'image',
            title:'Custom Image:',
            options:{
                hotspot:true
            }
        }
    ]
}