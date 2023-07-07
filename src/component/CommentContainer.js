import React from 'react'

const list = [
    {
        id: '1',
        author: 'Anvi',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        replies: []
    },
    {
        id: '2',
        author: 'Bubble',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        replies: []
    },
    {   
        id: '3',
        author: 'Alan',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        replies: [
            {
                id: '3a',
                author: 'Torry',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                replies: [
                    {
                        id: '3a1',
                        author: 'Dunns',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                        replies: []
                    },
                    {
                        id: '3a2',
                        author: 'Alex',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                        replies: [
                            {
                                id: '3b1',
                                author: 'Tom',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                                replies: [
                                    {
                                        id: '3c1',
                                        author: 'Jerry',
                                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                                        replies: [
                                            {
                                                id: '3d1',
                                                author: 'Snowball',
                                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                                                replies: []
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                id: '3bb',
                author: 'Gauri',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                replies: [
                    {
                        id: '3bb1',
                        author: 'Bambi',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                        replies: []
                    },
                ]
            },
        ]
    }
]


const CommentList = ({comments}) => {
   return comments.map(comment =>(
        <div key ={comment.id} >
            <Comment data={comment}/> 
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies}/>
            </div>
        </div>
        )
   ) 

}


const Comment = ({data}) => {
    const {author, text, replies} = data;
   return(
    <div className='flex flex-row bg-gray-100 mt-1 rounded-lg p-2'>
        <img className='h-8 w-8 border border-black rounded-full p-1' alt="user" 
        src="https://cdn-icons-png.flaticon.com/128/456/456212.png"/>
        <div className='ml-2'>
            <h1 className='font-semibold'>{author}</h1>
            <p>{text}</p>
        </div>
    </div>
    ) 
}

const CommentContainer = () => {
  return (
    <div className='ml-16'>
        <h1 className='font-bold text-lg'>Comments:</h1>
        <CommentList comments={list}/>
    </div>
  )
}

export default CommentContainer