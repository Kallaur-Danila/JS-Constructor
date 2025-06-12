
import image from './assets/image.png'

 export const model = [
    {type: 'title' , value: 'Конструктор на чистом JS', options: {
        tag:'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493248)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }},
    {type: 'text' , value: 'here text'},
    {type: 'columns' , value: [
        '11111111111',
        '22222222222',
        '33333333333'
    ]},
    {type: 'image', value: image}
]