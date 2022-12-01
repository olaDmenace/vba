import Button from "../../Button"
import EditBot1 from "./EditBot1"

const EditBot = () => {
    return (
        <div className="grid gap-10">
            <EditBot1 />
            <div className='flex gap-5'>
                <button className='py-3 px-4 rounded bg-back-back text-white/70'>Back</button>
                <Button text={'Next'} />
            </div>
        </div>
    )
}

export default EditBot