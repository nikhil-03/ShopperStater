
function Heading({name}){
    return <div>
        <h4 className="text-3xl font-normal leading-normal mt-0 mb-2 text-black">
           {name}
        </h4>
        <hr className="w-84 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
    </div>
}

export default Heading;