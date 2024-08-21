import cards from "./components/cards";

function App() {

const cardData = [
{
  id: 1,
  cardTitle: "empty space" ,
  cardDesc: "don't know what to write" ,
  cardImg: "/logo192.png" ,
},
{
  id: 2,
  cardTitle: "empty space" ,
  cardDesc: "don't know what to write" ,
  cardImg: "/logo192.png" ,
},
{
  id: 3,
  cardTitle: "empty space" ,
  cardDesc: "don't know what to write" ,
  cardImg: "/logo192.png" ,
},
{
  id: 4,
  cardTitle: "empty space" ,
  cardDesc: "don't know what to write" ,
  cardImg: "/logo192.png" ,
},
{
  id: 5,
  cardTitle: "empty space" ,
  cardDesc: "don't know what to write" ,
  cardImg: "/logo192.png" ,
},
{
  id: 6,
  cardTitle: "empty space" ,
  cardDesc: "don't know what to write" ,
  cardImg: "/logo192.png" ,
},
{
  id: 7,
  cardTitle: "empty space" ,
  cardDesc: "don't know what to write" ,
  cardImg: "/logo192.png" ,
},
{
  id: 8,
  cardTitle: "empty space" ,
  cardDesc: "don't know what to write" ,
  cardImg: "/logo192.png" ,
},



]


  return (
    <>
     <section>
     <div className="row justify-content-evenly">
 {cardData && cardData.map((data, index) => (
  <cards key={index}
  cardTitle={data.cardTitle}
  cardDesc={data.cardDesc}
  cardImg={data.cardImg} />
 ))}


     </div>




     </section>
    </>
  );
}


