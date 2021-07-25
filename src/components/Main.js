import React from 'react';
import HornedBeasts from './HornedBeasts';
class Main extends React.Component {
    render() {
        return (
            <>
                <HornedBeasts title='Unicorn' url='https://www.greenbiz.com/sites/default/files/images/articles/featured/unicorn_sstock.jpg' description='This Unicorn is a fast flyable creature' />

                <HornedBeasts title='Antelope' url='https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_spiral_horned.jpg' description='This Antelope is very beautiful' />
            </>
        )
    }
}

export default Main;

