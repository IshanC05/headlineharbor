import hourglass from './hourglass.gif'

const Spinner = () => {
    return (
        <div className='text-center'>
            <img className="my-3" src={hourglass} alt="hourglass" />
        </div>
    )
}

export default Spinner;