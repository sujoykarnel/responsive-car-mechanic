import React from 'react';

import mechanic1 from '../../../images/mechanics/Mechanic1.jpg'
import mechanic2 from '../../../images/mechanics/Mechanic2.jpg'
import mechanic3 from '../../../images/mechanics/Mechanic3.jpg'
import mechanic4 from '../../../images/mechanics/Mechanic4.jpg'
import mechanic5 from '../../../images/mechanics/Mechanic5.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        id: 1,
        img: mechanic1,
        name: 'Androw Ismit',
        expertize: 'Engine Expert'
    },
    {
        id: 2,
        img: mechanic2,
        name: 'Mathows Hemmy',
        expertize: 'Car Expert'
    },
    {
        id: 3,
        img: mechanic3,
        name: 'Gill Haming',
        expertize: 'Cleaning Expert'
    },
    {
        id: 4,
        img: mechanic4,
        name: 'Albart Jhon',
        expertize: 'Oiling Expert'
    },
    {
        id: 5,
        img: mechanic5,
        name: 'Shon Poul',
        expertize: 'Coloring Expert'
    },
]

const Experts = () => {

    return (
        <div id='experts' className='container mx-auto'>
            <h2 className='text-primary'>Our Experts</h2>
            <div className='row '>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;