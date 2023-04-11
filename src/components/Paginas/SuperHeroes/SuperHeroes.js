import React, {useEffect, useState} from 'react';
import SuperHeroe from './SuperHeroe';
import batman from '../../Imagenes/batman.png'
import superman from '../../Imagenes/superman.png'
import superwoman from '../../Imagenes/superwoman.png'
import ironman from '../../Imagenes/ironman.png'

const SuperHeroes = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://superheroes.fly.dev/superHeroes/workouts")
        .then((res) => res.json())
        .then((data) => {
            setData(data.data)
        })
    })
    
    return (
        <div>
            <h1>Super Héroes</h1>
                <div className='container justifi-content-center bg-info'>
                    <div className='row'>
                    {
                        data.map((superheroe) => (
                            <div className='col-md-4' key={superheroe.id}>
                                <SuperHeroe title={superheroe.nombre} imageSource={superheroe.img} text={superheroe.descripcion} />
                            </div>
                        ))
                    }
                    </div>
                </div>
        </div>
    )
}

export default SuperHeroes;