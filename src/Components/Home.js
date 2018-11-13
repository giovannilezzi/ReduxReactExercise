import React from 'react'
import ChannelsField from './ChannelsField'
import Button from '../Containers/Button'
import TopNews from '../Containers/TopNews'

import FormContainer from '../Containers/FormContainer'

const Home = () => (
    <div>
        <FormContainer/>
        <ChannelsField />
        <Button />
        <TopNews />
    </div>
)

export default Home;
