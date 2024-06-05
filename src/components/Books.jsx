import react from "react";
function Book(props){
    const  handleclick=(event)=>{
        props.onClick(props.id);
        event.preventDefault();
    }
    return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-2 m-2" style={{ width: '400px', height: '300px' }}>
       {} <div className="px-4 py-2">
            <div className="flex flex-row">
                <div className="font-bold text-lg mb-1 mr-2">Book Title:</div>
                <div className="font text-lg mb-1">{props.title}</div>
            </div>
            <div className="flex flex-row mt-6">
                <div className="font-bold text-lg mb-1 mr-2">Edition Count:</div>
                <div className="font text-lg mb-1">{props.Edition_Count}</div>
            </div>
            {!props.isInBookshelf && (
                        <button
                        className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleclick}
                        >
                        Add to Bookshelf
                        </button>
            )}
            
        </div>
    </div>
    
    );
    
}
export default Book;
