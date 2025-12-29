import {Suspense} from 'react';
const AllData = React.lazy(() => import('./data'))

const data = () => {
    return (
        <div>
            <Suspense fallback = {<p>Loading....</p>}>
                <AllData/>
            </Suspense>
        </div>
    )
}

export default data;