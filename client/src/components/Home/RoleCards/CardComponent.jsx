import { Avatar, Card, Button } from "keep-react";
import UserCard from '../../../static/images/user_therapy_illus.jpg';
import ConsultantCard from '../../../static/images/consultant_illus.jpg';
import UserIcon from '../../../static/icons/user_icon.png';
import ConsultantIcon from '../../../static/icons/consultant_icon.png';
import { Blockquote } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function CardComponent() {

  const redirect = useNavigate();

  const UserLogin = () => {
    redirect("/User");
    window.scrollTo(0, 0);
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: '2rem',
    backgroundImage: `url(${require('../../../static/images/animated_shape.png')})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
  };

  const titleStyle = {
    fontFamily: 'NunitoSans',
    fontWeight: 'bolder',
    fontSize: '3rem',
    color: '#3e363f',
    width: '30%',
    lineHeight: '3.6rem',
    margin: '5rem',
    marginTop: '0',
    marginRight: '0'
  };


  return (
    <div style={divStyle}>
      <Blockquote style={titleStyle}>
        <svg
          className="mb-2 ml-2 h-8 w-8 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="#3e363f"
          viewBox="0 0 18 14"
          style={{ transform: 'scaleX(-1)' }}
          >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        What are you looking for?
      </Blockquote>
      <Card
        imgSrc={UserCard}
        imgSize="lg"
        className="max-w-xs">

        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute bottom-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar size="2xl" shape="circle" img={UserIcon} />
          </Card.Container>
          <Card.Container className="mb-3 mt-10 text-center">
            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Looking for Consultation?</Card.Title>
            <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Book an Appointment Now.</Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-center border-t  px-5 py-3">
            <Card.Container className="flex items-center justify-start gap-5">
              <Button size="sm" type="outlineGray" onClick={UserLogin} >
                BOOK APPOINTMENT
              </Button>
            </Card.Container>
          </Card.Container>
        </Card.Container>
      </Card>
      <Card
        imgSrc={ConsultantCard}
        imgSize="lg"
        className="max-w-xs">

        <Card.Container className="flex flex-col items-center justify-center">
          <Card.Container className="absolute bottom-32  rounded-full ring-4 ring-white ring-offset-0">
            <Avatar size="2xl" shape="circle" img={ConsultantIcon} />
          </Card.Container>
          <Card.Container className="mb-3 mt-10 text-center">
            <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">Ready to Offer Your Expertise?</Card.Title>
            <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Schedule Your Availability Now.</Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-center border-t  px-5 py-3">
            <Card.Container className="flex items-center justify-start gap-5">
              <Button size="sm" type="outlineGray">
                SCHEDULE AVAILABILITY
              </Button>
            </Card.Container>
          </Card.Container>
        </Card.Container>
      </Card>
    </div>
  )
}

export default CardComponent;