import { NumberRule, StringRule, defineField, defineType } from "sanity";

export const tutorials=defineType({
    name: 'tutorials',
    type: 'document',
    title: 'Tutorials',
  fields: [
  defineField(
    {
     name: 'image',
      type: 'image',
      title: 'Image',
      options:{
        hotspot:true
      }
    }
  ),
  defineField({
    name: 'category',
    type: 'string',
    title: 'Category',
    validation:(Rule:StringRule)=>Rule.required()
  }),
  defineField({
    name: 'title',
    type: 'string',
    title: 'Title',
    validation:(Rule:StringRule)=>[
        Rule.min(5).required().error('Title Should be greater than 5 words'),
        Rule.max(400).warning('title can not be greater than 40words')
    ]
  }),
  defineField({
    name: 'description',
    type: 'string',
    title: 'Description',
    validation:(Rule:StringRule)=>Rule.min(50).required().error('Description Must Be 50 words')
  }),
  defineField({
    name: 'views',
    type: 'string',
    title: 'Views',
    validation:(Rule:StringRule)=>Rule.required()
  }),
  defineField({
    name: 'comments_no',
    type: 'number',
    title: 'Total Comments',
    validation:(Rule:NumberRule)=>Rule.required()
  }),
  defineField({
    name: 'url',
    type: 'url',
    title: 'Video Url',
    validation: (Rule) =>
      Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel'],
      }),
  }),
  ]
})
