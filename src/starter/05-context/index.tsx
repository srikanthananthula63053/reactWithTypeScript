
import { useTheme, ThemProvider } from "./context";

function ParentComponet(){
    return(
        <ThemProvider>
            <Context/>
        </ThemProvider>
    )
}

function Context() {

    const context=useTheme()
    console.log(context)
    return (
        <div>
            <h2>React & Typescript</h2>
            <button 
            onClick={()=>{
                if(context.theme==='dark'){
                    context.setTheme('system')
                    return
                }
                context.setTheme('dark')
            }}
            className="btn btn-center"
            >toogle theme</button>
        </div>
    );
}
export default ParentComponet;