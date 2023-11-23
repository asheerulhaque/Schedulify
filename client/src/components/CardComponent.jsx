import { Avatar, Card, Button } from "keep-react";
import CardImg from '../static/images/card_background.png';
import UserIcon from '../static/icons/user_icon.png';
import ConsultantIcon from '../static/icons/consultant_icon.png';
export const CardComponent = () => {

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: '2rem',
  };

  return (
    <div style={divStyle}>
    <Card
      imgSrc={CardImg}
      imgSize="mg"
      className="max-w-xs">
      
      <Card.Container className="flex flex-col items-center justify-center">
        <Card.Container className="absolute bottom-32  rounded-full ring-4 ring-white ring-offset-0">
          <Avatar size="2xl" shape="circle" img={UserIcon} />
        </Card.Container>
        <Card.Container className="mb-3 mt-10 text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">LOOKING FOR CONSULTATION?</Card.Title>
          <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Book Appointment Now.</Card.Title>
        </Card.Container>
        <Card.Container className="flex items-center justify-center border-t  px-5 py-3">
          <Card.Container className="flex items-center justify-start gap-5">
              <Button size="sm" type="outlineGray">
                USER LOGIN
              </Button>
            </Card.Container>
        </Card.Container>
      </Card.Container>
    </Card>
    <Card
      imgSrc={CardImg}
      imgSize="mg"
      className="max-w-xs">
      
      <Card.Container className="flex flex-col items-center justify-center">
        <Card.Container className="absolute bottom-32  rounded-full ring-4 ring-white ring-offset-0">
          <Avatar size="2xl" shape="circle" img={ConsultantIcon} />
        </Card.Container>
        <Card.Container className="mb-3 mt-10 text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">FOR CONSULTANT</Card.Title>
          <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Schedule your availibility now.</Card.Title>
        </Card.Container>
        <Card.Container className="flex items-center justify-center border-t  px-5 py-3">
          <Card.Container className="flex items-center justify-start gap-5">
              <Button size="sm" type="outlineGray">
                CONSULTANT LOGIN
              </Button>
            </Card.Container>
        </Card.Container>
      </Card.Container>
    </Card>
    </div>
  )
}