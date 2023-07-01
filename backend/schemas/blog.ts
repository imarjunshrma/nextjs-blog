import { defineArrayMember, defineField, defineType } from "sanity";

export const blog=defineType({
    name:'blogs',
    title:"Blogs",
    type:"document",
    fields:[
        defineField({
            name:'title',
            title:"Title",
            type:"string"
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"string"
        }),
        defineField({
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:'title'
            }
        }),
        defineField({
            
                title: 'Content', 
                name: 'content',
                type: 'array', 
                of: [defineArrayMember({type: 'block'}),defineArrayMember({type:'image'})]
              
        })
    ]
})