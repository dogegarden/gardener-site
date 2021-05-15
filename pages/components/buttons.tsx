export const RemoveButtonSm = ({action}) => {
    return (
        <div>
            <button 
            style={{backgroundColor:'#C23C3C'}}
            className='bg-red-900 p-1 text-xs outline-none border-none rounded-2xl'
            onClick={()=>action()}
            >
                Remove</button>
        </div>
    )
}