function SidePanel({props}) {
    return <div>
        <div className="">
           {/* <p className="sticky top-0 flex flex-col items-start">sidepanel</p> */}
           <p>Closed On: {props.opencloseday}</p>
           <p>Tmimng :{props.timing}</p>
           <p>Latitude : {props.lat}</p>
           <p>Longitude : {props.long}</p>
        </div>
    </div>
}

export default SidePanel;