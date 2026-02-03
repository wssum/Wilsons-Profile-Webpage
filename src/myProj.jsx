import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import weatherPic from './images/weatherPicture.jpg';
import calendarPic from './images/calendarPicture.jpg';


const cards = [
  {
    id: 1,
    title: 'Wills Forecast',
    description: 'This is a weather Forecast website I made when I was in college. It uses TailwindCSS and data I found off the internet',
    path: "https://willsforecasts-3fe0e93c7230.herokuapp.com/",
    picture: calendarPic
  },
  {
    id: 2,
    title: 'Schedule Me Random',
    description: 'This is a scheduling website made for managers to schedule their workers randomly',
    path: "https://willsschedulemaker-a78c7ca1f8c1.herokuapp.com/",
    picture: weatherPic
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, auto))', // auto-size cards
        justifyContent: 'center', // center the grid
        gap: 2,
        width: '100%',
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id} sx={{ width: 200 }}>
  <CardActionArea
    component="a"
    href={card.path}
    target="_blank" // open in new tab
    onClick={() => setSelectedCard(index)}
    data-active={selectedCard === index ? '' : undefined}
    sx={{
      height: '100%',
      '&[data-active]': {
        backgroundColor: 'action.selected',
        '&:hover': {
          backgroundColor: 'action.selectedHover',
        },
      },
    }}
  >
    <CardContent>
      <Typography variant="h5">{card.title}</Typography>
        <img 
    src={card.picture} 
    alt={card.title} 
    style={{
      width: '100%',       // make it fit the card
      height: '120px',     // optional fixed height
      objectFit: 'cover',  // crop nicely
      borderRadius: '4px', // optional rounded corners
      marginBottom: '8px'
    }}
  />
      <Typography variant="body2" color="text.secondary">
        {card.description}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>

      ))}
    </Box>
  );
}

export default SelectActionCard;