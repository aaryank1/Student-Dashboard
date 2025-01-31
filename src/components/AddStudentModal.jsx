export default function AddStudentModal({open, onClose, children}){
    return (
        <div 
        onClick={onClose} 
        className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20": "invisible"}`}
        >
            <div 
            onClick={e => e.stopPropagation()} 
            className={`bg-white w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 h-2/3 lg:h-5/6 rounded-xl overflow-auto shadow p-4 transition-all text-black ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >
                <button onClick={onClose} className={`text-3xl absolute top-4 right-4 p-1 cursor-pointer rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`}>
                    X
                </button>

                {children}
            </div>
        </div>
    );
}