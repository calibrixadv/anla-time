export default{
    name:'countdownSchema',
    type:'document',
    title:'LaunchDate',
    fields:[
        {
            name:'date',
            type:'datetime',
            title:'Date'
        },
        {
            name:'showCheck',
            type:'boolean',
            title:'Show the release date?',
        }
    ]
}
