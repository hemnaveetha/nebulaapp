import React, { useState } from 'react';
import styled from 'styled-components';
import GameCard from './GameCard';
import GameContainer from './GameContainer'; // Import the new component

const backgroundImages = [
    { url: 'https://mir-s3-cdn-cf.behance.net/projects/404/e9c4a3143005095.Y3JvcCw4NjksNjgwLDI1LDA.png', route: '/Game1.html' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTCaQXrFL2GgjFvk_2aaKhMJQwTRP6fJEgGWyi1Z99PV65dA43wAD2KGe9BBcuBqjMYk&usqp=CAU', route: '/Game2.html' },
    { url: 'src/assets/images/Gorilla_game.jpg', route: '/Game3.html' },
    { url: 'https://img.gamepix.com/games/snake-challenge/cover/snake-challenge.png?w=400', route: '/Game4.html' },
    { url: 'https://i.pinimg.com/564x/88/91/1e/88911e52961af02bdf00edba3364a1ac.jpg', route: '/Game5.html' },
    { url: 'https://i.pinimg.com/originals/21/02/a1/2102a19ea556e1d1c54f40a3eda0d775.gif', route: '/Game6.html' },
];

const CreatorAllPage = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    const handleGameClick = (route) => {
        setSelectedGame(route);
    };

    return (
        <CreatorAllPageWrapper>
            <div className='sc-creators section'>
                <div className='container'>
                    {/* Display the game container if a game is selected */}
                    {selectedGame && <GameContainer src={selectedGame} onClose={() => setSelectedGame(null)} />}
                    
                    <GameCardsWrapper>
                        {backgroundImages.map((item, index) => (
                            <GameCardWrapper key={index} onClick={() => handleGameClick(item.route)}>
                                <GameCard
                                    title={`Game ${index + 1}`}
                                    description={`Description for game ${index + 1}`}
                                    backgroundImage={item.url}
                                />
                            </GameCardWrapper>
                        ))}
                    </GameCardsWrapper>
                </div>
            </div>
        </CreatorAllPageWrapper>
    );
}

export default CreatorAllPage;

const CreatorAllPageWrapper = styled.div`
    background-color: var(--clr-violet-dark-active);
    .sc-creators {
        min-height: 100vh;
        padding-top: 65px;
    }
`;

const GameCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
`;

const GameCardWrapper = styled.div`
    cursor: pointer;
`;
