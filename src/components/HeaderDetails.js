import '../css/headerDetails.css'

export default function HeaderDetails(){

    return <aside className='headerDetails'>
        <div className="headerDetails wrapper">
            <ul className='headerDetails__list -text-center'>
                <li>
                    <strong className='heading -h2 text -ultra'>TV & Movies</strong>
                    <span className='sub'>World's biggest shows</span>
                </li>
                <li>
                    <strong className='heading -h2 text -ultra'>From $10 a month</strong>
                    <span className='sub'>No lock-in contracts</span>
                </li>
                <li>
                    <strong className='heading -h2 text -ultra'>Stream in HD and 4K</strong>
                    <span className='sub'>Or watch offline</span>
                </li>
                <li>
                    <strong className='heading -h2 text -ultra'>No ads</strong>
                    <span className='sub'>Watch on 4 screens</span>
                </li>
            </ul>
        </div>
    </aside>
}