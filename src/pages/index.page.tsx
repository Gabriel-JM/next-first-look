interface HomeProps {
  ownersList: Array<{
    name: string
    vehicle: string
  }>
}

function Home({ ownersList }: HomeProps) {
  return (
    <div>
      {ownersList.map((owner, index) => (
        <div key={index}>
          {owner.name}'s {owner.vehicle}
        </div>
      ))}
    </div>
  )
}

Home.getInitialProps = () => {
  return {
    ownersList: [
      {
        name: 'Gabriel',
        vehicle: 'Bike'
      }
    ]
  }
}

export default Home
