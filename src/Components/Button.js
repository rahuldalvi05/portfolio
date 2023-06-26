function Button({children}){
    return(
        <button className="hover:text-black text-white  py-2 px-6 rounded md:ml-8 hover:bg-white duration-500">
            {children}
        </button>
    )
}

export default Button