export default{
    name:'contactSchema',
    type:'document',
    title:'Messages',
    fields:[
        {
            name:'type',
            type:'text',
            title:'Message Type:',
            validation:(Rule)=>Rule.required()
        },
        {
            name:'email',
            type:'text',
            title:"User's email:"
        },
        {
            name:'images',
            type:'array',
            title:'Image Array',
            of:[{
                type:'image'
            }]
        },
        {
            name:'message',
            type:'text',
            title:'Message'
        }
    ]
}